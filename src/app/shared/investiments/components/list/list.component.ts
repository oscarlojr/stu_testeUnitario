import { Component, OnInit } from '@angular/core';

// Model
import { Investiments } from '../../model/investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public investiments:Array<Investiments> =[
    {
      name: "Itaú",
      value: 100
    },
    {
      name: "Banco de Brasil",
      value: 254
    },
    {
      name: "Nubank",
      value: 260
    },
    {
      name: "Bradesco",
      value: 369
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
