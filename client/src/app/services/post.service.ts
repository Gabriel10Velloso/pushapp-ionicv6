import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  URL = environment.url;
  paginaPosts = 0;

  constructor(private http: HttpClient) {

  }
  getPosts() {
    this.paginaPosts++;
   return this.http.get(`${this.URL}/posts/?pagina=${this.paginaPosts}`);
  }

}
