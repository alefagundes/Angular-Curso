import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-numbers',
  templateUrl: './change-numbers.component.html',
  styleUrls: ['./change-numbers.component.scss'],
})
export class ChangeNumbersComponent {
  //digo que essa ação sera de referencia de saida do meu componente
  //e defino o nome da saída.

  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick(): void {
    //ao disparar a fuinção clicando no botao eu propago o evento no componente filho
    this.changeNumber.emit();
  }
}
