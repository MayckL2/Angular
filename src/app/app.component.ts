import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'thirdAngular';
  jobName: string = 'Carpinteiro'

  console(){
    console.log('funfou')
  }
}
