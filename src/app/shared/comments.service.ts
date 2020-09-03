import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './model/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private cors = `https://cors-anywhere.herokuapp.com/`;
  private apiUrl = `${this.cors}http://jsonplaceholder.typicode.com/`;
  constructor(private http: HttpClient) { }

  getAllComments(): Observable<Comment[]> {
    const headerDict = {
      'X-Requested-With': 'XMLHttpRequest'
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };

    return this.http.get<Comment[]>(`${this.apiUrl}comments`, requestOptions);
  }
}
