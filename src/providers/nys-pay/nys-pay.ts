import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";

declare let cordova: any;

@Injectable()
export class NysPayProvider {


  constructor(public http: HttpClient) {
    console.log('Hello NysPayProvider Provider');
  }

  // 银石调用参数设置
  invokeParams(str: string) {
    return {
      "uri": "sssoft://sssoft.uri.activity/payTrans?" + str,
      "intent": "android.sssoft.schemeurl.activity",
      "intentstart": "startActivityForResult"
    }
  }  // 银石调用参数设置
  invokeManaParams(str: string) {
    return {
      "uri": "sssoft://sssoft.uri.activity/payAdmin?" + str,
      "intent": "android.sssoft.schemeurl.activity",
      "intentstart": "startActivityForResult"
    }
  }


  // 消费
  consume(params: ConsumeKey): Observable<any> {

    let TxnReqTime = this.formatDate("yyyy/MM/dd HH:mm:ss");

    let str =
      "TxnType=101" +
      "&PayMode=" + (params.PayMode != undefined ? params.PayMode : "1") +
      "&TxnAmt=" + params.TxnAmt +
      "&CurrencyCode=" + (params.CurrencyCode != undefined ? params.CurrencyCode : "156") +
      "&TxnReqTime=" + TxnReqTime +
      "&PermitDisctAmt=" + (params.PermitDisctAmt != undefined ? params.PermitDisctAmt : "") +
      "&CashierID=" + (params.CashierID != undefined ? params.CashierID : "test001") +
      "&PermitDisctAmt=" + (params.PayMode != undefined ? params.PayMode : "1") +
      "&TxnLongDesc=" + (params.TxnLongDesc != undefined ? params.TxnLongDesc : "test-TxnLongDesc") +
      "&TxnShortDesc=" + (params.TxnShortDesc != undefined ? params.TxnShortDesc : "test-TxnShortDesc") +
      "&ItemDetail=" + (params.ItemDetail != null ? params.ItemDetail : []) +
      "&MerCode=" + (params.MerCode != undefined ? params.MerCode : "test-MerCode") +
      "&PosNo=" + (params.PosNo != undefined ? params.PosNo : "test-PosNo");

    return Observable.create((ob) => {
      cordova.plugins.A8PayInvoke.invokeJL(this.invokeParams(str), {}, (result) => {
        let rep = result['RespCode'];
        if (rep == '00') {
          ob.next({
            header: {repCode: "00", message: result['RespDesc']},
            body: result
          });
        } else {
          ob.error({
            header: {repCode: result['RespCode'], message: result['RespDesc']},
            body: result
          });
        }
      }, (error) => {
        ob.error(error);
      });
    });
  }


  // 撤销
  revoke(params: RevokeKey): Observable<any> {

    let TxnReqTime = this.formatDate("yyyy/MM/dd HH:mm:ss");

    let str =
      "TxnType=102" +
      "&PayMode=" + (params.PayMode != undefined ? params.PayMode : "1") +
      "&RefundAmt=" + params.RefundAmt +
      "&CurrencyCode=" + (params.CurrencyCode != undefined ? params.CurrencyCode : "156") +
      "&TxnReqTime =" + TxnReqTime +
      "&OrgMultData=" + (params.OrgMultData != undefined ? params.OrgMultData : "") +
      "&CashierID=" + (params.CashierID != undefined ? params.CashierID : "test001") +
      "&MerCode=" + (params.MerCode != undefined ? params.MerCode : "test-MerCode") +
      "&PosNo=" + (params.PosNo != undefined ? params.PosNo : "test-PosNo");

    return Observable.create((ob) => {
      cordova.plugins.A8PayInvoke.invokeJL(this.invokeParams(str), {}, (result) => {
        let rep = result['RespCode'];
        if (rep == '00') {
          ob.next({
            header: {repCode: "00", message: result['RespDesc']},
            body: result
          });
        } else {
          ob.error({
            header: {repCode: result['RespCode'], message: result['RespDesc']},
            body: result
          });
        }
      }, (error) => {
        ob.error(error);
      });
    });
  }


  // 退款
  refund(params: RefundKey): Observable<any> {

    let TxnReqTime = this.formatDate("yyyy/MM/dd HH:mm:ss");

    let str =
      "TxnType=103" +
      "&PayMode=" + (params.PayMode != undefined ? params.PayMode : "1") +
      "&RefundTxnNo=" + (params.RefundTxnNo != undefined ? params.RefundTxnNo : "test-RefundTxnNo") +
      "&RefundAmt=" + params.RefundAmt +
      "&OrgMerchantID=" + (params.OrgMerchantID != undefined ? params.OrgMerchantID : "test-OrgMerchantID") +
      "&CurrencyCode=" + (params.CurrencyCode != undefined ? params.CurrencyCode : "156") +
      "&TxnReqTime=" + TxnReqTime +
      "&OrgMultData=" + (params.OrgMultData != undefined ? params.OrgMultData : "") +
      "&CashierID=" + (params.CashierID != undefined ? params.CashierID : "test001") +
      "&TxnLongDesc=" + (params.TxnLongDesc != undefined ? params.TxnLongDesc : "test-TxnLongDesc") +
      "&TxnShortDesc=" + (params.TxnShortDesc != undefined ? params.TxnShortDesc : "test-TxnShortDesc") +
      "&ItemDetail=" + (params.ItemDetail != null ? params.ItemDetail : []) +
      "&MerCode=" + (params.MerCode != undefined ? params.MerCode : "test-MerCode") +
      "&PosNo=" + (params.PosNo != undefined ? params.PosNo : "test-PosNo");

    return Observable.create((ob) => {
      cordova.plugins.A8PayInvoke.invokeJL(this.invokeParams(str), {}, (result) => {
        let rep = result['RespCode'];
        if (rep == '00') {
          ob.next({
            header: {repCode: "00", message: result['RespDesc']},
            body: result
          });
        } else {
          ob.error({
            header: {repCode: result['RespCode'], message: result['RespDesc']},
            body: result
          });
        }
      }, (error) => {
        ob.error(error);
      });
    });
  }

  transactionQuery(params: TransactionQueryKey): Observable<any> {
    let str =
      "TxnType=104" +
      "&PayMode=" + (params.PayMode != undefined ? params.PayMode : "1") +
      "&TxnAmt=" + (params.TxnAmt != undefined ? params.TxnAmt : "") +
      "&CurrencyCode=" + (params.CurrencyCode != undefined ? params.CurrencyCode : "156") +
      "&OrgTxnNo=" + (params.OrgTxnNo != undefined ? params.OrgTxnNo : "") +
      "&QueryType=" + (params.QueryType != undefined ? params.QueryType : "test-QueryType") +
      "&MerCode=" + (params.MerCode != undefined ? params.MerCode : "test-MerCode");

    return Observable.create((ob) => {
      cordova.plugins.A8PayInvoke.invokeJL(this.invokeParams(str), {}, (result) => {
        let rep = result['RespCode'];
        if (rep == '00') {
          ob.next({
            header: {repCode: "00", message: result['RespDesc']},
            body: result
          });
        } else {
          ob.error({
            header: {repCode: result['RespCode'], message: result['RespDesc']},
            body: result
          });
        }
      }, (error) => {
        ob.error(error);
      });
    });
  }


  // 格式化日期
  formatDate(fmt) { //author: meizz

    let date = new Date();
    let o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "H+": date.getHours(), //小时
      "m+": date.getMinutes(), //分z
      "s+": date.getSeconds(), //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }


  // 管理類
  mana(): Observable<any> {

    let TxnReqTime = this.formatDate("yyyy/MM/dd HH:mm:ss");
    let str =
      "TxnType=105" +
      "&MerCode=mall001" +
      "&TxnReqTime=" + TxnReqTime;


    return Observable.create((ob) => {
      cordova.plugins.A8PayInvoke.invokeJL(this.invokeManaParams(str), {}, (result) => {
        let rep = result['RespCode'];
        if (rep == '00') {
          ob.next({
            header: {repCode: "00", message: result['RespDesc']},
            body: result
          });
        } else {
          ob.error({
            header: {repCode: result['RespCode'], message: result['RespDesc']},
            body: result
          });
        }
      }, (error) => {
        ob.error(error);
      });
    });

  }


}

interface ConsumeKey {
  TxnAmt: string,
  MerchantTxnNo: string,
  MerCode: string,
  PayMode?: string,
  TxnType?: string,
  CurrencyCode?: string,
  TxnReqTime?: string,
  PermitDisctAmt?: string,
  CashierID?: string,
  TxnLongDesc?: string,
  TxnShortDesc?: string,
  ItemDetail?: Array<any>,
  PosNo?: string
}

interface RevokeKey {
  PayMode?: string,
  RefundAmt: string,
  CurrencyCode?: string,
  OrgMultData: string,
  TxnReqTime?: string,
  CashierID?: string,
  MerCode: string,
  PosNo?: string
}

interface RefundKey {
  PayMode?: string,
  RefundTxnNo: string,
  RefundAmt: string,
  OrgMerchantID: string,
  CurrencyCode?: string,
  OrgMultData: string,
  TxnReqTime?: string,
  CashierID?: string,
  TxnLongDesc?: string,
  TxnShortDesc?: string,
  ItemDetail?: Array<any>,
  RefundReason?: string,
  MerCode: string,
  PosNo?: string
}

interface TransactionQueryKey {
  PayMode?: string,
  OrgTxnNo: string,
  QueryType: string,
  TxnAmt: string,
  CurrencyCode?: string,
  MerCode: string,
}
