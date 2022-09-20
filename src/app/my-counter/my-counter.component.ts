import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './counter.state';
import { counterFeatureKey } from './counter.reducer';
import { increment, decrement, reset } from './counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent {

  count$: Observable<AppState>

  constructor(private store: Store<{ counter: AppState }>) {
    this.count$ = store.select(counterFeatureKey);
  }

  public increment(): void {
    this.store.dispatch(increment())
  }

  public decrement(): void {
    this.store.dispatch(decrement())
  }

  public reset(): void {
    this.store.dispatch(reset())
  }

}
