import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroesName: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor'];
  public deletedHero? : string;

  removeLastHero(): void {
    this.deletedHero = this.heroesName.pop();

  }
}
