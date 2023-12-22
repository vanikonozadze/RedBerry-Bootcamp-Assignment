import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../Models/blog.model';
import { Category } from '../Models/categorie.model';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  baseApiUrl: string = 'https://api.blog.redberryinternship.ge/api/';
  private token =
    'f13e2a78e654b8535b6ae710e0e0b9a6d685481adee048fc5e5f771137f69be4';
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

  getCategories(): Observable<Category> {
    return this.http.get<Category>(this.baseApiUrl + 'categories');
  }

  login(data: string): Observable<any> {
    return this.http.post<Blog>(this.baseApiUrl + 'login', data);
  }

  getBlogs(): Observable<Blog> {
    const headers = { Authorization: `Bearer ${this.token}` };
    return this.http.get<Blog>(this.baseApiUrl + 'blogs', { headers });
  }

  getBlog(id: string): Observable<Blog> {
    const headers = { Authorization: `Bearer ${this.token}` };
    return this.http.get<Blog>(this.baseApiUrl + 'blogs/' + id, { headers });
  }
}
