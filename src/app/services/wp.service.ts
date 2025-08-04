// src/app/services/wp.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WpService {
  private baseUrl = 'http://localhost/learningapi/wp-json/wp/v2';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  getPost(id: number) {
    return this.http.get(`${this.baseUrl}/posts/${id}`);
  }
}
