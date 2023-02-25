import { Component, OnInit } from '@angular/core';
import { Name } from 'src/interfaces/Name';

@Component({
  selector: 'app-list-name',
  templateUrl: './list-name.component.html',
  styleUrls: ['./list-name.component.scss'],
})
export class ListNameComponent implements OnInit {
  public listName: Array<any> = new Array<any>();
  constructor() {}

  ngOnInit(): void {}

  public obterTodosNames() {}

  showNames() {
    this.listName = new Array<undefined>();
  }
}
