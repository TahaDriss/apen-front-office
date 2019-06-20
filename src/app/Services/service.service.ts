import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Page} from '../Models/Page';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }

  getPage(nom) {

    return this.http.get<Page>('http://localhost:18080/Apen-Back-End-web/api/pages/nom?nom='+nom);
  }


}
