import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Animals } from 'src/interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  animals: Animals[] = [
    { name: 'doldinho', type: 'dog', age: 5 },
    { name: 'pincher', type: 'dog', age: 5 },
    { name: 'poodle', type: 'dog', age: 5 },
  ];

  @Output() event: EventEmitter<any> = new EventEmitter();

  showAge(): void {
    this.event.emit();
  }

  ngOnInit(): void {}
}
