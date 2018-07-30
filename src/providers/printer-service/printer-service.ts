import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";

declare let cordova: any;

@Injectable()
export class PrinterServiceProvider {

  constructor(public http: HttpClient) {
    // console.log('Hello PrinterServiceProvider Provider');
  }

  // 销售小票
  printSalesTicket(printParams: object): Observable<any> {
    return Observable.create((ob) => {
      cordova.plugins.A8ResPlugin.printSales(printParams, (res) => {
        ob.next(res);
      }, (err) => {
        ob.error(err);
      });
    });
  }

  // 销售总结
  printSalesSummaryTicket(printParams: object): Observable<any> {
    return Observable.create((ob) => {
      cordova.plugins.A8ResPlugin.printSalesSummary(printParams, (res) => {
        ob.next(res);
      }, (err) => {
        ob.error(err);
      });
    });
  }

  // 销售小结
  printSalesSmallSummaryTicket(printParams: object): Observable<any> {
    return Observable.create((ob) => {
      cordova.plugins.A8ResPlugin.printSalesSmallSummary(printParams, (res) => {
        ob.next(res);
      }, (err) => {
        ob.error(err);
      });

    });
  }

  // 签购单
  printSalesSlipTicket(printParams: object): Observable<any> {
    return Observable.create((ob) => {
      cordova.plugins.A8ResPlugin.printSalesSlip(printParams, (res) => {
        // console.log("printBankSalesSlipTicket", res);
        ob.next(res);
      }, (err) => {
        // console.log("printBankSalesSlipTicket", err);
        ob.error(err);
      });

    });
  }

  // 退货单
  printReturnGoodTicket(printParams: object): Observable<any> {
    return Observable.create((ob) => {
      cordova.plugins.A8ResPlugin.printReturnGood(printParams, (res) => {
        ob.next(res);
      }, (err) => {
        ob.error(err);
      });

    });
  }

  // 销售报表
  printSalesReportTicket(printParams: object): Observable<any> {
    return Observable.create((ob) => {
      cordova.plugins.A8ResPlugin.printSalesReport(printParams, (res) => {
        ob.next(res);
      }, (err) => {
        ob.error(err);
      });

    });
  }

  // 测试方法
  testCoolMethod(test: string) {
    return Observable.create((ob) => {
      cordova.plugins.A8ResPlugin.coolMethod(test, (res) => {
        ob.next(res);
      }, (err) => {
        ob.error(err);
      });

    });
  }


  // 格式化销售单数据
  private formatSalesPrintInfo(params: any, reprint?: string) {

    // console.log("reprint----", reprint);

    let barCode = [];
    let storeInfo = [];
    let goods = [];
    let money = [];
    let payment = [];
    let vip = [];
    let arCode = [];
    let tips = [];
    // 店铺信息
    let storeName = {
      storeInfoName: "商户名称",
      storeInfoValue: params['mallName']
    };
    let storeCode = {
      storeInfoName: "商户编号",
      storeInfoValue: params['mallId']
    };


    //交易日期
    let date1 = params['timestamp'];


    let transDate =
      date1.substring(0, 4) + "/" +
      date1.substring(4, 6) + "/" +
      date1.substring(6, 8) + " " +
      date1.substring(8, 10) + ":" +
      date1.substring(10, 12) + ":" +
      date1.substring(12, 14) + " ";

    let transactionLog = {
      storeInfoName: "交易日期",
      storeInfoValue: transDate
    };

    storeInfo = [
      storeName, storeCode, transactionLog
    ];

    // 支付方式
    for (const e of params['payList']) {
      console.log(e);
      console.log(e['payMethodName']);

      payment.push({
        paymentMethod: e['payMethodName'],
        paymentAmount: e['value']
      })
    }

    // 商品信息
    for (const e of params['itemList']) {
      console.log(e);
      console.log(e['itemCode']);

      goods.push({
        goodCode: e['itemCode'],
        goodSum: e['quantity'],
        amount: e['price']
      })
    }


    // VIP
    let vipCode = {
      vipInfo: "贵宾卡号",
      vpiValue: params['vipCode']
    };
    let vipPoint = {
      vipInfo: "本次积分",
      vpiValue: "--"
    };
    let vipPointConsume = {
      vipInfo: "本次消耗积分",
      vpiValue: "--"
    };

    vip = [vipCode, vipPoint, vipPointConsume];


    // money


    let preferentialAmount = {
      moneyType: "优惠金额",
      montySum: "￥ " + "0"
    };
    let coupon = {
      moneyType: "折扣券",
      montySum: "￥ " + "0"
    };

    let integralVoucher = {
      moneyType: "积分抵用券",
      montySum: "￥ " + "0"
    };
    let total = {
      moneyType: "合计",
      montySum: "￥ " + params['totalAmt']
    };
    let amountCollected = {
      moneyType: "实收金额",
      montySum: "￥ " + params['hasPay']
    };

    let chargeOfAmount = {
      moneyType: "找零金额",
      montySum: "￥ " + "0"
    };
    money = [preferentialAmount, coupon, integralVoucher, total, amountCollected, chargeOfAmount];

    // 二维码信息
    arCode = [{
      qrValue: params['mallId'] + "|" + params['mallName'] + "|" + params['orderId'],
      qrTitle: "扫二维码自动积分"
    }];
    barCode = [{
      barCodeTitle: params['orderId'],
      barCodeValue: params['orderId'],
    }];


    // 提示
    tips = [
      {tipsId: '温馨', article: "提示:"},
      {tipsId: '1', article: "请出示有效小票，并于购买日起14日内进行换货"},
      {tipsId: '2', article: "顾客需保留" + params['mallName'] + "的货物标签，挂牌及包装，在商品完整及清洁的状态下可以焕活一次。"},
      {tipsId: '3', article: "请出示有效小票，并于购买日起14日内进行换货"},
      {tipsId: '4', article: params['mallName'] + "保留最终决定权"}
    ];

    return{
      reprint: reprint != undefined ? reprint : "",
      barCode: barCode,
      storeInfo: storeInfo,
      goods: goods,
      money: money,
      payment: payment,
      vip: vip,
      arCode: arCode,
      tips: tips
    }


  }

  salesSummary = {
    "storeName": "",
    "storeId": "",
    "mallCode": "",
    "deivceId": "",
    "summaryTime": "",
    "userSale": "0202a003l1310201",
    "startTime": "2018/07/26 13:28",
    "endTime": "2018/07/26 14:44",
    "totalSaleValue": 1160,
    "orderNumbers": 16,
    "totalRefundValue": 234,
    "refundNumber": 4,
    "saleTypeList": {"现金支付": {"saleType": "销售", "payForType": "现金支付", "paysNum": 16, "thisPayMethodsValue": 1160}},
    "refundTypeList": {"现金支付": {"saleType": "退货", "payForType": "现金支付", "paysNum": 4, "thisPayMethodsValue": 234}},
    "OrderTypeList": {"已退货": {"orderType": "已退货", "orderNums": 3, "orderTotalValue": 380}}
  };

  // 格式化销售总结数据
  private formatSalesSummaryInfo(params: any, reprint?: string) {

    let storeInfo = [];
    let payment = [];
    let orderType = [];

    // 店铺信息
    let storeName = {
      storeInfoName: "商户名称",
      storeInfoValue: params['mallName']
    };
    let storeCode = {
      storeInfoName: "商户编号",
      storeInfoValue: params['mallId']
    };
    let sellerId = {
      storeInfoName: "收银员",
      storeInfoValue: params['userId']
    };

    /*  let transactionLog = {
        storeInfoName: "交易日期",
        storeInfoValue: transDate
      };*/


    storeInfo = [storeName, storeCode, sellerId];

    // 商品信息
    for (const e of params['itemList']) {
      console.log(e);
      console.log(e['itemCode']);

      orderType.push({
        goodCode: e['itemCode'],
        goodSum: e['quantity'],
        amount: e['price']
      })
    }


    return {
      storeInfo: "",
      saleSummaries: ""

    }


  }


  returnGood = {
    "type": "ONLINEREFUND",
    "uuid": "caf3f0640d37affb3a6d16fbb834fecb",
    "mallId": "0202A003",
    "mallName": "深圳万象城",
    "orderId": "010003632018072601000117",
    "userId": "0202a003l1310201",
    "vipCode": "",
    "vipName": "--",
    "vipInfo": {"name": "--", "gender": "--", "level": "--", "memberNumber": "", "point": 0},
    "itemList": [{
      "price": 255,
      "inCage": true,
      "quantity": 1,
      "index": 1,
      "total": 0,
      "indexCode": 1,
      "paymentMethod": null,
      "partRefundGood": 255,
      "itemCode": "L13102FA0001",
      "itemName": "皮毛类货品",
      "keyboard": null
    }],
    "payList": [{
      "outId": "",
      "payId": "010003632018072601000117001",
      "paymentMethodId": "0000",
      "payMethodId": "CASH",
      "raw": "",
      "time": "20180726144231",
      "index": 1,
      "payMethodName": "现金支付",
      "hasReFund": true,
      "canBeRefund": 0,
      "hadRefundNum": 100,
      "partRefundNum": 100,
      "partRefund": "REFUNDSUCCESS",
      "PayOrderId": "",
      "refundResultType": false,
      "maxUserPut": 100,
      "value": 100
    }, {
      "outId": "",
      "payId": "010003632018072601000117002",
      "paymentMethodId": "0000",
      "payMethodId": "CASH",
      "raw": "",
      "time": "20180726144238",
      "index": 2,
      "payMethodName": "现金支付",
      "hasReFund": true,
      "canBeRefund": 0,
      "hadRefundNum": 100,
      "partRefundNum": 100,
      "partRefund": "REFUNDSUCCESS",
      "PayOrderId": "",
      "refundResultType": false,
      "maxUserPut": 100,
      "value": 100
    }, {
      "outId": "",
      "payId": "010003632018072601000117003",
      "paymentMethodId": "0000",
      "payMethodId": "CASH",
      "raw": "",
      "time": "20180726144240",
      "index": 3,
      "payMethodName": "现金支付",
      "hasReFund": true,
      "canBeRefund": 0,
      "hadRefundNum": 55,
      "partRefundNum": 55,
      "partRefund": "REFUNDSUCCESS",
      "PayOrderId": "",
      "refundResultType": false,
      "maxUserPut": 55,
      "value": 55
    }],
    "statusText": "已退货",
    "refOrderId": "010003632018072601000118",
    "totalAmt": 255,
    "totalQuantity": 1,
    "putin_price_num": 0,
    "hasPay": 55,
    "arrears": 0,
    "payMethodsArray": [{"displayName": "现金", "providerName": "CASH", "providerId": null, "config": {}}],
    "upLoadTag": [],
    "orderHasRefund": 255,
    "offLineTotalAmt": 0,
    "offLineRefund": [],
    "offLineOrderId": "",
    "RefundArray": [{
      "outId": "",
      "payId": "010003632018072601000117001",
      "paymentMethodId": "0000",
      "payMethodId": "CASH",
      "raw": "",
      "time": "20180726144231",
      "index": 1,
      "payMethodName": "现金支付",
      "hasReFund": true,
      "canBeRefund": 0,
      "hadRefundNum": 100,
      "partRefundNum": 100,
      "partRefund": "REFUNDSUCCESS",
      "PayOrderId": "",
      "refundResultType": false,
      "maxUserPut": 100,
      "value": 100
    }, {
      "outId": "",
      "payId": "010003632018072601000117002",
      "paymentMethodId": "0000",
      "payMethodId": "CASH",
      "raw": "",
      "time": "20180726144238",
      "index": 2,
      "payMethodName": "现金支付",
      "hasReFund": true,
      "canBeRefund": 0,
      "hadRefundNum": 100,
      "partRefundNum": 100,
      "partRefund": "REFUNDSUCCESS",
      "PayOrderId": "",
      "refundResultType": false,
      "maxUserPut": 100,
      "value": 100
    }, {
      "outId": "",
      "payId": "010003632018072601000117003",
      "paymentMethodId": "0000",
      "payMethodId": "CASH",
      "raw": "",
      "time": "20180726144240",
      "index": 3,
      "payMethodName": "现金支付",
      "hasReFund": true,
      "canBeRefund": 0,
      "hadRefundNum": 55,
      "partRefundNum": 55,
      "partRefund": "REFUNDSUCCESS",
      "PayOrderId": "",
      "refundResultType": false,
      "maxUserPut": 55,
      "value": 55
    }],
    "CrashChange": 0,
    "timestamp": "20180726144240",
    "startTime": "20180726144225",
    "reduceTime": "2018/07/26 14:43:24"
  };


  // 格式化退货单数据
  private formatReturnGoodInfo(params: any, reprint?: string) {

    let barCode = [];
    let storeInfo = [];
    let goods = [];
    let payment = [];
    let refundMethod = [];
    let orderNo = [];
    let tips = [];

    // 店铺信息
    let storeName = {
      storeInfoName: "商户名称",
      storeInfoValue: params['mallName']
    };
    let storeCode = {
      storeInfoName: "商户编号",
      storeInfoValue: params['mallId']
    };
    let sellerId = {
      storeInfoName: "收银员",
      storeInfoValue: params['userId']
    };

    //交易日期
    let date1 = params['timestamp'];

    let transDate =
      date1.substring(0, 4) + "/" +
      date1.substring(4, 6) + "/" +
      date1.substring(6, 8) + " " +
      date1.substring(8, 10) + ":" +
      date1.substring(10, 12) + ":" +
      date1.substring(12, 14) + " ";

    let transactionLog = {
      storeInfoName: "交易日期",
      storeInfoValue: transDate
    };

    storeInfo = [
      storeName, storeCode, sellerId, transactionLog
    ];

    // 商品信息
    for (const e of params['itemList']) {
      console.log(e);
      console.log(e['itemCode']);

      goods.push({
        goodCode: e['itemCode'],
        goodSum: e['quantity'],
        amount: e['price']
      })
    }

    // 退款方式
    for (const r of params['RefundArray']) {
      // console.log(e);
      // console.log(e['itemCode']);

      refundMethod.push({
        paymentMethod: r['payMethodName'],
        paymentAmount: r['hadRefundNum']
      })
    }

    // 订单 积分
    orderNo = [{
      orderInfoKey: "销售单号",
      orderInfoValue: params['orderId']
    }, {
      orderInfoKey: "贵宾卡号",
      orderInfoValue: params['vipCode']
    }, {
      orderInfoKey: "扣除积分",
      orderInfoValue: "--"
    }, {
      orderInfoKey: "退换积分",
      orderInfoValue: "--"
    }];


// 条形码
    barCode = [{
      barCodeTitle: params['refOrderId'],
      barCodeValue: params['refOrderId'],
    }];

    // 提示
    tips = [
      {tipsId: '温馨提示', article: "!"},
      {tipsId: '1', article: "根据相关法规，该交易不得开具发票"}
    ];

    return {
      reprint: (reprint == null || undefined) ? "" : reprint,
      storeInfo: storeInfo,
      barCode: barCode,
      goods: goods,
      payment: refundMethod,
      orderNo: orderNo,
      refundAmount: params['orderHasRefund'],
      totalAmount: params['totalAmt'],
      tips: tips
    }

  }

}
