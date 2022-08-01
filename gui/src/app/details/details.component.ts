import { Component, Input } from '@angular/core';
import { Award } from '../interfaces/award';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css']
})
export class DetailsComponent {

	@Input() myAward: Award = <Award>{};

	constructor() { }

}
