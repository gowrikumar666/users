import { Component } from '@angular/core';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent {
  fileName = 'ExcelSheet.xlsx';

  userList = [
    {

      "id": 1,
      
      "name": "Leanne Graham",
      
      "username": "Bret",
      
      "email": "Sincere@april.biz"
      
      },
      
      {
      
      "id": 2,
      
      "name": "Ervin Howell",
      
      "username": "Antonette",
      
      "email": "Shanna@melissa.tv"
      
      },
      
      {
      
      "id": 3,
      
      "name": "Clementine Bauch",
      
      "username": "Samantha",
      
      "email": "Nathan@yesenia.net"
      
      },
      
      {
      
      "id": 4,
      
      "name": "Patricia Lebsack",
      
      "username": "Karianne",
      
      "email": "Julianne.OConner@kory.org"
      
      },
      
      {
      
      "id": 5,
      
      "name": "Chelsey Dietrich",
      
      "username": "Kamren",
      
      "email": "Lucio_Hettinger@annie.ca"
      
      }
      
      
  ]

  constructor() { }

  export():void
  {
    const element = document.getElementById('excel-table');
    const Ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element)

    const Wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet( Wb, Ws, 'Sheet1');

    XLSX.writeFile(Wb, this.fileName);
  }

  

}
