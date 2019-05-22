import { Action } from "@ngrx/store";

export enum EventActionTypes {
    SetCurrentEvent = '[Event] Set Current Event',
    InitializeCurrentEvent = '[Event] Initialize Current Event'
}

export class SetCurrentEvent implements Action {
    readonly type = EventActionTypes.SetCurrentEvent

    constructor(public payload: number){}
}

export class InitializeCurrentEvent implements Action {
    readonly type = EventActionTypes.InitializeCurrentEvent

}

export type EventActions = SetCurrentEvent
            | InitializeCurrentEvent;