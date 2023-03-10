import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.scss'],
})
export class IfRenderComponent {
  name: String = '';
  counter = 0;

  onVisible() {
    this.counter += 1;
    if (this.name.length > 0) {
      this.name = '';
    } else {
      this.name = `alessandro ${this.counter}`;
    }
  }
}
