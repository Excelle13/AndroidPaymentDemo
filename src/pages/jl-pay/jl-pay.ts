import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {JlPayProvider} from "../../providers/jl-pay/jl-pay";
import {NjlPayProvider} from "../../providers/njl-pay/njl-pay";

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
              public jlPay: JlPayProvider,
              public njlPay: NjlPayProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JlPayPage');
  }

  consume() {
    let consumeParams = {
      txnAmt: this.txnAmt
    };
    this.njlPay.consume(consumeParams).subscribe((data) => {
      this.result = data;
    }, err => {
      this.result = err;
    })
  }

  revoke() {
    let revokeParams = {
      txnAmt: this.txnAmt,
      invNo: this.invNO,
      sysTrace: this.invNO,
    };
    this.njlPay.revoke(revokeParams).subscribe((data) => {
      this.result = data;
    }, err => {
      this.result = err;
    })
  }

  returnGoods() {

    let returnGoodsParams = {
      txnAmt: this.txnAmt,
      invNo: this.invNO,
      sysTrace: this.invNO,
      authNo: '123456',
      batchNo: '000002',
      orgTxnTime: '06211111111',
      rrn: '',
      tradeNo: '',
    };

    this.njlPay.returnGoods(returnGoodsParams).subscribe((data) => {
      this.result = data;
    }, err => {
      this.result = err;
    })
  }

  settlement() {
    let settlementParams = {
      txnAmt: this.txnAmt
    };
    this.jlPay.settlement(this.txnAmt).subscribe((data) => {
      this.result = data;
    }, err => {
      this.result = err;
    })
  }
}
