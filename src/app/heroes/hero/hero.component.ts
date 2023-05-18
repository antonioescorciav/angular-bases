import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name : string = 'ironman';
  public age : number = 45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  };

  getHeroDescription () : string  {
    return `El héroe es ${this.name} con edad ${this.age}`

  };

  changeName (name: string) : void{
    this.name = name;
  };

  changeAge(age: number) : void{
    this.age = age;
  };

  resetBtn () : void{
    this.name = 'ironman';
    this.age = 35;

    //!
    // document.querySelectorAll('h1').forEach(ele => {
    //   ele.innerHTML = ('<h1>Desde angular</h1>');
    // });
  }
}
