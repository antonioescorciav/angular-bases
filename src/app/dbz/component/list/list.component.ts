import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList : Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public deleteCharacter: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    if (!id) return;
    console.log(id);
    this.deleteCharacter.emit(id);
  };

}
