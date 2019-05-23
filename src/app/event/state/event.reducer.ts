import { DatePipe } from "@angular/common";
import { Event } from '../event';
import { Location } from '../../shared/models/location';
import {EventActions, EventActionTypes} from './event.actions'
export interface EventState {
    currentEventId: number | null; 
    events: Array <Event>;
}

const initialState: EventState = {
    currentEventId: null,
    events: []
   
};

export function reducer(state = initialState, action: EventActions): EventState {
    switch(action.type) {
        case EventActionTypes.SetCurrentEvent: {
            return {
                ...state,
                currentEventId: action.payload
            };
        }

        case EventActionTypes.InitializeCurrentEvent: {
            return {...state,
                currentEventId: 0
            }
        }
    }
}