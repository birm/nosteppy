import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { TableComponent } from './table/table.component';
import { EbtnComponent } from './ebtn/ebtn.component';
import { SbtnComponent } from './sbtn/sbtn.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    ExplorerComponent,
    VisualizerComponent,
    TableComponent,
    EbtnComponent,
    SbtnComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
