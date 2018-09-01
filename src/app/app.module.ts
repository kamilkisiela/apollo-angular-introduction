import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { UpvoterComponent } from './upvoter.component';

@NgModule({
  declarations: [AppComponent, ListComponent, UpvoterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
