import { Component, SystemJsNgModuleLoader } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BitcoinProvider } from '../../providers/bitcoin/bitcoin';
import { Observable } from 'rxjs/Observable';
import { Bitcoin } from '../../models/bitcoin.model';


@IonicPage()
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html',
})
export class BitcoinPage {

  currency: string = "JMD";
  bitcoin$: Observable<Bitcoin>; //$ denotes an observable

  constructor(private bitcoinProvider: BitcoinProvider) {
  }

  ionViewWillLoad() {
    //Get currency price
    this.getBitcoinPrice();
  }
  
  getBitcoinPrice() {
   this.bitcoin$ = this.bitcoinProvider.getBitcoinPrice(this.currency);
  }

}
