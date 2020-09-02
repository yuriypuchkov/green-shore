import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = `http://jsonplaceholder.typicode.com/`;
  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}posts`);
  }
}
