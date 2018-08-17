import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { AboutComponent } from '../../about/about.component';
import { WorkComponent } from '../../work/work.component';
import { ContactComponent } from '../../contact/contact.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
	{
		path: 'work',
		component: WorkComponent,
	},
	{
		path: 'contact',
		component: ContactComponent,
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {useHash: true})
	],
	exports: [
		RouterModule
	],
	declarations: [],
	schemas: [
    CUSTOM_ELEMENTS_SCHEMA
	]
})
export class AppRoutingModule { }