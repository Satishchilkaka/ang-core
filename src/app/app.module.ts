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
