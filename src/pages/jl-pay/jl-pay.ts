import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {JlPayProvider} from "../../providers/jl-pay/jl-pay";

/**
 * Generated class for the JlPayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-jl-pay',
  templateUrl: 'jl-pay.html',
})
export class JlPayPage {
  txnAmt;
  invNO;
  result;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public jlPay: JlPayProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JlPayPage');
  }

  consume() {
    this.jlPay.consume(this.txnAmt).subscribe((data) => {
      this.result = data;
    }, err => {
      this.result = err;
    })
  }

  revoke() {
    this.jlPay.revoke(this.txnAmt,this.invNO).subscribe((data) => {
      this.result = data;
    }, err => {
      this.result = err;
    })
  }

  returnGoods() {
    this.jlPay.returnGoods(this.txnAmt,this.invNO).subscribe((data) => {
      this.result = data;
    }, err => {
      this.result = err;
    })
  }

  settlement() {
    this.jlPay.settlement(this.txnAmt).subscribe((data) => {
      this.result = data;
    }, err => {
      this.result = err;
    })
  }
}
