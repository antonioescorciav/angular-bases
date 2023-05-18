
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
    <p> <b>Counter: </b> {{counter}}</p>
    <button (click)="increaseBy(1)"> +1 </button>
    <button (click)="increaseBy(-1)"> -1 </button>
    <button (click)="resetNumber()"> Reset </button>
  `
})

export class CounterComponent  {
  constructor() {
  }

  public counter : number = 10;

  increaseBy(value: number): void {
    if(value === 1) this.counter = this.counter + 1;
    else this.counter -= 1
  };

  resetNumber() : void {
    this.counter = 10;
  }

}
