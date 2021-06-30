import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Food } from '@dxl-angsp/xlsx-temp/data-access';
import * as XLSX from 'xlsx';

@Component({
  selector: 'dxl-angsp-xlsx-temp-shell',
  templateUrl: './xlsx-temp-shell.component.html',
  styleUrls: ['./xlsx-temp-shell.component.scss'],
})
export class XlsxTempShellComponent implements OnInit {
  data: any[5][5] = [];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';

  foods: Food[] = [
    { value: 'steak-0', viewValue: '7 ngày gần nhất' },
    { value: 'pizza-1', viewValue: '1 tháng gần nhất' },
    { value: 'tacos-2', viewValue: 'Tùy chỉnh' },
  ];

  constructor() {}

  ngOnInit(): void {}

  private exportXLSX(fileName: string = 'SheetJS'): void {
    /* generate worksheet */
    this.createTemplate(this.data);
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }

  private createTemplate(data: any) {
    data[1]=[, '                 THÔNG BÁO VỀ TÌNH TRẠNG GIA ĐÌNH']

    data[3]=[, 'Nơi nhận     : ','Khối Quản trị nguồn nhân lực',]
    data[4]=[, 'Người gửi        : ',,,'Số hiệu NV:',]

    data[7]=[, 'Tôi xin thông báo tình trạng gia đình của tôi như sau:']

    data[8]=[, 'I - LẬP GIA ĐÌNH:']
    data[9]=[, 'Họ và tên vợ/ chồng:']
    data[10]=[, 'Ngày tháng năm sinh:']
    data[11]=[, 'Nơi cư trú:']
    data[12]=[, 'Cơ quan công tác:']

    data[14]=[, 'II - THÔNG TIN VỀ CON:']
    data[15]=[, 'Họ và tên con:']
    data[16]=[, 'Giới tính:']
    data[17]=[, 'Ngày tháng năm sinh:']
    data[19]=[, 'Họ và tên con:']
    data[20]=[, 'Giới tính:']
    data[21]=[, 'Ngày tháng năm sinh:']

    data[22]=[, 'III - KHÁC (Độc thân, ly hôn..):']

    data[27]=[, 'Tôi xin xác nhận thông tin trên là hoàn toàn đúng sự thật.']

    data[29]=[,,,, 'Ngày           tháng           năm ']

    data[32]=[, 'Lưu ý: Khi có thay đổi về tình trạng gia đình đề nghị']
    data[33]=[, 'các cán bộ, nhân viên cập nhật ngay thông tin với ']
    data[34]=[, 'Khối Quản trị nguồn nhân lực.']
    data[35]=[,,,, '(Ký xác nhận & ghi rõ họ tên)']
  }

  public selectedFood({ value }: MatSelectChange): void {
    this.exportXLSX(this.foods.find((food) => food.value == value)?.viewValue);
  }
}
