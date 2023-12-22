import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  baseApiUrl: string = 'https://api.blog.redberryinternship.ge/api/';
  private token =
    'e40231d8592a0cb975798ea49fea38738412626b2bbb0e07c6837d7f9580a5d3';
  showDialog = false;
  showSuccess = false;
  showLoggedInUser = false;

  constructor(private http: HttpClient) {}

  toggleDialog() {
    this.showDialog = !this.showDialog;
  }

  toggleSuccess() {
    this.showSuccess = !this.showSuccess;
  }

  toggleLogIn() {
    this.showLoggedInUser = !this.showLoggedInUser;
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
