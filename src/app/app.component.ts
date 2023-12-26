import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'thirdAngular';
  jobName: string = 'Carpinteiro'
  message: string = ''
  
  constructor() {
    this.req()
  }

  async req() {
    fetch('https://hospedagem-mongodb.vercel.app/user')
      .then((res) => res.json())
      .then((data) => console.log(data))
  }
}
