import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Book } from './book-model';
import { GoogleBooksService } from './google-books.service';

import { Store } from '@ngrx/store';
import * as SearchActions from './search-actions';
import * as fromRoot from './reducers';

@Component({
  selector: 'book-search',
  template: `
    <book-book-search [value]="terms | async " (search)="onSearch($event)"></book-book-search>
    <book-results-count></book-results-count>
    <book-search-results [books]="books | async"></book-search-results>
  `
})
export class SearchComponent {
  terms: Observable<string>;
  books: Observable<Book[]>;


  constructor(
    private booksService: GoogleBooksService,
    private store: Store<fromRoot.State>
  ) {
    this.terms = this.store.select(fromRoot.selectTerms);
    this.books = this.store.select(fromRoot.selectResulst);
  }

  onSearch(terms: string) {
    this.store.dispatch(new SearchActions.Search(terms));
    this.booksService.searchBooks(terms)
      .subscribe(results => this.store.dispatch(new SearchActions.SearchSuccess(results)));
  }
}
