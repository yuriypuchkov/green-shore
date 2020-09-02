import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `http://jsonplaceholder.typicode.com/`;
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}users}`);
  }

  getUser(postId): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}users/${postId}`);
  }
}
