import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  baseApiUrl: string = 'https://api.blog.redberryinternship.ge/api/';
  authToken: string = ''; // Store the token here

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + 'categories');
  }

  getToken(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + 'token');
  }

  getBlogs(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authToken}`
    );
    return this.http.get<any>(this.baseApiUrl + 'blogs', { headers });
  }
}
