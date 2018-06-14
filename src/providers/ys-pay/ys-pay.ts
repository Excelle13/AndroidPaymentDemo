import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AmountCalculationProvider} from "../amount-calculation/amount-calculation";

declare let cordova: any;
@Injectable()
export class YsPayProvider {
  str: string;

  constructor(public http: HttpClient,
              private amtCount: AmountCalculationProvider) {
    console.log('Hello YsPayProvider Provider');
  }


  // 格式化日期
  formatDate(fmt) { //author: meizz
    let date = new Date();
    var o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "H+": date.getHours(), //小时
      "m+": date.getMinutes(), //分z
      "s+": date.getSeconds(), //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }

  consume(txnAmt: number): Observable<any> {

    let TxnReqTime = this.formatDate("yyyy/MM/dd HH:mm:ss");
    this.str =
      "TxnType=101" +
      "&MerchantTxnNo=10000001" +
      "&TxnAmt=" + txnAmt +
      "&PayMode=1" +
      "&CurrencyCode=156" +
      "&TxnReqTime=" + TxnReqTime +
      "&PermitDisctAmt=1.11";

    return Observable.create((ob) => {
      cordova.plugins.A8PayInvoke.invokeJL({
        /* params */
        "uri": "sssoft://sssoft.uri.activity/payTrans?" + this.str,
        "intent": "android.sssoft.schemeurl.activity",
        "intentstart": "startActivityForResult"
      }, {}, (result) => {
        // let rc = result['rc'];
        let rep = result['RespCode'];
        if (rep != '0000') {
          ob.next(result);
        } else {
          ob.error(result);
        }
      }, (error) => {
        ob.error(error);
      });
    })
  }

  revoke(txnAmt: number, txnData: string) {


    let TxnReqTime = this.formatDate("yyyy/MM/dd HH:mm:ss");
    this.str =
      "TxnType=102" +
      "&RefundAmt=" + txnAmt +
      "&PayMode=1" +
      "&OrgMultData=" + txnData +
      "&CurrencyCode=156" +
      "&TxnReqTime=" + TxnReqTime;

    return Observable.create(ob => {
      cordova.plugins.A8PayInvoke.invokeJL({
        "uri": "sssoft://sssoft.uri.activity/payTrans?" + this.str,
        "intent": "android.sssoft.schemeurl.activity",
        "intentstart": "startActivityForResult"
      }, {}, (result) => {
        console.log(result);
        let rep = result['RespCode'];
        if (rep != '0000') {
          ob.next(result);
        } else {
          ob.error(result);
        }
      }, (error) => {
        ob.error(error);
      });

    });
  }

  refund(txnAmt: number, invNo: string,txnData:string) {
    let TxnReqTime = this.formatDate("yyyy/MM/dd HH:mm:ss");
    this.str =
      "TxnType=103" +
      "&RefundTxnNo=000087"  +
      "&RefundAmt=" + txnAmt +
      "&PayMode=1" +
      "&CurrencyCode=156" +
      "&TxnReqTime=" + TxnReqTime;

    return Observable.create(ob => {
      cordova.plugins.A8PayInvoke.invokeJL({
        "uri": "sssoft://sssoft.uri.activity/payTrans?" + this.str,
        "intent": "android.sssoft.schemeurl.activity",
        "intentstart": "startActivityForResult"
      }, {}, (result) => {
        let rep = result['RespCode'];
        if (rep != '0000') {
          ob.next(result);
        } else {
          ob.error(result);
        }
      }, (error) => {
        ob.next(error);
      });

    })

  }

  transactionQuery(invNo: number) {

    let TxnReqTime = this.formatDate("yyyy/MM/dd HH:mm:ss");
    this.str =
      "TxnType=104" +
      "&OrgTxnNo=" + invNo;


    return Observable.create(ob => {
      cordova.plugins.A8PayInvoke.invokeJL({
        /* params */
        "uri": "comlink://bankpos?" + this.str,
        "category": "mispos",
        "intent": "comlink",
        "intentstart": "startActivityForResult"
      }, {}, (result) => {
        let rc = result['rc'];
        if (rc != '0000') {
          ob.next(result);
        } else {
          ob.error(result);
        }
      }, (error) => {
        ob.next(error);
      });

    })


  }

}
