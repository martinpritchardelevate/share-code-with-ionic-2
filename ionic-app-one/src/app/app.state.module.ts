import { NgModule }      from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TestActions, testReducer, TestEffects } from 'shared-code';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
	exports: [],
	imports: [
		EffectsModule.run(TestEffects),
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