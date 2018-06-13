import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AmountCalculationProvider} from "../../providers/amount-calculation/amount-calculation";

declare let cordova: any;


@Injectable()
export class JlPayProvider {

  mallCode = "wxtd001";
  pos_no = "p001";
  tellerNo = "t001";
  mVoucher = "123456211344";
  mpayType = "001";
  minvNo = "000000";
  msysTrace = "000000";
  txnTime = "0312121212";

  str: string;

  constructor(public http: HttpClient,
              private amtCount: AmountCalculationProvider) {
    console.log('Hello JlPayProvider Provider');
  }

  consume(txnAmt: number): Observable<any> {
    let newTxnAmt = this.formatAmt(txnAmt);
    this.str =
      "txnAmt=" + newTxnAmt +
      "&txnType=C" +
      "&mallCode=" + this.mallCode +
      "&posNo=" + this.pos_no +
      "&voucher=" + this.mVoucher +
      "&payType=" + this.mpayType +
      "&invNo=" + this.minvNo +
      "&sysTrace=" + this.msysTrace +
      "&tellerNo=" + this.tellerNo +
      "&txnTime=" + this.txnTime;
    return Observable.create((ob) => {
      cordova.plugins.A8PayInvoke.invokeJL({
        /* params */
        "uri": "comlink://bankpos?" + this.str,
        "category": "mispos",
        "intent": "comlink",
        "intentstart": "startActivityForResult"
      }, {}, (result) => {
        let rc = result['rc'];
        let rep = result['repText'];
        if (rc != '0000') {
          ob.next(result);
        } else {
          ob.error(rep);
        }
      }, (error) => {
        ob.error(error);
      });
    })
  }

  revoke(txnAmt: number, invNo: string) {
    let newTxnAmt = this.formatAmt(txnAmt);
    this.str = "txnAmt=" + newTxnAmt +
      "&txnType=D" +
      "&mallCode=" + this.mallCode +
      "&posNo=" + this.pos_no +
      "&voucher=" + this.mVoucher +
      "&payType=" + this.mpayType +
      "&invNo=" + invNo +
      "&sysTrace=" + this.msysTrace +
      "&tellerNo=" + this.tellerNo +
      "&txnTime=" + this.txnTime;
    return Observable.create(ob => {
      cordova.plugins.A8PayInvoke.invokeJL({
        /* params */
        "uri": "comlink://bankpos?" + this.str,
        "category": "mispos",
        "intent": "comlink",
        "intentstart": "startActivityForResult"
      }, {}, (result) => {
        console.log(result);
        let rc = result['rc'];
        let rep = result['repText'];
        if (rc != '0000') {
          ob.next(result);
        } else {
          ob.error(rep);
        }
      }, (error) => {
        ob.error(error);
      });

    });
  }

  returnGoods(txnAmt: number, sysTrace: string) {
    let newTxnAmt = this.formatAmt(txnAmt);
    this.str =
      "&txnType=R" +
      "&txnAmt=" + newTxnAmt +
      "&mallCode=" + this.mallCode +
      "&posNo=" + this.pos_no +
      "&tellerNo=" + this.tellerNo +
      "&voucher=" + this.mVoucher +
      "&payType=" + this.mpayType +
      "&sysTrace=" + sysTrace +
      "&authNo=123456" +
      "&batchNo=123456" +
      "&orgTxnTime=1212121212" +
      "&rrn=123456" +
      "&tradeNo=123456";

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
          ob.error(rc);
        }
      }, (error) => {
        ob.next(error);
      });

    })

  }

  settlement(txnAmt: number) {
    /*    cordova.plugins.A8PayInvoke.invokeJL({
          /!* params *!/
          "uri": "app://bankpos",
          "category": "mispos",
          "intent": "comlink",
          "intentstart": "startActivityForResult"
        }, {
          "txnType": "S",
          "txnAmt": "000000000001",
          "mallCode": "SC01",
          "posNo": "8001",
          "tellerNo": "0092",
          "voucher": "180605000012",
          "payType": "001",
          "sysTrace": "123456",
          "invNo": "000023"
        }, (result) => {
          data(result);
        }, (error) => {
          data(error);
        });*/

    let newTxnAmt = this.formatAmt(txnAmt);
    this.str =
      "&txnType=S" +
      "&txnAmt=" + newTxnAmt +
      "&mallCode=" + this.mallCode +
      "&posNo=" + this.pos_no +
      "&tellerNo=" + this.tellerNo +
      "&voucher=" + this.mVoucher +
      "&payType=" + this.mpayType +
      "&sysTrace=123456" +
      "&authNo=123456" +
      "&batchNo=123456" +
      "&orgTxnTime=1212121212" +
      "&rrn=123456" +
      "&tradeNo=123456";

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
          ob.error(rc);
        }
      }, (error) => {
        ob.next(error);
      });

    })


  }

  formatAmt(num: number) {
    let temp;
    temp = (this.amtCount.multiply(num, 100)).toString();
    return (Array(12).join('0') + temp.replace(".", "")).slice(-12);
  }


}
