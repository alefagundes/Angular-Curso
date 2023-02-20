import { Component, Input } from '@angular/core';
import { Name } from 'src/interfaces/Name';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss'],
})
export class ParentDataComponent {
  @Input() name: String = '';
  @Input() list: Array<Name> = [];
}
