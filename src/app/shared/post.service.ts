import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import * as model from './model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private cors = `https://cors-anywhere.herokuapp.com/`;
  private apiUrl = `${this.cors}http://jsonplaceholder.typicode.com/`;
  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<model.Post[]> {

    const headerDict = {
      'X-Requested-With': 'XMLHttpRequest'
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };

    return this.http.get<model.Post[]>(`${this.apiUrl}posts`, requestOptions);
  }
}
