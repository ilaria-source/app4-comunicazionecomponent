import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Input()
  //quando instanzi un oggetto, ricordati di dargli dei dati sennò sclera tutto.
  users: { nome: string; citta: string; }[] = [];

  @Output() user = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
  }

  removeUser(user: any){ //ho messo any perchè vuole un tipo d'oggetto
    this.user.emit(user);
  }


  ngOnChanges(cambio: SimpleChanges){
    console.log('Sono ngOnChanges: ' + cambio);
  }

  

}
