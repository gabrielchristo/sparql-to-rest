import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Award } from '../interfaces/award';

@Injectable({
	providedIn: 'root'
})
export class AwardService {

	constructor(private http: HttpClient) { }

	getAwards(category: string): Observable<Award[]> {
		const url = `${environment.ApiURL}/${category}`;
		return this.http.get<Award[]>(url);
	}

	getAwardsByYear(category: string, year: number): Observable<Award[]> {
		const url = `${environment.ApiURL}/${category}/${year}`;
		return this.http.get<Award[]>(url);
	}

}
