import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DashboardService {

  serverUrl = 'http://192.168.1.104:8000'
  
  private symbolSource = new BehaviorSubject(['AAPL']);
  currentSymbols = this.symbolSource.asObservable();

  symbol_list = []

  
  constructor(private http: HttpClient) { }

  
  equities_performance(period) {
    return this.http.get(this.serverUrl + '/performance/' + period);
  }
  equity_performance(symbol) {
    return this.http.get(this.serverUrl + '/performance_per_equity/' + symbol + '&Date');
  }
  equities() {
    return this.http.get(this.serverUrl + '/equities');
  }
  indices() {
    return this.http.get(this.serverUrl + '/indices');
  }
  countries() {
    return this.http.get(this.serverUrl + '/countries');
  }
  sectors() {
    return this.http.get(this.serverUrl + '/sectors');
  }
  country_performance() {
    return this.http.get(this.serverUrl + '/country_performance');
  }

  changeSymbolsinGraph(symbols: any[]) {
    console.log(this.symbol_list)

    for (var i=0; i < symbols.length; i++) {
      this.symbol_list[i] = symbols[i].symbol.replace(".", "_") 
    }
    this.symbolSource.next(this.symbol_list)
  }


}
