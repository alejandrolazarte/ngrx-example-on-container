import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './counter.state';
import { counterFeatureKey } from './counter.reducer';
import { increment, decrement, reset, add } from './counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent {

  count: number = 0;
  inputCounter: number = 0;

  constructor(private store: Store<{ counter: AppState }>) {
    this.store.select(counterFeatureKey).subscribe((data) => {
      this.count = data.counter
    });
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

  public addToCounter(): void {
    this.store.dispatch(add({value: this.inputCounter}));
  }

}
