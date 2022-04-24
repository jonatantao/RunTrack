import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Competition } from '../_model/competition';

const API_URL = 'http://localhost:8080/api/competition/';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http: HttpClient) { }

  getCompetitions(): Observable<Competition[]>{
    return this.http.get<Competition[]>(API_URL);
  }

  createCompetition(competition: Competition): Observable<Object>{
    return this.http.post(API_URL, competition);
  }

  getCompetitionById(id: number): Observable<Competition>{
    return this.http.get<Competition>(API_URL+`${id}`);
  }

  updateCompetition(id: number, competition: Competition): Observable<Object>{
    return this.http.put(API_URL+`${id}`, competition);
  }

  deleteCompetition(id: number): Observable<Object>{
    return this.http.delete(API_URL+`${id}`);
  }

}
