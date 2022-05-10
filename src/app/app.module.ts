import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './features/content/content.component';
import { HeaderModule } from './shared/header/header.module';
import { FooterModule } from './shared/footer/footer.module';
import { SearchBarComponent } from './features/search-bar/search-bar.component';
import { NameDisplayComponent } from './features/name-display/name-display.component';
import { NameDetailsComponent } from './features/name-display/name-details/name-details.component';
import { UpdateNameComponent } from './features/name-display/update-name/update-name.component';
import { CyclesComponent } from './cycles/cycles.component';
import { OnChangesComponent } from './cycles/on-changes/on-changes.component';
import { TestModule } from './test/test.module';
import { FetchDataComponent } from './features/fetch-data/fetch-data.component';
import { PersonInfoComponent } from './features/person-info/person-info.component';
import { PersonDetailsComponent } from './features/person-info/person-details/person-details.component';
import { ProductComponent } from './features/product/product.component';

import { LoginFormComponent } from './features/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OutProductComponent } from './concepts/in-out/out-product/out-product.component';
import { InProductComponent } from './concepts/in-out/out-product/in-product/in-product.component';
import { SharedPersonModule } from './shared-person/shared-person.module';
import { ObservableSubscriptionComponent } from './subscription/observable-subscription/observable-subscription.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './shared-person/person/person.component';
import { SignupComponent } from './features/signup/signup.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { SubscriptionComponent } from './features/subscription/subscription.component';
import { ChkbindingComponent } from './features/chkbinding/chkbinding.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { WeatherDataComponent } from './weather/weather-data/weather-data.component';
import { HttpClientModule } from '@angular/common/http';
import { ActionsComponent } from './weather/weather-data/actions/actions.component';


const appRoutes: Routes = [
  { path: 'inputOutput', component: OutProductComponent },
  { path: 'ngModule', component: PersonComponent },


]
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SearchBarComponent,
    NameDisplayComponent,
    NameDetailsComponent,
    UpdateNameComponent,
    CyclesComponent,
    OnChangesComponent,
    FetchDataComponent,
    PersonInfoComponent,
    PersonDetailsComponent,
    ProductComponent,
    LoginFormComponent,
    OutProductComponent,
    InProductComponent,
    ObservableSubscriptionComponent,
    SignupComponent,
    SubscriptionComponent,
    ChkbindingComponent,
    WeatherDataComponent,
    ActionsComponent,





  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    TestModule,
    ReactiveFormsModule,
    SharedPersonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatCheckboxModule,
    HttpClientModule


  ],

  bootstrap: [AppComponent]
})
export class AppModule { }


