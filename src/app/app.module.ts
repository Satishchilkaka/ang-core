import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemDetailsComponent } from './item/item-details/item-details.component';

import { FooterComponent } from './features/footer/footer.component';
import { ContentComponent } from './features/content/content.component';
import { HeaderModule } from './shared/header/header.module';


@NgModule({
  declarations: [
    AppComponent,

    ItemComponent,
    ItemDetailsComponent,

    FooterComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
