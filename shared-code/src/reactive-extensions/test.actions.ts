import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class TestActions {

    static TEST_ACTION = 'TEST_ACTION';
    fireTestAction(): Action {
        return {
            type: TestActions.TEST_ACTION,
            payload: 'Hello World'
        };
    }
}