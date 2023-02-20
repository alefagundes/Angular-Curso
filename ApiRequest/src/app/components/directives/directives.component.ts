import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  tam = 25;
  font = 'Arial';
  color = 'red';
  classes = ['green-title', 'small-title'];
  underline = 'underline';

  constructor() {}

  ngOnInit(): void {}
}
