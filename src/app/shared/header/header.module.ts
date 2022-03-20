import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from '../../shared-person/person/person.component';
import { OutProductComponent } from '../../concepts/in-out/out-product/out-product.component';


const appRoutes: Routes = [
  { path: 'inputOutput', component: OutProductComponent },
  { path: 'ngModule', component: PersonComponent },

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent]
})
export class HeaderModule { }
// Test 
