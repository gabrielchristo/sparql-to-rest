import { Component, OnInit } from '@angular/core';
import { Award } from './interfaces/award';
import { AwardService } from './services/award.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	public navbar_title = ' Nobel Prize Explorer'
	public awards: Award[];

	constructor(private awardService: AwardService) { }

	ngOnInit(): void {

	}

	runQuery($event: any) {
		this.getAwardsByCategoryAndYear($event['category'], $event['year']);
	}

	getAllAwards() {
		this.awardService.getAwards('all').subscribe((response: Award[]) => {
			this.awards = response;
		});
	}

	getAwardsByCategoryAndYear(category: string, year: number) {
		this.awardService.getAwardsByYear(category, year).subscribe((response: Award[]) => {
			this.awards = response;
		});
	}
}
