import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeTitle } from './my-counter/counter.actions';
import { counterFeatureKey } from './my-counter/counter.reducer';
import { AppState } from './my-counter/counter.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  newTitle = ''

  constructor(private store: Store<{counter : AppState}>) {
    this.store.select(counterFeatureKey).subscribe((data) => {
      console.log("change name");
      this.title = data.title
    });
  }


  changeText(): void {
    this.store.dispatch(changeTitle({value: this.newTitle}));
  }

}
