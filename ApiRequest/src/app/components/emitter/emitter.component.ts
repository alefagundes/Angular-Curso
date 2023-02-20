import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss'],
})
export class EmitterComponent implements OnInit {
  numero: Number = 0;
  list: Array<any> = new Array<any>();
  formater: Array<any> = new Array<any>();
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<{}>('https://pokeapi.co/api/v2/pokemon/')
      .subscribe((response) => {
        console.log(response);
      });
  }

  onChangeNumber(): void {
    //ao propagar o evento que é monitorado no componente filho o mesmo dispara a execução da função
    //onChangeNumber e altera o valor em um numero randomico de 0 a 100 arredondando para baixo
    this.numero = Math.floor(Math.random() * 100);
  }
}
