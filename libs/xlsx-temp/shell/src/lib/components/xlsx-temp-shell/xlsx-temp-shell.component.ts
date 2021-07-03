import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'dxl-angsp-xlsx-temp-shell',
  templateUrl: './xlsx-temp-shell.component.html',
  styleUrls: ['./xlsx-temp-shell.component.scss'],
})
export class XlsxTempShellComponent {
  private readonly ngUnsubscribe = new Subject<void>();
  private readonly xlsxUrl =
    'https://file-examples-com.github.io/uploads/2017/02/file_example_XLSX_10.xlsx';
  // 'https://file-examples-com.github.io/uploads/2017/02/file_example_XLS_10.xls';

  bufferData$ = this.http.get(this.xlsxUrl, {
    responseType: 'arraybuffer',
  });

  constructor(private http: HttpClient) {}
}
