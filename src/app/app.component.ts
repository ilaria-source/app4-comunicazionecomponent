import { Component, Input, OnInit, DoCheck  } from '@angular/core';
import { FormComponent } from '../app/form/form.component';
import { TableComponent } from '../app/table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title="app4-comunicazionecomponent";
  @Input() utenti: {nome: string, citta: string}[] = [];

  //questo è typescript
  constructor(){
    console.log('Sono constructor');
  }

  //questo è angular
  ngOnInit(){
    console.log('Sono ngOnInit');
    this.utenti = [
      {nome: 'Max', citta: 'Roma'},
      {nome: 'Mario', citta: 'Napoli'},
      {nome: 'Simona', citta: 'Milano'}
    ];
  }

  //parte ad ogni cambiamento di variabile
  ngDoCheck(){
    console.log('Sono ngDoCheck');
  }

  getUser(event: {nome: string, citta: string}){
    this.utenti.push(
      {nome: event.nome, citta: event.citta}
    );
  }

  getRemoveUser(event: number){
    this.utenti.splice(event, 1)
  }

}
