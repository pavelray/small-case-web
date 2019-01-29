import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private url = 'https://www.alphavantage.co/';
  constructor(private http: Http) {
  }

  search(searchKey: string){
    this.url = this.url + 'query?function=SYMBOL_SEARCH&keywords=' + searchKey + '&apikey=Y0QA3SOM2ESK11MJ';
    console.log(this.url);
    return  this.http.get(this.url);
  }
}
