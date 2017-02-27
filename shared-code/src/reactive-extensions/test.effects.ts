import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { TestActions } from './test.actions';
import "rxjs/add/operator/map";

@Injectable()
export class TestEffects {
    constructor(
        private actions$: Actions
    ) {}

    @Effect() getVacancies$ = this.actions$
        .ofType(TestActions.TEST_ACTION)
        .switchMap(action => {
            return Observable.of('Hellow World');
        }); 
}