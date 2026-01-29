import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nurse } from '../models/nurse';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  private apiUrl = 'http://localhost:8000/nurse';

  constructor(private http: HttpClient) {}

  register(nurse: Nurse): Observable<any> {
    return this.http.post(this.apiUrl, nurse);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, {
      username,
      password
    });
  }

  getAll(): Observable<Nurse[]> {
    return this.http.get<Nurse[]>(`${this.apiUrl}/index`);
  }

  findByName(name: string): Observable<Nurse[]> {
    return this.http.get<Nurse[]>(`${this.apiUrl}/name/${name}`);
  }
}
