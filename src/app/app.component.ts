import { Component } from '@angular/core';

@Component({
  selector: 'book-root',
  template: `
    <mat-toolbar color="primary">
      NGRX Workshop
    </mat-toolbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'book';
}
