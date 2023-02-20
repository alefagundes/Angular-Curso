import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environments';
import { Name } from 'src/interfaces/Name';

@Injectable({
  providedIn: 'root',
})
export class NameServiceService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Name[]>(`${API_PATH}names`).toPromise();
  }
}
