import { GoogleBooksService } from './google-books.service';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Actions, Effect } from '@ngrx/effects';

import * as SearchActions from './search-actions';

@Injectable()
export class BookEffects {
    @Effect()
    search$: Observable<Action> = this._actions$.ofType(SearchActions.SEARCH)
    .map((action: SearchActions.Search) => action.payload)
    .switchMap(terms => this.booksService.searchBooks(terms))
    .map(results => new SearchActions.SearchSuccess(results));

    constructor(
        private _actions$: Actions,
        private booksService: GoogleBooksService
    ) { }
}