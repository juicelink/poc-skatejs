import { Component, NgModule, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Observable} from 'rxjs/Rx';

class App implements OnInit {
  id = 2;

  ngOnInit() {
    Observable.interval(5000)
          .subscribe(({name}) => {
            this.id++;
          });
  }
}

App.annotations = [
  new Component({
      selector: 'my-app',
  template: `<x-hello-world-2 id="{{ id }}"></x-hello-world-2>`
  })
];

export class AppModule {}

AppModule.annotations = [
  new NgModule({
    imports: [ BrowserModule ],
    declarations: [ App ],
    bootstrap: [ App ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
];