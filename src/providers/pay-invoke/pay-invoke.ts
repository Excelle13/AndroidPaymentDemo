import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";

declare let cordova: any;

@Injectable()
export class PayInvokeProvider {

  constructor() {
  }

// 嘉利
// 将参数附加在uri
  private JLParams(str: string) {
    return {
      "uri": "comlink://bankpos?" + str,
      "category": "mispos",
      "intent": "comlink",
      "intentstart": "startActivityForResult"
    }
  }

// 格式化嘉利调用参数
  private JLPayParamsFormat(JLPayParams: JLPayParamsI) {

    let params: string = "";

    // txnType	交易类型标志
    if (JLPayParams.txnType != undefined) {
      params = params.concat("txnType=" + JLPayParams.txnType);
      console.log("params--txntype--", JLPayParams.txnType);
    } else {
      console.log("txnType参数为必填");
    }
    // txnAmt	交易金额
    if (JLPayParams.txnAmt != undefined) {
      params = params.concat("&txnAmt=" + JLPayParams.txnAmt);
    }
    // mallCode	店铺号
    if (JLPayParams.mallCode != undefined) {
      params = params.concat("&mallCode=" + JLPayParams.mallCode)
    }
    // posNo	收银机号
    if (JLPayParams.posNo != undefined) {
      params = params.concat("&posNo=" + JLPayParams.posNo)
    }
    // tellerNo	操作员号
    if (JLPayParams.tellerNo != undefined) {
      params = params.concat("&tellerNo=" + JLPayParams.tellerNo)
    }
    // voucher	收银流水号
    if (JLPayParams.voucher != undefined) {
      params = params.concat("&voucher=" + JLPayParams.voucher)
    }
    // payType	支付方式
    if (JLPayParams.payType != undefined) {
      params = params.concat("&payType=" + JLPayParams.payType)
    }
    // invNo	票据号
    if (JLPayParams.invNo != undefined) {
      params = params.concat("&invNo=" + JLPayParams.invNo)
    }
    // batchNo	批次号
    if (JLPayParams.batchNo != undefined) {
      params = params.concat("&batchNo=" + JLPayParams.batchNo)
    }
    // sysTrace	凭证号
    if (JLPayParams.sysTrace != undefined) {
      params = params.concat("&sysTrace=" + JLPayParams.sysTrace)
    }
    // authNo	授权号
    if (JLPayParams.authNo != undefined) {
      params = params.concat("&authNo=" + JLPayParams.authNo)
    }
    // txnTime	交易时间
    if (JLPayParams.txnTime != undefined) {
      params = params.concat("&txnTime=" + JLPayParams.txnTime)
    }
    // orgTxnTime	原交易时间
    if (JLPayParams.orgTxnTime != undefined) {
      params = params.concat("&orgTxnTime=" + JLPayParams.orgTxnTime)
    }
    // rrn	参考号
    if (JLPayParams.rrn != undefined) {
      params = params.concat("&rrn=" + JLPayParams.rrn)
    }
    // scnCode	扫码信息
    if (JLPayParams.scnCode != undefined) {
      params = params.concat("&scnCode=" + JLPayParams.scnCode)
    }
    // bankCode	发卡行代码
    if (JLPayParams.bankCode != undefined) {
      params = params.concat("&bankCode=" + JLPayParams.bankCode)
    }
    // mid	商户号
    if (JLPayParams.mid != undefined) {
      params = params.concat("&mid=" + JLPayParams.mid)
    }
    // tid	终端号
    if (JLPayParams.tid != undefined) {
      params = params.concat("&tid=" + JLPayParams.tid)
    }
    // tradeNo	支付订单号
    if (JLPayParams.tradeNo != undefined) {
      params = params.concat("&tradeNo=" + JLPayParams.tradeNo)
    }
    // rc	响应码
    if (JLPayParams.rc != undefined) {
      params = params.concat("&rc=" + JLPayParams.rc)
    }
    // rspText	响应信息
    if (JLPayParams.rspText != undefined) {
      params = params.concat("&rspText=" + JLPayParams.rspText)
    }
    // pan	卡号
    if (JLPayParams.pan != undefined) {
      params = params.concat("&pan=" + JLPayParams.pan)
    }
    // dscnt	优惠金额
    if (JLPayParams.dscnt != undefined) {
      params = params.concat("&dscnt=" + JLPayParams.dscnt)
    }
    // memo	备注信息
    if (JLPayParams.memo != undefined) {
      params = params.concat("&memo=" + JLPayParams.memo)
    }
    // orgTxnType	原交易类型
    if (JLPayParams.orgTxnType != undefined) {
      params = params.concat("&orgTxnType=" + JLPayParams.orgTxnType)
    }

    console.log("params----", params);

    return params;
  }

  // 支付调用
  JLPay(JLPayParams: JLPayParamsI) {
    return Observable.create((ob) => {
      cordova.plugins.A8PayInvoke.invokeJL(this.JLParams(this.JLPayParamsFormat(JLPayParams)), {}, (result) => {
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

  // 银石
  // 将参数附加在uri
  private YSParams(str: string) {
    if (str.indexOf("TxnType=105") == 0)

      return {
        "uri": "sssoft://sssoft.uri.activity/payAdmin?" + str,
        "intent": "android.sssoft.schemeurl.activity",
        "intentstart": "startActivityForResult"
      };

    return {
      "uri": "sssoft://sssoft.uri.activity/payTrans?" + str,
      "intent": "android.sssoft.schemeurl.activity",
      "intentstart": "startActivityForResult"
    };
  }

// 格式化银石调用参数
  private YSPayParamsFormat(YSPayParams: YSPayParamsI) {

    let params: string = "";

    if (YSPayParams.TxnType != undefined) {
      params = params.concat("TxnType=" + YSPayParams.TxnType);
    }
    if (YSPayParams.PayMode != undefined) {
      params = params.concat("PayMode=" + YSPayParams.PayMode);
    }
    if (YSPayParams.OrgTxnNo != undefined) {
      params = params.concat("OrgTxnNo=" + YSPayParams.OrgTxnNo);
    }
    if (YSPayParams.MerchantTxnNo != undefined) {
      params = params.concat("MerchantTxnNo=" + YSPayParams.MerchantTxnNo);
    }
    if (YSPayParams.OrgMerchantID != undefined) {
      params = params.concat("OrgMerchantID=" + YSPayParams.OrgMerchantID);
    }
    if (YSPayParams.RefundTxnNo != undefined) {
      params = params.concat("RefundTxnNo=" + YSPayParams.RefundTxnNo);
    }
    if (YSPayParams.OrgMultData != undefined) {
      params = params.concat("OrgMultData=" + YSPayParams.OrgMultData);
    }
    if (YSPayParams.TxnAmt != undefined) {
      params = params.concat("TxnAmt=" + YSPayParams.TxnAmt);
    }
    if (YSPayParams.RefundAmt != undefined) {
      params = params.concat("RefundAmt=" + YSPayParams.RefundAmt);
    }
    if (YSPayParams.CurrencyCode != undefined) {
      params = params.concat("CurrencyCode=" + YSPayParams.CurrencyCode);
    }
    if (YSPayParams.TxnReqTime != undefined) {
      params = params.concat("TxnReqTime=" + YSPayParams.TxnReqTime);
    }
    if (YSPayParams.PermitDisctAmt != undefined) {
      params = params.concat("PermitDisctAmt=" + YSPayParams.PermitDisctAmt);
    }
    if (YSPayParams.CashierID != undefined) {
      params = params.concat("CashierID=" + YSPayParams.CashierID);
    }
    if (YSPayParams.TxnLongDesc != undefined) {
      params = params.concat("TxnLongDesc=" + YSPayParams.TxnLongDesc);
    }
    if (YSPayParams.TxnShortDesc != undefined) {
      params = params.concat("TxnShortDesc=" + YSPayParams.TxnShortDesc);
    }
    if (YSPayParams.ItemDetail != undefined) {
      params = params.concat("ItemDetail=" + YSPayParams.ItemDetail);
    }
    if (YSPayParams.RefundReason != undefined) {
      params = params.concat("RefundReason=" + YSPayParams.RefundReason);
    }
    if (YSPayParams.OrgAuthCode != undefined) {
      params = params.concat("OrgAuthCode=" + YSPayParams.OrgAuthCode);
    }
    if (YSPayParams.OrgTxnDate != undefined) {
      params = params.concat("OrgTxnDate=" + YSPayParams.OrgTxnDate);
    }
    if (YSPayParams.RespCode != undefined) {
      params = params.concat("RespCode=" + YSPayParams.RespCode);
    }
    if (YSPayParams.RespDesc != undefined) {
      params = params.concat("RespDesc=" + YSPayParams.RespDesc);
    }


    console.log("params----", params);

    return params;
  }

  // 支付调用
  YSPay(YSPayParams: YSPayParamsI) {
    return Observable.create((ob) => {
      cordova.plugins.A8PayInvoke.invokeJL(this.YSParams(this.YSPayParamsFormat(YSPayParams)), {}, (result) => {
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

  //嘉利
// txnType	交易类型标志	AN1
// txnAmt	交易金额	N12	以分为单位的交易金额
// mallCode	店铺号	AN40	最大40位的店铺编号
// posNo	收银机号	AN40	最大40位的收银机编号
// tellerNo	操作员号	AN40	最大40位的操作员编号
// voucher	收银流水号	AN40	收银流水，要求收银系统针对每一笔支付业务，产生永不重复的收银流水号
// payType	支付方式	AN3	收银系统所选择的支付方式：
// invNo	票据号	AN6	消费成功后返回的票据号，在做撤消、退货时，需要传入原消费交易的票据号，收银系统需从保存的消费成功信息中获取，如果收银系统没有保存票据号，可不传入该数据元
// batchNo	批次号	N6	消费成功后返回的批次号，在做退时，需要传入原消费交易的批次号，收银系统需从保存的消费成功信息中获取，如果收银系统没有保存批次号，可不传入该数据元
// sysTrace	凭证号	AN6	消费成功后返回的凭证号，在做撤消、退货或补打交易时,需要传入原消费交易的凭证号，收银系统需从保存的消费成功信息中获取，如果收银系统没有保存凭证号，可不传入该数据元
// authNo	授权号	AN6	消费成功后返回的授权号，在做撤消、退货时,需要传入原消费交易的授权号，收银系统需从保存的消费成功信息中获取，如果收银系统没有保存授权号，可不传入该数据元
// txnTime	交易时间	N14	交易成功后返回的日期时间
// orgTxnTime	原交易时间	N14	退货交易时，传入原消费交易的日期时间，收银系统从保存的消费成功信息中获取，如果收银系统没有保存日期时间，可不传入该数据元
// rrn	参考号	AN12	消费成功后返回的参考号，在做撤消、退货时,需要传入原消费交易的参考号，收银系统需从保存的消费成功信息中获取，如果收银系统没有保存参考号，可不传入该数据元
// scnCode	扫码信息	AN40	扫码支付时，收银系统传入的扫码信息（由收银系统进行扫码时传入）
// bankCode	发卡行代码	AN4	发卡行代码
// mid	商户号	AN20	商户号
// tid	终端号	AN8	终端号
// tradeNo	支付订单号	AN40	支付时，返回的支付流水号
// rc	响应码	AN2	00表示成功，其他表示失败
// rspText	响应信息	ANS40	响应信息
// pan	卡号	NS19	卡号
// dscnt	优惠金额	N12	优惠金额
// memo	备注信息	ANS100	保留数据元。请求，响应中，均可能出现备注信息
// orgTxnType	原交易类型	AN1	当交易类型标志为P或Q时，响应报文返回原交易类型

  // 银石
  // TxnType String(4) M R 交易类型码，参见文档定义…
  // PayMode String(2) O C 支付模式，参见文档定义…  为空，则展示支付模式选择列表
  // MerchantTxnNo String(20) O R 商户交易流水号，由商户收银系 统生成，每笔交易必须唯一。 如果交易与之前交易的流水号 相同，系统将拒绝。 (如果为空，则系统自动生成)
  // TxnAmt Number(15,2) M R 交易金额，格式： ###############.## 单位：元（人民币）
  // CurrencyCode String(3) M R 货币代码，例如人民币 （CNY）:156， 参见附件说明… 目前仅支持 RMB：156
  // TxnReqTime String(20) M  请求时间，格式：  YYYY/MM/DD HH24:MM:DD
  // PermitDisctAmt Number(15,2) O O 允许参与折扣的金额，格式同
  // TxnAmt。 例如： 菜品可以打折，酒水不可以打 折，则该域填写菜品金额。
  // CashierID String(20) O O 收银员 ID，由收银系统定义。
  // TxnLongDesc String(400) O  交易明细信息。
  // TxnShortDesc String(256) O  交易简述，可显示在客户的手机 上。
  // ItemDetail[] String(…) O  订单商品明细列表参见文档定 义…
  // RespCode String(4)  M 返回码表， 参见文档定义…
  // RespDesc String(100)  M 返回码的详细描述，参见文档定 义… 或直接由受理渠道/收单机 构返回。

}

interface JLPayParamsI {
  txnType?: string;
  txnAmt?: string;
  mallCode?: string;
  posNo?: string;
  tellerNo?: string;
  voucher?: string;
  payType?: string;
  invNo?: string;
  batchNo?: string;
  sysTrace?: string;
  authNo?: string;
  txnTime?: string;
  orgTxnTime?: string;
  rrn?: string;
  scnCode?: string;
  bankCode?: string;
  mid?: string;
  tid?: string;
  tradeNo?: string;
  rc?: string;
  rspText?: string;
  pan?: string;
  dscnt?: string;
  memo?: string;
  orgTxnType?: string;
}

interface YSPayParamsI {
  TxnType?: string;  //交易类型码
  PayMode?: string; //支付模式
  OrgTxnNo?: string; //原消费交易的 MerchantTxnN
  MerchantTxnNo?: string; //商户交易流水号，由商户收银系 统生成，每笔交易必须唯一。 如果交易与之前交易的流水号 相同，系统将拒绝。 (如果为空，则系统自动生成)
  OrgMerchantID?: string;
  RefundTxnNo?: string;
  OrgMultData?: string; //原交易信息（撤销/退货用） (如果为空，则界面上手工输入 相关信息)
  TxnAmt?: string; //交易金额，格式： ###############.## 单位：元（人民币） 仅扫码支付需要（2：微信，6： 支付宝）
  RefundAmt?: string;
  CurrencyCode?: string; //货币代码，例如人民币 （CNY）:15
  TxnReqTime?: string; //请求时间，格式：  YYYY/MM/DD HH24:MM:DD
  PermitDisctAmt?: string;
  CashierID?: string; //收银员 ID，由收银系统定义
  TxnLongDesc?: string; //交易明细信息
  TxnShortDesc?: string; //交易简述，可显示在客户的手机 上。
  ItemDetail?: string; //订单商品明细列表
  RefundReason?: string; //退款原因
  OrgAuthCode?: string; //原交易的授权码
  OrgTxnDate?: string; //原交易的日期（MMdd）
  RespCode?: string;
  RespDesc?: string;

}
