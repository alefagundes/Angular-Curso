import { Component, OnInit } from '@angular/core';
import { Animals } from 'src/interfaces/Animal';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-animals-details',
  templateUrl: './animals-details.component.html',
  styleUrls: ['./animals-details.component.scss'],
})
export class AnimalsDetailsComponent implements OnInit {
  singleAnimal?: Animals;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal();
  }

  ngOnInit(): void {}

  //request to get single animal based in id animal
  getAnimal() {
    //logica para extrair o id (parametro passado pela URL)
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService
      .getItem(id)
      .subscribe((response) => (this.singleAnimal = response));
  }
}
