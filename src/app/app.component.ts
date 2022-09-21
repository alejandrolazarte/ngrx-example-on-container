import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeTitle } from './my-counter/counter.actions';
import { getTitle } from './my-counter/counter.selectors';
import { AppState } from './my-counter/counter.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: Observable<string>;
  newTitle = ''

  constructor(private store: Store<{counter : AppState}>) {
    this.title = this.store.select(getTitle);
  }


  changeText(): void {
    this.store.dispatch(changeTitle({value: this.newTitle}));
  }

}
