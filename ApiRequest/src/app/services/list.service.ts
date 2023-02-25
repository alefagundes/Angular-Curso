import { Injectable } from '@angular/core';
import { Animals } from 'src/interfaces/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';

  //importação do module de http no constructor
  constructor(private http: HttpClient) {}

  remove(id: Number) {
    return this.http.delete<Animals>(`${this.apiUrl}/${id}`);
  }

  add(animals: Animals, animal: Animals) {
    return [animals, animal];
  }
  //espera um tipo observable
  getAll(): Observable<Animals[]> {
    return this.http.get<Animals[]>(this.apiUrl);
  }

  getItem(id: Number): Observable<Animals> {
    return this.http.get<Animals>(`${this.apiUrl}/${id}`);
  }
}
