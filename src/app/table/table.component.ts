import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
//users : [{ nome: string, citta: string }];

public users: Array<{nome: string, citta: string}> = [];

  // users = [
  //   {nome: 'Max', citta: 'Roma'},
  //   {nome: 'Mario', citta: 'Napoli'},
  //   {nome: 'Simona', citta: 'Milano'}
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
