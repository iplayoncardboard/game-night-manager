import {Event} from '../event'

import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromRoot from '../../state/app.state';

import { EventState } from './event.reducer';

export interface State extends fromRoot.State {
    events: EventState
}

//Selector Functions

const getEventFeatureState = createFeatureSelector<EventState>('events');

export const getCurrentEventId = createSelector(
    getEventFeatureState,
    state => state.currentEventId
)

