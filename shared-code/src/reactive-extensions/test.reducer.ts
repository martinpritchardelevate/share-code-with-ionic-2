import { ActionReducer, Action } from '@ngrx/store';
import { TestActions } from './test.actions';

export const testReducer: ActionReducer<any> = (state: any = {}, action: Action) => {
    switch (action.type) {
        case TestActions.TEST_ACTION:
            console.log("%c'TEST action fired from 'shared-code'", "background: yellow; font-size: large");
            return state;
        default:
            return state;
    }
}