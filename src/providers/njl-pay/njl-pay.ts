import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AmountCalculationProvider} from "../amount-calculation/amount-calculation";


declare let cordova: any;

@Injectable()
export class NjlPayProvider {

  constructor(public http: HttpClient,
              private amtCount: AmountCalculationProvider) {
    console.log('Hello NjlPayProvider Provider');
  }

  // 嘉利调用参数设置
  invokeParams(str: string) {
    return {
      "uri": "comlink://bankpos?" + str,
      "category": "mispos",
      "intent": "comlink",
      "intentstart": "startActivityForResult"
    }
  }

  // 消费
  consume(params: JLConsumeKey): Observable<any> {

    let str =
      "txnType=" + "C" +
      "&payType=" + "001" +
      "&txnAmt=" + this.formatAmt(Number(params.txnAmt)) +
      "&mallCode=" + (params.mallCode != undefined ? params.mallCode : "test_mallCode") +
      "&posNo=" + (params.posNo != undefined ? params.posNo : "test_posNo") +
      "&tellerNo=" + (params.tellerNo != undefined ? params.tellerNo : "test_tellerNo") +
      "&voucher=" + (params.voucher != undefined ? params.voucher : "test_voucher");

    return Observable.create((ob) => {
      cordova.plugins.A8PayInvoke.invokeJL(this.invokeParams(str), {}, (result) => {
        let rep = result['rc'];
        if (rep == '00') {
          ob.next({
            header: {repCode: "00", message: result['rspText']},
            body: result
          });
        } else {
          ob.error({
            header: {repCode: result['rc'], message: result['rspText']},
            body: result
          });
        }
      }, (error) => {
        ob.error(error);
      });
    });
  }

// 撤销
  revoke(params: JLRevokeKey): Observable<any> {

    let str =
      "txnType=" + "D" +
      "&payType=" + "001" +
      "&txnAmt=" + this.formatAmt(Number(params.txnAmt)) +
      "&mallCode=" + (params.mallCode != undefined ? params.mallCode : "test_mallCode") +
      "&posNo=" + (params.posNo != undefined ? params.posNo : "test_posNo") +
      "&invNo=" + (params.invNo != undefined ? params.invNo : "test_invNo") +
      "&sysTrace=" + (params.sysTrace != undefined ? params.sysTrace : "test_sysTrace") +
      "&tellerNo=" + (params.tellerNo != undefined ? params.tellerNo : "test_tellerNo") +
      "&voucher=" + (params.voucher != undefined ? params.voucher : "test_voucher");

    return Observable.create((ob) => {
      cordova.plugins.A8PayInvoke.invokeJL(this.invokeParams(str), {}, (result) => {
        let rep = result['rc'];
        if (rep == '00') {
          ob.next({
            header: {repCode: "00", message: result['rspText']},
            body: result
          });
        } else {
          ob.error({
            header: {repCode: result['rc'], message: result['rspText']},
            body: result
          });
        }
      }, (error) => {
        ob.error(error);
      });
    });
  }


  // 退货
  returnGoods(params: JLReturnGoodsKey): Observable<any> {

    let str =
      "txnType=" + "R" +
      "&payType=" + "001" +
      "&txnAmt=" + this.formatAmt(Number(params.txnAmt)) +
      "&mallCode=" + (params.mallCode != undefined ? params.mallCode : "test_mallCode") +
      "&posNo=" + (params.posNo != undefined ? params.posNo : "test_posNo") +
      "&tellerNo=" + (params.tellerNo != undefined ? params.tellerNo : "test_tellerNo") +
      "&voucher=" + (params.voucher != undefined ? params.voucher : "test_voucher") +
      "&invNo=" + (params.invNo != undefined ? params.invNo : "test_invNo") +
      "&sysTrace=" + (params.sysTrace != undefined ? params.sysTrace : "test_sysTrace") +
      "&authNo=" + (params.authNo != undefined ? params.authNo : "123456") +
      "&batchNo=" + (params.batchNo != undefined ? params.batchNo : "000002") +
      "&rrn=" + (params.rrn != undefined ? params.rrn : "test_rrn") +
      "&orgTxnTime=" + (params.orgTxnTime != undefined ? params.orgTxnTime : "0621121212") +
      "&tradeNo=" + (params.tradeNo != undefined ? params.tradeNo : "test_tradeNo");

    return Observable.create((ob) => {
      cordova.plugins.A8PayInvoke.invokeJL(this.invokeParams(str), {}, (result) => {
        let rep = result['rc'];
        if (rep == '00') {
          ob.next({
            header: {repCode: "00", message: result['rspText']},
            body: result
          });
        } else {
          ob.error({
            header: {repCode: result['rc'], message: result['rspText']},
            body: result
          });
        }
      }, (error) => {
        ob.error(error);
      });
    });
  }

// 结算
  settlement(params: JLReturnGoodsKey): Observable<any> {


    let str =
      "txnType=" + "R" +
      "&payType=" + "001" +
      "&txnAmt=" + this.formatAmt(Number(params.txnAmt)) +
      "&mallCode=" + (params.mallCode != undefined ? params.mallCode : "test_mallCode") +
      "&posNo=" + (params.posNo != undefined ? params.posNo : "test_posNo") +
      "&tellerNo=" + (params.tellerNo != undefined ? params.tellerNo : "test_tellerNo") +
      "&voucher=" + (params.voucher != undefined ? params.voucher : "test_voucher") +
      "&invNo=" + (params.invNo != undefined ? params.invNo : "test_invNo") +
      "&sysTrace=" + (params.sysTrace != undefined ? params.sysTrace : "test_sysTrace") +
      "&authNo=" + (params.authNo != undefined ? params.authNo : "123456") +
      "&batchNo=" + (params.batchNo != undefined ? params.batchNo : "000002") +
      "&rrn=" + (params.rrn != undefined ? params.rrn : "test_rrn") +
      "&tradeNo=" + (params.tradeNo != undefined ? params.tradeNo : "test_tradeNo");

    return Observable.create((ob) => {
      cordova.plugins.A8PayInvoke.invokeJL(this.invokeParams(str), {}, (result) => {
        let rep = result['rc'];
        if (rep == '00') {
          ob.next({
            header: {repCode: "00", message: result['rspText']},
            body: result
          });
        } else {
          ob.error({
            header: {repCode: result['rc'], message: result['rspText']},
            body: result
          });
        }
      }, (error) => {
        ob.error(error);
      });
    });
  }

// 积分卡
  integralCard(): Observable<any>{
    let mallCode = "wxtd001";
    let pos_no = "p001";
    let tellerNo = "t001";
    let mVoucher = "123456211344" + parseInt((Math.random() * 1000).toString());
    let mpayType = "005";
    let minvNo = "000000";
    let msysTrace = "000000";
    let txnTime = "0312121212";

    let str = "txnAmt=000000000001" +
      "&txnType=C" +
      "&mallCode=" + mallCode +
      "&posNo=" + pos_no +
      "&voucher=" + mVoucher +
      "&payType=" + mpayType +
      "&invNo=" + minvNo +
      "&sysTrace=" + msysTrace +
      "&tellerNo=" + tellerNo +
      "&txnTime=" + txnTime;

    return Observable.create((ob) => {


      cordova.plugins.A8PayInvoke.invokeJL(this.invokeParams(str), {}, (result) => {
        let rep = result['rc'];
        if (rep == '00') {
          ob.next({
            header: {repCode: "00", message: result['rspText']},
            body: result
          });
        } else {
          ob.error({
            header: {repCode: result['rc'], message: result['rspText']},
            body: result
          });
        }
      }, (error) => {
        ob.error(error);
      });
    });
  }

  // 购物卡
  shoppingCard(): Observable<any> {
    let mallCode = "wxtd001";
    let pos_no = "p001";
    let tellerNo = "t001";
    let mVoucher = "123456211344" + parseInt((Math.random() * 1000).toString());
    let mpayType = "002";
    let minvNo = "000000";
    let msysTrace = "000000";
    let txnTime = "0312121212";

    let str = "txnAmt=000000000001" +
      "&txnType=C" +
      "&mallCode=" + mallCode +
      "&posNo=" + pos_no +
      "&voucher=" + mVoucher +
      "&payType=" + mpayType +
      "&invNo=" + minvNo +
      "&sysTrace=" + msysTrace +
      "&tellerNo=" + tellerNo +
      "&txnTime=" + txnTime;

    return Observable.create((ob) => {

      cordova.plugins.A8PayInvoke.invokeJL(this.invokeParams(str), {}, (result) => {
        let rep = result['rc'];
        if (rep == '00') {
          ob.next({
            header: {repCode: "00", message: result['rspText']},
            body: result
          });
        } else {
          ob.error({
            header: {repCode: result['rc'], message: result['rspText']},
            body: result
          });
        }
      }, (error) => {
        ob.error(error);
      });
    });

  }

  formatAmt(num: number) {
    let temp;
    temp = (this.amtCount.multiply(num, 100)).toString();
    return (Array(12).join('0') + temp.replace(".", "")).slice(-12);
  }
}

interface JLConsumeKey {

  txnAmt: string,
  mallCode?: string,
  posNo?: string,
  tellerNo?: string,
  voucher?: string,
  scnCode?: string
}

interface JLRevokeKey {
  txnAmt: string,
  mallCode?: string,
  posNo?: string,
  tellerNo?: string,
  voucher?: string,
  invNo: string,
  sysTrace: string
}

interface JLReturnGoodsKey {
  txnAmt: string,
  mallCode?: string,
  posNo?: string,
  tellerNo?: string,
  voucher?: string,
  invNo: string,
  sysTrace: string,
  authNo: string,
  batchNo: string,
  orgTxnTime: string,
  rrn: string,
  tradeNo: string,
}

interface JLSettlementKey {
  txnAmt: string,
  mallCode?: string,
  posNo?: string,
  tellerNo?: string,
  voucher?: string,
  invNo: string,
  sysTrace: string,
  authNo: string,
  batchNo: string,
  orgTxnTime: string,
  rrn: string,
  tradeNo: string,
}
