
import { reducers } from './reducers';
import { BookSearchComponent } from './book-search.component';
import { SearchResultsComponent } from './search-results.component';
import { SearchComponent } from './search.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleBooksService } from './google-books.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatInputModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ResultsCountComponent } from './results-count.component';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './book-effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    SearchComponent,
    SearchResultsComponent,
    ResultsCountComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule, MatCardModule, MatToolbarModule,
    RouterModule.forRoot([
      { path: '', component: SearchComponent }
    ]),
    StoreModule.provideStore(reducers),
    EffectsModule.run(BookEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [GoogleBooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
