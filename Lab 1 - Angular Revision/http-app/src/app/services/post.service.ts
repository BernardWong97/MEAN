import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }

  getPostsData(): Observable<any> {
    return this.http.get("https://jsonblob.com/api/bd990095-eb42-11e8-b01d-6f6343ed4065");
  }
}
