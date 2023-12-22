import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  animals: Animal[] = [
    {name: 'pica pau', type: 'pica pau', age: 25},
    {name: 'leoncio', type: 'foca', age: 45},
    {name: 'zeca urubu', type: 'urubu', age: 30},
    {name: 'ursulão', type: 'urso', age: 15}
  ]

  animal = {
    name: 'teste',
    type: 'type teste'
  }

  // importa serviço
  constructor(private listService: ListService){}
  // utiliza função do serviço
  removeAnimal(animal: Animal){
    this.animals = this.listService.remove(this.animals, animal)
    console.log(animal.name + ' foi removido!')
  }
}
