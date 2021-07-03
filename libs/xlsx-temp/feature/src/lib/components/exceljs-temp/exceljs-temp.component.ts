import { Component, Input } from '@angular/core';
import * as ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

@Component({
  selector: 'dxl-angsp-exceljs-temp',
  templateUrl: './exceljs-temp.component.html',
  styleUrls: ['./exceljs-temp.component.scss'],
})
export class ExceljsTempComponent {
  @Input() buffer: ArrayBuffer | null = new ArrayBuffer(8);

  private async processXLSX(wb: ExcelJS.Workbook): Promise<void> {
    await wb.xlsx.load(this.buffer as ArrayBuffer);
    const ws = wb.getWorksheet(1);
    console.log(ws.getCell('E6'));
    ws.getCell('E6').value = 'Greece';
    this.writeFile(wb);
  }

  private async writeFile(wb: ExcelJS.Workbook): Promise<void> {
    const ws = wb.getWorksheet(1);
    console.log(ws.getCell('A1'));
    const buffer = await await wb.xlsx.writeBuffer({
      useStyles: true,
    });
    saveAs(
      new Blob([buffer], {
        // type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        type: 'application/vnd.ms-excel',
      }),
      'exceljs-temp.xls'
    );
  }

  public downloadTemplate(): void {
    const wb = new ExcelJS.Workbook();
    this.processXLSX(wb);
  }
}
