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


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    TestModule,
    ReactiveFormsModule,
    SharedPersonModule

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
