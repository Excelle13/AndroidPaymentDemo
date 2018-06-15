import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {JlPayProvider} from "../../providers/jl-pay/jl-pay";
import {ConsumeKey} from "../../providers/nys-pay/nys-pay";

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

    let params = {
      TxnAmt: "0.01",
      MerchantTxnNo: "080909882",
      MerCode: "Pos001"
    };

    this.test(params);


    /*

        let str = "tt=101";
        let params: Object = {
          name: 'zhaobo',
          age: 1,
          gender: 'female',
          height: '178',
          weight: '125'
        };
    */

    // for (const param in params) {
    // if (params.hasOwnProperty(param)) {
    // console.log(params[param]);
    //   str += "$"+param + "="+params[param];
    // }

    // console.log(param);

    // }

    // console.log(str);

    // console.log(ConsumeKey[1]);


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
    this.jlPay.revoke(this.txnAmt, this.invNO).subscribe((data) => {
      this.result = data;
    }, err => {
      this.result = err;
    })
  }

  returnGoods() {
    this.jlPay.returnGoods(this.txnAmt, this.invNO).subscribe((data) => {
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

  test(params: ConsumeKey) {

    let payMode = params.PayMode != undefined ? params.PayMode : "14123";
    console.log(params.PayMode == undefined);
    let str = "TxnType=101";
    str +=
      "&PayMode=" + (params.PayMode != undefined ? params.PayMode : "14123") +
      "&TxnAmt=" + params.TxnAmt +
      "&CurrencyCode=" + "156" +
      "&PermitDisctAmt=" + (params.PermitDisctAmt != undefined ? params.PermitDisctAmt : "") +
      "&CashierID=" + (params.CashierID != undefined ? params.CashierID : "test001") +
      "&PermitDisctAmt=" + (params.PayMode != undefined ? params.PayMode : "1") +
      "&TxnLongDesc=" + (params.TxnLongDesc != undefined ? params.TxnLongDesc : "test-TxnLongDesc") +
      "&TxnShortDesc=" + (params.TxnShortDesc != undefined ? params.TxnShortDesc : "test-TxnShortDesc") +
      "&ItemDetail=" + (params.ItemDetail != null ? params.ItemDetail : []) +
      "&MerCode=" + (params.MerCode != undefined ? params.MerCode : "test-MerCode") +
      "&PosNo=" + (params.PosNo != undefined ? params.PosNo : "test-PosNo");

    console.log(str);
  }
}
