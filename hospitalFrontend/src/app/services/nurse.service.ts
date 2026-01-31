import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nurse } from '../models/nurse';
import { LoginResponse, ResponseMessage } from '../messages/ResponseMessage';

@Injectable({
  providedIn: 'root'
})
export class NurseService{
  constructor(private conexHttp:HttpClient) { }
  url = "http://localhost:8000/nurse";

  
  login(username: string, password: string): Observable<LoginResponse> {
    const headers = { 'Content-Type': 'application/json' };
    const data = { username, password };
    return this.conexHttp.post<LoginResponse>(`${this.url}/login`, data, { headers });
  }
 
  register(nurse: Nurse): Observable<any> {
    return this.conexHttp.post(this.url, nurse);
  }


  getAll(): Observable<Nurse[]> {
    return this.conexHttp.get<Nurse[]>(`${this.url}/index`);
  }

  findByName(name: string): Observable<Nurse[]> {
    return this.conexHttp.get<Nurse[]>(`${this.url}/name/${name}`);
  }

  readById(id: number): Observable<any> {
    return this.conexHttp.get<any>(`${this.url}/${id}`);
  }

  updateNurse(id: number, nurse: Nurse): Observable<any> {
    return this.conexHttp.put<any>(`${this.url}/${id}`, nurse);
  }

  deleteById(id:number):Observable<any>{
    return this.conexHttp.delete<any>(`${this.url}/${id}`);
  }
}
