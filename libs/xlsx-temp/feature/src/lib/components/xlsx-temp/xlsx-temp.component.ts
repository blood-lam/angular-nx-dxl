import { Component, Input } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Food } from '@dxl-angsp/xlsx-temp/data-access';
import * as XLSX from 'xlsx';

@Component({
  selector: 'dxl-angsp-xlsx-temp',
  templateUrl: './xlsx-temp.component.html',
  styleUrls: ['./xlsx-temp.component.scss'],
})
export class XlsxTempComponent {
  @Input() buffer: ArrayBuffer | null = new ArrayBuffer(8);

  private readonly data: string[][] = [];
  public readonly foods: Food[] = [
    { value: 'steak-0', viewValue: '7 ngày gần nhất' },
    { value: 'aoa', viewValue: 'Generate template form array' },
    { value: 'url', viewValue: 'Edit downloaded excel file from url' },
  ];

  private exportXLSXFromAoA(filename = 'SheetJS'): void {
    /**
     * Initial data template.
     */
    this.createTemplate(this.data);

    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, `${filename}.xlsx`);
  }

  private exportXLSXFromUrl(filename = 'SheetJS'): void {
    const readOptions: XLSX.ParsingOptions = {
      type: 'buffer',
      cellStyles: true,
    };
    const wb: XLSX.WorkBook = XLSX.read(this.buffer, readOptions);
    const firstSheet: string = wb.SheetNames[0];
    const ws: XLSX.WorkSheet = wb.Sheets[firstSheet];

    console.log(ws['A2']);

    /**
     * modify value in E4
     */
    ws['E4'].v = 'Greece';

    // modify value if E4 is undefined / does not exists
    // XLSX.utils.sheet_add_aoa(ws, [['Greece']], {origin: 'E4'});

    /* save to file */
    XLSX.writeFile(wb, `${filename}.xlsx`, {
      cellStyles: true,
    });
  }

  /**
   * Initial data for template.
   *
   * @param data a store object.
   */
  private createTemplate(data: string[][]): void {
    data[1] = ['', '                 THÔNG BÁO VỀ TÌNH TRẠNG GIA ĐÌNH'];

    data[3] = ['', 'Nơi nhận     : ', 'Khối Quản trị nguồn nhân lực'];
    data[4] = ['', 'Người gửi        : ', '', '', 'Số hiệu NV:'];

    data[7] = ['', 'Tôi xin thông báo tình trạng gia đình của tôi như sau:'];

    data[8] = ['', 'I - LẬP GIA ĐÌNH:'];
    data[9] = ['', 'Họ và tên vợ/ chồng:'];
    data[10] = ['', 'Ngày tháng năm sinh:'];
    data[11] = ['', 'Nơi cư trú:'];
    data[12] = ['', 'Cơ quan công tác:'];

    data[14] = ['', 'II - THÔNG TIN VỀ CON:'];
    data[15] = ['', 'Họ và tên con:'];
    data[16] = ['', 'Giới tính:'];
    data[17] = ['', 'Ngày tháng năm sinh:'];
    data[19] = ['', 'Họ và tên con:'];
    data[20] = ['', 'Giới tính:'];
    data[21] = ['', 'Ngày tháng năm sinh:'];

    data[22] = ['', 'III - KHÁC (Độc thân, ly hôn..):'];

    data[27] = [
      '',
      'Tôi xin xác nhận thông tin trên là hoàn toàn đúng sự thật.',
    ];

    data[29] = ['', '', '', '', 'Ngày           tháng           năm '];

    data[32] = ['', 'Lưu ý: Khi có thay đổi về tình trạng gia đình đề nghị'];
    data[33] = ['', 'các cán bộ, nhân viên cập nhật ngay thông tin với '];
    data[34] = ['', 'Khối Quản trị nguồn nhân lực.'];
    data[35] = ['', '', '', '', '(Ký xác nhận & ghi rõ họ tên)'];
  }

  public selectedFood({ value }: MatSelectChange): void {
    const filename = this.foods.find((food) => food.value == value)?.viewValue;
    switch (value) {
      case 'aoa':
        this.exportXLSXFromAoA(filename);
        break;
      case 'url':
        this.exportXLSXFromUrl(filename);
        break;
      default:
        break;
    }
  }
}
