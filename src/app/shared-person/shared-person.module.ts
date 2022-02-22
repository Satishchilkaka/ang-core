import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';

import { UpdatePrivateComponent } from './update-private/update-private.component';
import { UpdatePersonComponent } from './person/update-person/update-person.component';



@NgModule({
  declarations: [
    PersonComponent,

    UpdatePrivateComponent,
     UpdatePersonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonComponent,

    UpdatePrivateComponent
  ]
})
export class SharedPersonModule { }
