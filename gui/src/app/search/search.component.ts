import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent {

	@Output() exploreClickEvent = new EventEmitter<object>();

	selectedCategory = "all"
	currentYear = 2021

	constructor() { }

	onExplorerClick() {
		this.exploreClickEvent.emit({ category: this.selectedCategory, year: this.currentYear });
	}

	onYearInputChange($event: any) {
		this.currentYear = parseInt($event.target.value);
	}

}
