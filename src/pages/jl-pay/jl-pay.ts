import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {JlPayProvider} from "../../providers/jl-pay/jl-pay";
import {NjlPayProvider} from "../../providers/njl-pay/njl-pay";
import {PayInvokeProvider} from "../../providers/pay-invoke/pay-invoke";

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
              public njlPay: NjlPayProvider,
              public payInvoke: PayInvokeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JlPayPage');
  }

  newConsume() {
    let temp = {
      txnType: "C",
      payType: "001",
      txnAmt: "000000000023",
      mallCode: "mallcode001",
      posNo: "pos001",
      tellerNo: "tellerNo0001",
      voucher: "2345678765699" +parseInt((Math.random() * 100).toString(),10),
      memo:"不知道呀，测试一下！！memo"
    };

    this.payInvoke.JLPay(temp).subscribe((data) => {
      this.result = data;
    }, err => {
      this.result = err;
    })
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
    this.jlPay.revoke(this.txnAmt,this.invNO).subscribe((data) => {
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


  integralCard() {
    this.njlPay.integralCard().subscribe((res) => {
      this.result = res;
    }, err => {
      this.result = err;
    })
  }

  shoppingCard() {
    this.njlPay.shoppingCard().subscribe((res) => {
      this.result = res;
    }, err => {
      this.result = err;
    })
  }
}
