import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';

@Component({
  selector: 'book-results-count',
  template:
  `
    <mat-card>
      <mat-card-title>Search Results: {{count | async}}</mat-card-title>
    </mat-card>
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
