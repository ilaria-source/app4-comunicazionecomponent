import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input()
  users: { nome: string; citta: string; }[] = [];
//quando instanzi un oggetto, ricordati di dargli dei dati sennò sclera tutto.

// public users: Array<{nome: string, citta: string}> = [];

  // users = [
  //   {nome: 'Max', citta: 'Roma'},
  //   {nome: 'Mario', citta: 'Napoli'},
  //   {nome: 'Simona', citta: 'Milano'}
  // ];

  constructor() {}

  ngOnInit(): void {
  }

}
