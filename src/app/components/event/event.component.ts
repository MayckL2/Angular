import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  show: boolean = false

  showMessage(): void {
    this.show = !this.show
  }
}
