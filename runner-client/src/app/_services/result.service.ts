import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../_model/Result';

const API_URL = 'http://localhost:8080/api/result/';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }

  getResult(): Observable<Result[]>{
    return this.http.get<Result[]>(API_URL);
  }

  createResult(result: Result): Observable<Object>{
    return this.http.post(API_URL, result);
  }

  getResultById(id: number): Observable<Result>{
    return this.http.get<Result>(API_URL+`${id}`);
  }

  updateResult(id: number, result: Result): Observable<Object>{
    return this.http.put(API_URL+`${id}`, result);
  }

  deleteResult(id: number): Observable<Object>{
    return this.http.delete(API_URL+`${id}`);
  }
}
