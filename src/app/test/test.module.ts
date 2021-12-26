import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { TestComponent } from './test.component';




@NgModule({
  declarations: [
    ItemComponent,
    TestComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestComponent
  ]
})
export class TestModule { }
