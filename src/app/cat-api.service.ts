import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CatApiService {
  image;
  info;
  fulljson;

  headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  randomCatUrl = 'https://api.thecatapi.com/v1/images/search';

  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };
  constructor(private http: HttpClient) {}

  getRandomCat() {
    // this.fulljson = this.http.get("https://api.thecatapi.com/v1/images/search");
    // this.http.get<any>("https://api.thecatapi.com/v1/images/search").subscribe(data => {
    //   this.fulljson = data;
    // })
    this.fulljson = this.http.get(
      'https://api.thecatapi.com/v1/images/search',
      this.requestOptions
    );
    return this.fulljson;
  }
}
