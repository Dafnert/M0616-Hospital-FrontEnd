import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nurse } from '../models/nurse';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResponse, ResponseMessage } from '../messages/ResponseMessage';

@Injectable({
  providedIn: 'root'
})
export class NurseService{
  constructor(private conexHttp:HttpClient) { }
  url = "http://localhost:8000/nurse";

private nurses: Nurse[] = [
    new Nurse(1, 'Ana', 'López', 30, 'UCI', 'enfermero', 'enfermero123'),
    new Nurse(2, 'Carlos', 'Martín', 35, 'Pediatría', 'admin', 'admin123')
  ];
  
  login(username: string, password: string): Observable<LoginResponse> {
    const headers = { 'Content-Type': 'application/json' };
    const data = { username, password };
    return this.conexHttp.post<LoginResponse>(`${this.url}/login`, data, { headers });
  }
 
  register(nurse: Nurse): boolean {

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
  getAll(): Observable<Nurse[]> {
    return this.conexHttp.get<Nurse[]>(`${this.url}/index`);
}
readById(id: number): Observable<any> {
  return this.conexHttp.get<any>(`${this.url}/${id}`);
}
}
