import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ConverterComponent } from './components/converter/converter.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HistoricalEntryComponent } from './components/historical-entry/historical-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    HeaderComponent,
    HistoricalEntryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
