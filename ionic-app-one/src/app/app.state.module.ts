import { NgModule }      from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TestActions, testReducer } from 'shared-code';

@NgModule({
	exports: [],
	imports:      [
		StoreModule.provideStore({
			test: testReducer
		}),
		StoreDevtoolsModule.instrumentOnlyWithExtension()
	],
	providers: [
		TestActions  
	]
})
export class AppStateModule { }

export interface IAppState {
	test: any
}