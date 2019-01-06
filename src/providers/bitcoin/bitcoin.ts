import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bitcoin } from '../../models/bitcoin.model';

@Injectable()
export class BitcoinProvider {

  private ROOT_Page: string = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC';

  constructor(private http: HttpClient) {
    // console.log('Hello BitcoinProvider Provider');
  }

  getBitcoinPrice(currency) {
    return this.http.get<Bitcoin>(this.ROOT_Page + currency);
  }

}
