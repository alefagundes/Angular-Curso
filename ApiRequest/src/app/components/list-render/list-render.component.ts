import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Animals } from 'src/interfaces/Animal';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  animals: Animals[] = [];
  nameAnimal?: String = '';

  nameAnimalchild: String = '';

  //evento de saída ouvido pelo componente pai
  @Output() event: EventEmitter<any> = new EventEmitter();

  //após criar o service eu tenho que importar o mesmo dentro do contrutor para conseguir
  //utilizar os metodos dentro do service
  constructor(private listService: ListService) {
    this.getAnimals();
  }

  showAge(): void {
    this.event.emit();
  }

  ngOnInit(): void {}

  removeAnimal(animal: Animals): void {
    this.animals = this.animals.filter((a) => a.name !== animal.name);
    //mesmo sendo um evento de delete que não vou precisar subscrever/tranformar os elementos, preciso
    //informar através do subscribe que o evento foi realizado ao angular
    this.listService.remove(animal.id).subscribe();
  }

  addAnimal(): void {
    /* newAnimals: Animal
    this.animals = this.listService.add(this.animals, newAnimal); */
  }

  //como fazer requisições http com angular, essa minha função está sendo chamada no
  //contrutor da classe, ou seja quando ela inicia.
  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  showName(): void {
    console.log('oi, estou sendo dispardo');
  }
  showEventName(event: EventEmitter<String>): void {
    this.nameAnimalchild = event.toString();
  }
}
