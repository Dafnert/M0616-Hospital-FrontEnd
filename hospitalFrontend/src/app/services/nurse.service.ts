import { Injectable } from '@angular/core';
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

    const exists = this.nurses.some(
      n => n.username === nurse.username
    );

    if (exists) {
      return false; 
    }

    nurse.id = this.nurses.length > 0
      ? Math.max(...this.nurses.map(n => n.id)) + 1
      : 1;

    this.nurses.push(nurse);
    return true;
  }

  
  
getAll(): Observable<Nurse[]> {
    return this.conexHttp.get<Nurse[]>(`${this.url}/index`);
}
readById(id: number): Observable<any> {
  return this.conexHttp.get<any>(`${this.url}/${id}`);
}
findByName(name: string): Observable<any> {
  return this.conexHttp.get<any>(`${this.url}/name/${name}`);
}

}