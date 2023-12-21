import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()

  handleClick(){
    this.changeNumber.emit()
  }
}
