
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular'; 
import {
	TestSharedComponent
} from './'; 

@NgModule({
	declarations: [
		TestSharedComponent
	],
	exports: [
		TestSharedComponent
	],
	imports: [
		BrowserModule,
		IonicModule
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class SharedComponentsModule { }  