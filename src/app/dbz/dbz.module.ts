import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-pages.component';
import { ListComponent } from './component/list/list.component';
import { AddCharacterComponent } from './component/add-character/add-character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule { }
