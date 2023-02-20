import { Component, OnInit } from '@angular/core';
import { Name } from 'src/interfaces/Name';
import { NameServiceService } from '../name-service.service';

@Component({
  selector: 'app-list-name',
  templateUrl: './list-name.component.html',
  styleUrls: ['./list-name.component.scss'],
})
export class ListNameComponent implements OnInit {
  public listName: Array<any> = new Array<any>();
  constructor(private nameService: NameServiceService) {}

  ngOnInit(): void {
    this.obterTodosNames();
  }

  public obterTodosNames() {
    this.nameService
      .getAll()
      .then((response) =>
        response
          ? (this.listName = response)
          : (this.listName = new Array<Name>())
      )
      .catch((erro) => console.log(erro));
  }

  showNames() {
    this.listName = new Array<undefined>();
  }
}
