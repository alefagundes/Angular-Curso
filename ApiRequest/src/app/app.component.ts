import { Component } from '@angular/core';
import { Name } from 'src/interfaces/Name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userName: String = 'Alessandro Fagundino';
  agePet: Number = 0;
  title = 'ApiRequest';
  listView: Array<Name> = [
    { id: 4, name: 'Repass data', Profissao: 'New developper' },
    { id: 5, name: 'Repass to chield', Profissao: 'New developper moment' },
  ];

  showAgeAnimal(): void {
    this.agePet = Math.random();
  }
}
