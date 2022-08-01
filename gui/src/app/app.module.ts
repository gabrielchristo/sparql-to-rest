import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		DetailsComponent,
		SearchComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
