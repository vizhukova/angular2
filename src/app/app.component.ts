import { Component, NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HelloComponent} from './hello/hello.component';
// import {PriipsUiResultsTableComponent} from './../../smarttrade-priips-ui-common/src/app/priips-ui-results-table/priips-ui-results-table.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [
        AppComponent
    ]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  data = [
    {
    "name": "Wing",
    "email": "tellus.eu.augue@arcu.com",
    "regDate": "2016-01-09T14:48:34-08:00",
    "city": "Paglieta",
    "age": 25
  },
  {
    "name": "Whitney",
    "email": "sed.dictum@Donec.org",
    "regDate": "2017-01-23T20:09:52-08:00",
    "city": "Bear",
    "age": 32
  },
  {
    "name": "Oliver",
    "email": "mauris@Craslorem.ca",
    "regDate": "2015-11-19T19:11:33-08:00",
    "city": "Bruderheim",
    "age": 31
  }
  ];

}

