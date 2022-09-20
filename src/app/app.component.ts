import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterFeatureKey } from './my-counter/counter.reducer';
import { AppState } from './my-counter/counter.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';

  constructor(private store: Store<{counter : AppState}>) {
    this.store.select(counterFeatureKey).subscribe((data) => {
      this.title = data.title
    });
  }

}
