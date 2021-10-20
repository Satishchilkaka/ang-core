import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForDirComponent } from './for-dir/for-dir.component';
import { IfDirComponent } from './if-dir/if-dir.component';

@NgModule({
  declarations: [
    AppComponent,
    ForDirComponent,
    IfDirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
