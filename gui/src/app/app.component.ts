import { Component, OnInit } from '@angular/core';
import { Award } from './interfaces/award';
import { AwardService } from './services/award.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	public navbar_title = 'Nobel Prize Explorer'
	public awards: Award[];
	public showWarningForEconomics = false;

	constructor(private awardService: AwardService) { }

	ngOnInit(): void {
	}

	runQuery($event: any) {
		this.getAwardsByCategoryAndYear($event['category'], $event['year']);

		if ($event['category'] == 'economic_sciences' && $event['year'] <= 1968) {
			this.showWarningForEconomics = true;
		} else {
			this.showWarningForEconomics = false;
		}
	}

	getAwardsByCategoryAndYear(category: string, year: number) {
		this.awardService.getAwardsByYear(category, year).subscribe((response: Award[]) => {
			this.awards = response;
		});
	}
}
