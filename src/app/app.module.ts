import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InheritCompComponent } from './inherit-comp.component';
import { InheritDirComponent } from './inherit-dir.component';

@NgModule({
  declarations: [
    AppComponent, InheritCompComponent, InheritDirComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
