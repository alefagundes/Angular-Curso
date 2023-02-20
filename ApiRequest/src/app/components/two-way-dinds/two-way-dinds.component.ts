import { Component } from '@angular/core';
import { Animals } from 'src/interfaces/Animal';

@Component({
  selector: 'app-two-way-dinds',
  templateUrl: './two-way-dinds.component.html',
  styleUrls: ['./two-way-dinds.component.scss'],
})
export class TwoWayDindsComponent {
  name: String = '';
  password: String = '';
}
