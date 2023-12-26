import { Component, OnInit, OnChanges, Input, SimpleChanges,
DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.scss'
})
export class HooksComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {
  message: string = ''
  
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  
  ngOnChanges(): void {
    console.log("ngOnChanges")
  }
  
  ngOnInit(): void {
    this.message = 'Digite algo...'
  }

}
