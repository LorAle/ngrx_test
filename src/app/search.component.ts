import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Book } from './book-model';
import { GoogleBooksService } from './google-books.service';

@Component({
  selector: 'book-search',
  template: `
    <book-book-search (search)="onSearch($event)"></book-book-search>
    <book-search-results [books]="books"></book-search-results>
  `
})
export class SearchComponent {
  books: Book[] = [];

  constructor(
    private booksService: GoogleBooksService
  ) {}

  onSearch(terms: string) {
    this.booksService.searchBooks(terms)
      .subscribe(results => this.books = results);
  }
}