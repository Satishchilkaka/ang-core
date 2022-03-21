import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from '../../shared-person/person/person.component';
import { OutProductComponent } from '../../concepts/in-out/out-product/out-product.component';
import { LoginFormComponent } from 'src/app/features/login-form/login-form.component';
import { SignupComponent } from 'src/app/features/signup/signup.component';
import { SubscriptionComponent } from 'src/app/features/subscription/subscription.component';


const appRoutes: Routes = [
  { path: 'logIn', component: LoginFormComponent },
  { path: 'inputOutput', component: OutProductComponent },
  { path: 'ngModule', component: PersonComponent },
  { path: 'reactiveForms', component: SignupComponent },
  { path: 'subscription', component: SubscriptionComponent },

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

