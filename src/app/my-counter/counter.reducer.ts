import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { AppState, initialState } from './counter.state';

export const counterFeatureKey = 'counter';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return { ...state, counter: state.counter + 1 }
  }),
  on(decrement, (state) => {
    return { ...state, counter: state.counter - 1  }
  }),
  on(reset, (state) => {
    return { ...state, counter: initialState.counter }
  })
);

export function counterReducer(state: AppState | undefined, action: Action) {
  return _counterReducer(state, action);
}