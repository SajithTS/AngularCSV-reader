import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent implements OnInit {
  public tableResult: any;
  constructor() { }

  ngOnInit() {
  }


  myFunction(file:any) {
    //var x: any = document.getElementById("myFile");
    var reader = new FileReader();
    reader.readAsText(file.target.files[0]);
    reader.onload = (event: any) => {
      var data = event.target.result;
      //var data;   
      var employee_data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table table-bordered table-striped">';
      for (var count = 0; count < employee_data.length; count++) {
        var cell_data = employee_data[count].split(",");
        table_data += '<tr>';
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
          if (count === 0) {
            table_data += '<th>' + cell_data[cell_count] + '</th>';
          }
          else {
            table_data += '<td>' + cell_data[cell_count] + '</td>';
          }
        }
        table_data += '</tr>';
      }
      table_data += '</table>';
      this.tableResult = table_data;
    };
    reader.onerror = function () {
      //alert('Unable to read ' + file.fileName);
    };

  }

}
