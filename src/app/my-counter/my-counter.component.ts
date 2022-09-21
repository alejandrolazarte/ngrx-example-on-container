import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './counter.state';
import { getCounter } from './counter.selectors';
import { increment, decrement, reset, add } from './counter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent {

  count: Observable<number>;
  inputCounter: number = 0;

  constructor(private store: Store<{ counter: AppState }>) {
    this.count = this.store.select(getCounter);
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
