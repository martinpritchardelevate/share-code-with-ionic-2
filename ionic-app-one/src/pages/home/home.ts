import { Component } from '@angular/core';
import { Store } from '@ngrx/store'; 
import { NavController } from 'ionic-angular';
import { IAppState } from '../../app/app.state.module';
import { TestActions } from 'shared-code';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController,
                private store: Store<IAppState>,
                private testActions: TestActions) {
        this.store.dispatch(this.testActions.fireTestAction());
    }

}
