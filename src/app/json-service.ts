import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  configUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  public getData(): Observable<Todos[]>{
    return this.http.get<Todos[]>(this.configUrl);
  }
}
