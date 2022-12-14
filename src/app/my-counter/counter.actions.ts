import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const add = createAction('[Counter Component] Add to counter', props<{value: number}>());
export const changeTitle = createAction('[Counter Component] Change Title', props<{value: string}>());