import { User } from '../user';

import { UserActions, UserActionTypes } from './user.actions'

export interface UserState {
    currentUser: User | null;
    error: string;
}

const initialState: UserState = {
    currentUser: null,
    error: ''
}
export function reducer(state = initialState, action: UserActions): UserState {
    switch(action.type) {
        case UserActionTypes.LoadSuccess:
            return {
                ...state,
                currentUser: action.payload,
                error: ''
            };
        
        case UserActionTypes.LoadFail:
            return{
                ...state,
                currentUser: null,
                error: action.payload
            };
        default:
            return state;
    }
}