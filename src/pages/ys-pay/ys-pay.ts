import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {YsPayProvider} from "../../providers/ys-pay/ys-pay";
import {HttpClient} from "@angular/common/http";
import {NysPayProvider} from "../../providers/nys-pay/nys-pay";

@Component({
  selector: 'page-ys-pay',
  templateUrl: 'ys-pay.html',
})
export class YsPayPage {
  txnAmt;
  invNO;
  result;

  consumeData;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ysPay: YsPayProvider,
              public http: HttpClient,
              public nysPay: NysPayProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YsPayPage');
  }

  consume() {

    let params = {
      TxnAmt: this.txnAmt,
      MerchantTxnNo: "080909882",
      MerCode: "Pos001"
    };

    this.nysPay.consume(params).subscribe((data) => {
      this.result = data;
      this.consumeData = data;
    }, err => {
      this.result = err;
    })
    /*
    this.ysPay.consume(this.txnAmt).subscribe((data) => {
      this.result = data;
      this.consumeData = data;
    }, err => {
      this.result = err;
    })*/
  }

  revoke() {

    console.log("消费成功返回来的数据--", this.consumeData);
    console.log("消费成功返回来的数据--", this.consumeData['RRN']);
    let params = {
      RefundAmt: this.txnAmt,
      OrgMultData: this.consumeData['body']['MultData'],
      MerCode: "POS001"
    };

    this.nysPay.revoke(params).subscribe((data) => {
      this.result = data;
    }, err => {
      this.result = err;
    })
  }

  refund() {

    let params = {
      RefundTxnNo: "000010",
      RefundAmt: this.txnAmt,
      OrgMerchantID: "wewew",
      OrgMultData: this.consumeData['body']['MultData'],
      MerCode: "POS001"
    };
    this.nysPay.refund(params).subscribe((data) => {
      this.result = data;
    }, err => {
      this.result = err;
    })
  }

  transactionQuery() {

    let params = {
      RefundTxnNo: "000010",
      TxnAmt: this.txnAmt,
      QueryType: "",
      OrgTxnNo: "wewew",
      MerCode: "POS001"
    };
    this.nysPay.transactionQuery(params).subscribe((data) => {
      this.result = data;
    }, err => {
      this.result = err;
    })
  }


  mana() {
    this.nysPay.mana().subscribe((data) => {
      this.result = data;
    }, err => {
      this.result = err;
    })
  }


}
