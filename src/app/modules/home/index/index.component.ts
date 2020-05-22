import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';


type AOA = any[];

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
  @ViewChild('tbldata', { static: false }) content: ElementRef;
  data: AOA = [];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName = 'SheetJS.xlsx';
  isShowUpload: boolean;
  date: any;

  constructor() {
    this.isShowUpload = false;
  }

  ngOnInit() {
    this.date = new Date();
  }

  onFileChange(evt: any) {
    const target: DataTransfer = (evt.target) as DataTransfer;
    if (target.files[0].name.includes('.xlsx')) {
      if (target.files.length !== 1) { throw new Error('Cannot use multiple files'); }
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        this.data = ((XLSX.utils.sheet_to_json(ws, { header: 1 })) as AOA);
        console.log(this.data);
      };
      reader.readAsBinaryString(target.files[0]);
      this.isShowUpload = true;
    }
  }

  public downloadPDF() {
    const doc = new jsPDF();
    const specialElementHandlers = {
      '#editor'(element, renderer) {
        return true;
      }
    };
    const content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      width: 190,
      elementHandlers: specialElementHandlers
    });
    doc.save('test.pdf');
  }
}
