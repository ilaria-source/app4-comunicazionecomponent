import { Component } from '@angular/core';
import { FormComponent } from '../app/form/form.component';
import { TableComponent } from '../app/table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="app4-comunicazionecomponent";
  utenti = [
    {nome: 'Max', citta: 'Roma'},
    {nome: 'Mario', citta: 'Napoli'},
    {nome: 'Simona', citta: 'Milano'}
  ];

}
