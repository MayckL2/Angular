import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() {}
  // função do serviço
  remove(animals: Animal[], animal: Animal){
    return animals.filter((e) => animal.name != e.name)
  }
}
