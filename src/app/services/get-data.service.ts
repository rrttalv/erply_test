import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { share } from 'rxjs/operators';

/* Could make a HTTP interceptor for handling headers, but I am making 1 call so there is no purpose*/
const headers = new HttpHeaders({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-type',
  "Access-Control-Methods": "POST, PUT, OPTIONS, GET, DELETE",
})

@Injectable({
  providedIn: 'root'
})

export class GetDataService {

  constructor(private http: HttpClient) { }
  getCompanyInfo(vatNumber){
    let url = "https://vat.erply.com/numbers?vatNumber="+vatNumber;
    return this.http.get(url, {headers: headers['headers']}).pipe(share())
  }

}
