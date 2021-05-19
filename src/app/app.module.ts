import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
//importa ogni componente che abbiamo
//quando li creo con generate, li inserisce in modo automatico

@NgModule({
  declarations: [
    //e lo dichiariamo qua poi
    AppComponent,
    TableComponent,
    FormComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
