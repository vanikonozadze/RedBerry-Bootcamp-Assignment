import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  baseApiUrl: string = 'https://api.blog.redberryinternship.ge/api/';
  private token =
    'ad02bb7bc27651f7458096d5bf7306e45e5eb8f28fb458ace2107e345e6fc2a7';
  showDialog = false;
  showSuccess = false;

  constructor(private http: HttpClient) {}

  toggleDialog() {
    this.showDialog = !this.showDialog;
  }

  toggleSuccess() {
    this.showSuccess = !this.showSuccess;
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + 'categories');
  }

  login(data: string): Observable<any> {
    return this.http.post<any>(this.baseApiUrl + 'login', data);
  }

  getBlogs(): Observable<any> {
    const headers = { Authorization: `Bearer ${this.token}` };
    return this.http.get<any>(this.baseApiUrl + 'blogs', { headers });
  }
}
