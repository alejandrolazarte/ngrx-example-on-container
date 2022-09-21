import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from './counter.state';

const getAppState = createFeatureSelector<AppState>('counter');

export const getCounter = createSelector(getAppState, (state) => state.counter);

export const getTitle = createSelector(getAppState, (state) => state.title)