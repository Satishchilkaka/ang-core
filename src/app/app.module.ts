import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './features/content/content.component';
import { HeaderModule } from './shared/header/header.module';
import { FooterModule } from './shared/footer/footer.module';
import { SearchBarComponent } from './features/search-bar/search-bar.component';
import { NameComponent } from './features/name/name.component';
import { DisplayNameComponent } from './features/name/display-name/display-name.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SearchBarComponent,
    NameComponent,
    DisplayNameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
