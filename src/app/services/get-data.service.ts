import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { share } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-type',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
  })
}


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getCompanyInfo(vatNumber){
    let url = "https://vat.erply.com/numbers?vatNumber=";
    return this.http.get(url + vatNumber, httpOptions).pipe(share())
  }

}
