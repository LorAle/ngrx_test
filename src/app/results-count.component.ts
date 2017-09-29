import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';

@Component({
  selector: 'book-results-count',
  template:
  `
    <md-card>
      <md-card-title>Search Results: {{count | async}}</md-card-title>
    </md-card>
  `
})
export class ResultsCountComponent implements OnInit {

  count: Observable<number>;
  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.count = this.store.select(fromRoot.selectCount);
  }

  ngOnInit() {
  }

}
