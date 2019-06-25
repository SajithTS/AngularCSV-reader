import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUpload2Component } from './file-upload2/file-upload2.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FileUploadComponent,
    FileUpload2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
