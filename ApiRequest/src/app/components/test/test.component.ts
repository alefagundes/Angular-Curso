import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  @Input() nameInput: String = '';
  @Output() nameOutput: EventEmitter<any> = new EventEmitter();

  constructor() {}

  sendEvent(name: String): void {
    this.nameOutput.emit(name);
  }
}
