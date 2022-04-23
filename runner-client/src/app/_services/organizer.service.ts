import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organizer } from '../_model/Organizer';

const API_URL = 'http://localhost:8080/api/organizer/';

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {

  constructor(private http: HttpClient) { }

  getOrganizers(): Observable<Organizer[]>{
    return this.http.get<Organizer[]>(API_URL);
  }

  createOrganizer(organizer: Organizer): Observable<Object>{
    return this.http.post(API_URL, organizer);
  }

  getOrganizerById(id: number): Observable<Organizer>{
    return this.http.get<Organizer>(API_URL+`${id}`);
  }

  updateOrganizer(id: number, organizer: Organizer): Observable<Object>{
    return this.http.put(API_URL+`${id}`, organizer);
  }

  deleteOrganizer(id: number): Observable<Object>{
    return this.http.delete(API_URL+`${id}`);
  }

}
