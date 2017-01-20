import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
// import {PriipsUiResultsTableComponent} from './../../smarttrade-priips-ui-common/src/app/priips-ui-results-table/priips-ui-results-table.component';
import {DataTableModule} from "angular2-datatable";

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    // PriipsUiResultsTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
