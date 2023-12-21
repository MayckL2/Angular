import { Component } from '@angular/core';
import { Animal } from '../../Animal';

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
}
