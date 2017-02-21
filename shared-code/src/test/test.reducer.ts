import { ActionReducer, Action } from '@ngrx/store';
import { TestActions } from './test.actions';

export const testReducer: ActionReducer<any> = (state: any = {}, action: Action) => {
    switch (action.type) {
        case TestActions.TEST_ACTION:
            return state;
        default:
            return state;
    }
}