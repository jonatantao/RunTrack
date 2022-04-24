import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Runner } from '../_model/Runner';

const API_URL = 'http://localhost:8080/api/runner/';

@Injectable({
  providedIn: 'root'
})
export class RunnerService {

  constructor(private http: HttpClient) { }

  getRunners(): Observable<Runner[]>{
    return this.http.get<Runner[]>(API_URL);
  }

  createRunner(runner: Runner): Observable<Object>{
    return this.http.post(API_URL, runner);
  }

  getRunnerById(id: number): Observable<Runner>{
    return this.http.get<Runner>(API_URL+`${id}`);
  }

  updateRunner(id: number, runner: Runner): Observable<Object>{
    return this.http.put(API_URL+`${id}`, runner);
  }

  deleteRunner(id: number): Observable<Object>{
    return this.http.delete(API_URL+`${id}`);
  }
}
