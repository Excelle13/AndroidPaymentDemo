import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {YsPayProvider} from "../../providers/ys-pay/ys-pay";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-ys-pay',
  templateUrl: 'ys-pay.html',
})
export class YsPayPage {
  txnAmt;
  invNO;
  result;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ysPay: YsPayProvider,
              public http: HttpClient) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YsPayPage');
  }

  consume() {
    this.ysPay.consume(this.txnAmt).subscribe((data) => {
      this.result = data;
    }, err => {
      this.result = err;
    })
  }

  revoke() {
    this.ysPay.revoke(this.txnAmt,this.invNO).subscribe((data) => {
      this.result = data;
    }, err => {
      this.result = err;
    })
  }

  returnGoods() {
    this.ysPay.returnGoods(this.txnAmt,this.invNO).subscribe((data) => {
      this.result = data;
    }, err => {
      this.result = err;
    })
  }

  settlement() {
    this.ysPay.settlement(this.txnAmt).subscribe((data) => {
      this.result = data;
    }, err => {
      this.result = err;
    })
  }

}
