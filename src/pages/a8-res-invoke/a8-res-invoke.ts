import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PrinterServiceProvider} from "../../providers/printer-service/printer-service";
import {LogServiceProvider} from "../../providers/log-service/log-service";
import {NotifyServiceProvider} from "../../providers/notify-service/notify-service";

declare let cordova: any;

/**
 * Generated class for the A8ResInvokePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-a8-res-invoke',
  templateUrl: 'a8-res-invoke.html',
})
export class A8ResInvokePage {
  printStatus;

  testNum;

  saleSmallSummaryParams = {
    reprint: "",
    storeInfo: [
      {
        storeInfoName: "店铺编号",
        storeInfoValue: "深圳万象城",
      },
      {
        storeInfoName: "店铺名称",
        storeInfoValue: "HJKHJKJJHKHJ",
      }, {
        storeInfoName: "收银员",
        storeInfoValue: "Admin(01)",
      }, {
        storeInfoName: "交易日期",
        storeInfoValue: "2018/06/13",
      }
    ],
    bill: [
      {
        billType: "销售订单",
        billSum: "120",
        billAmount: "40 000.00"
      }, {
        billType: "当日撤销订单",
        billSum: "10",
        billAmount: "15 000.00"

      }, {
        billType: "强制退货",
        billSum: "1",
        billAmount: "1000.00"

      },
    ],
    billTotal: "34000.44",
    payment: [
      {
        paymentMethod: "银行卡",
        paymentSum: "100",
        paymentAmount: "170 000.00"
      }, {
        paymentMethod: "预付卡",
        paymentSum: "30",
        paymentAmount: "100 000.00"
      }, {
        paymentMethod: "微信",
        paymentSum: "13",
        paymentAmount: "20 000.00"
      },

    ],
    paymentTotal: "230000.39"
  };

  saleSummaryParams = {
    storeInfo: [
      {
        storeInfoName: "店铺编号",
        storeInfoValue: "M02L3HM123",
      },
      {
        storeInfoName: "店铺名称",
        storeInfoValue: "H&M",
      }, {
        storeInfoName: "收银员",
        storeInfoValue: "Admin(01)",
      }, {
        storeInfoName: "收银机号",
        storeInfoValue: "01",
      }, {
        storeInfoName: "交易日期",
        storeInfoValue: "2018/06/13",
      }
    ],
    saleSummaries: [
      {
        billMachine: "02(销售总结)",
        bill: [
          {
            billType: "销售订单",
            billSum: "120",
            billAmount: "40 000.00"
          }, {
            billType: "当日撤销订单",
            billSum: "10",
            billAmount: "15 000.00"

          }, {
            billType: "强制退货",
            billSum: "1",
            billAmount: "1000.00"

          }, {
            billType: "隔日联机退货订单",
            billSum: "1",
            billAmount: "1000.00"

          }
        ],
        billTotal: "34000.44",
        payment: [
          {
            paymentMethod: "银行卡",
            paymentSum: "100",
            paymentAmount: "170 000.00"
          },
          {
            paymentMethod: "预付卡",
            paymentSum: "30",
            paymentAmount: "100 000.00"
          },
          {
            paymentMethod: "微信",
            paymentSum: "3",
            paymentAmount: "8 000.00"
          },
          {
            paymentMethod: "团购券",
            paymentSum: "6",
            paymentAmount: "120 000.00"
          },
          {
            paymentMethod: "抵用券",
            paymentSum: "4",
            paymentAmount: "20 300.00"
          },
          {
            paymentMethod: "现金",
            paymentSum: "1",
            paymentAmount: "1 000.00"
          }
        ],
        paymentTotal: "230000.39"
      },
      {
        billMachine: "02(销售总结)",
        bill: [
          {
            billType: "销售订单",
            billSum: "120",
            billAmount: "40 000.00"
          }, {
            billType: "当日撤销订单",
            billSum: "10",
            billAmount: "15 000.00"

          }, {
            billType: "强制退货",
            billSum: "1",
            billAmount: "1000.00"

          }
        ],
        billTotal: "34000.44",
        payment: [
          {
            paymentMethod: "银行卡",
            paymentSum: "100",
            paymentAmount: "170 000.00"
          },
          {
            paymentMethod: "预付卡",
            paymentSum: "30",
            paymentAmount: "100 000.00"
          },
          {
            paymentMethod: "微信",
            paymentSum: "13",
            paymentAmount: "20 000.00"
          }
        ],
        paymentTotal: "230000.39"
      },
    ]
  };

  salesParams = {
    barCode: [
      {
        barCodeTitle: "1238 9890 7890 0972 6152 8",
        barCodeValue: "123898907890097261528",
      }],
    storeInfo: [
      {
        storeInfoName: "商户名称",
        storeInfoValue: "H&M",
      },
      {
        storeInfoName: "商户编号",
        storeInfoValue: "M02L3HM123",
      },
      {
        storeInfoName: "交易日期",
        storeInfoValue: "2018/06/13 19:10:01",
      }

    ],
    goods: [
      {
        goodCode: "HM01ALL00N01",
        goodSum: "1",
        amount: "900932 989.00"
      }, {
        goodCode: "HM01ALL00N91",
        goodSum: "2",
        amount: "32 989.00"
      }
    ],
    money: [
      {
        moneyType: "优惠金额",
        montySum: "-￥ 300.00"
      }, {
        moneyType: "折扣券",
        montySum: "-￥ 100.00"
      }, {
        moneyType: "积分抵用券",
        montySum: "-￥ 200.00"
      }, {
        moneyType: "合计",
        montySum: "￥ 900,935,007.00"
      }, {
        moneyType: "实收金额",
        montySum: "￥ 900,935,007.00"
      }, {
        moneyType: "找零金额",
        montySum: "-￥ 0.00"
      }
    ],
    payment: [
      {
        paymentMethod: "银行卡",
        paymentAmount: "170 000.00"
      }, {
        paymentMethod: "预付卡",
        paymentAmount: "100 000.00"
      }, {
        paymentMethod: "微信",
        paymentAmount: "20 000.00"
      }, {
        paymentMethod: "现金",
        paymentAmount: "2 000.00"
      },

    ],
    vip: [
      {
        vipInfo: "贵宾卡号",
        vpiValue: "2738******0987"
      }, {
        vipInfo: "本次积分",
        vpiValue: "900935077"
      }, {
        vipInfo: "贵宾卡号",
        vpiValue: "2000"
      }
    ],
    arCode: [{qrValue: "sunny说很多信息都要放这里", qrTitle: "扫二维码自动积分"}],
    tips: [
      {tipsId: '1', article: "请出示有效小票，并于购买日起14日内进行换货"},
      {tipsId: '2', article: "请出示有效小票，并于购买日起14日内进行换货，请出示有效小票，并于购买日起14日内进行换货"},
      {tipsId: '3', article: "请出示有效小票，并于购买日起14日内进行换货"},
      {tipsId: '4', article: "H&M保留最终决定权"}
    ],
    saleSlipLists: [
      {
        salesSlipType: "支付宝签购单",
        salesSlip: [
          {
            salesSlipKey: "外部订单",
            salesSlipValue: "698718238688172378772"
          }, {
            salesSlipKey: "交易流水",
            salesSlipValue: "1636127782456172938716"
          }, {
            salesSlipKey: "原流水",
            salesSlipValue: "POS001"
          }, {
            salesSlipKey: "交易类型",
            salesSlipValue: "销售"
          }, {
            salesSlipKey: "交易金额",
            salesSlipValue: "￥ 300,00"
          }, {
            salesSlipKey: "交易时间",
            salesSlipValue: "2018/06/13 11:10:22"
          }, {
            salesSlipKey: "买家ID",
            salesSlipValue: "133*****02"
          }

        ]
      },
      {
        salesSlipType: "微信签购单",
        salesSlip: [
          {
            salesSlipKey: "外部订单",
            salesSlipValue: "698718238688172378772"
          }, {
            salesSlipKey: "交易流水",
            salesSlipValue: "1636127782456172938716"
          }, {
            salesSlipKey: "原流水",
            salesSlipValue: "POS001"
          }, {
            salesSlipKey: "交易类型",
            salesSlipValue: "销售"
          }, {
            salesSlipKey: "交易金额",
            salesSlipValue: "￥ 300,00"
          }, {
            salesSlipKey: "交易时间",
            salesSlipValue: "2018/06/13 11:10:22"
          }, {
            salesSlipKey: "买家ID",
            salesSlipValue: "133*****02"
          }

        ]
      }
    ]
  };

  reprintSmallSummaryParams = {
    "type": "SALE",
    "uuid": "44e5fb7c587991d83006ead5d3c61ece",
    "mallId": "0202A003",
    "mallNmme": "深圳万象城",
    "orderId": "010000122018071203000204",
    "userId": "0202a003b1080101",
    "vipCode": "",
    "vipName": "--",
    "vipInfo": {"name": "--", "gender": "--", "level": "--", "memberNumber": "", "point": 0},
    "itemList": [{
      "price": 22,
      "inCage": true,
      "quantity": 1,
      "index": 1,
      "total": 0,
      "indexCode": 1,
      "paymentMethod": null,
      "partRefundGood": 0,
      "itemCode": "B10801HE0000",
      "itemName": "金燕庄",
      "keyboard": null
    }],
    "payList": [{
      "outId": "",
      "payId": "010000122018071203000204001",
      "paymentMethodId": "0000",
      "payMethodId": "CASH",
      "raw": "",
      "time": "2018-07-12 19:20",
      "index": 1,
      "payMethodName": "现金支付",
      "hasReFund": false,
      "canBeRefund": 22,
      "hadRefundNum": 0,
      "partRefundNum": 0,
      "partRefund": "NOREFUND",
      "CrashChange": 0,
      "PayOrderId": "",
      "refundResultType": false,
      "maxUserPut": 0,
      "value": 22
    }],
    "statusText": "已完成",
    "refOrderId": "",
    "totalAmt": 22,
    "totalQuantity": 1,
    "putin_price_num": 0,
    "hasPay": 22,
    "arrears": 0,
    "payMethodsArray": [{
      "displayName": "银行卡",
      "providerName": "嘉利",
      "providerId": null,
      "config": {}
    }, {"displayName": "银行卡", "providerName": "银石", "providerId": null, "config": {}}, {
      "displayName": "扫码支付",
      "providerName": "TTPAY",
      "providerId": null,
      "config": {}
    }, {"displayName": "现金", "providerName": "CASH", "providerId": null, "config": {}}],
    "upLoadTag": [],
    "orderHasRefund": 0,
    "offLineTotalAmt": 0,
    "offLineRefund": [],
    "offLineOrderId": "",
    "RefundArray": [],
    "timestamp": "2018-07-12T11:21:00.019Z",
    "startTime": "20180712192064"
  };
  salesReportParams = {
    reprint: "重印",
    storeInfo: [
      {
        storeInfoName: "商户名称",
        storeInfoValue: "H&M",
      },
      {
        storeInfoName: "商户编号",
        storeInfoValue: "M02L3HM123",
      },
      {
        storeInfoName: "交易日期",
        storeInfoValue: "2018/06/13 19:10:01",
      }

    ],
    payment: [
      {
        paymentMethod: "银行卡",
        paymentSum: "100",
        paymentAmount: "170 000.00"
      },
      {
        paymentMethod: "预付卡",
        paymentSum: "30",
        paymentAmount: "100 000.00"
      },
      {
        paymentMethod: "微信",
        paymentSum: "13",
        paymentAmount: "20 000.00"
      },
      {
        paymentMethod: "现金",
        paymentSum: "13",
        paymentAmount: "2 000.00"
      }

    ],
    paymentTotal: "230000.39"
  };
  bankSalesSlipParams = {
    salesSlipType: "银行卡",
    salesSlip: [
      {
        salesSlipKey: "商户名称",
        salesSlipValue: "深圳万象城"
      }, {
        salesSlipKey: "商户号",
        salesSlipValue: "1000020004040"
      }, {
        salesSlipKey: "终端号",
        salesSlipValue: "POS001"
      }, {
        salesSlipKey: "机台号",
        salesSlipValue: "tillor001"
      }, {
        salesSlipKey: "卡号",
        salesSlipValue: "81877871278218767"
      }, {
        salesSlipKey: "卡有效期",
        salesSlipValue: "12/20"
      }, {
        salesSlipKey: "发行卡号",
        salesSlipValue: "34567897654656765"
      }, {
        salesSlipKey: "收单行号",
        salesSlipValue: "12345678902345678"
      }, {
        salesSlipKey: "交易类型",
        salesSlipValue: "消费"
      }, {
        salesSlipKey: "批次号",
        salesSlipValue: "000001"
      }, {
        salesSlipKey: "授权码",
        salesSlipValue: "123456"
      }, {
        salesSlipKey: "凭证码",
        salesSlipValue: "23468987546"
      }, {
        salesSlipKey: "日期时间",
        salesSlipValue: "2018/07/26 09:18"
      }, {
        salesSlipKey: "交易参考号",
        salesSlipValue: "12345678"
      }, {
        salesSlipKey: "金额",
        salesSlipValue: "RMB 400,000元"
      }
    ]

  };
  returnGoodParams = {
    reprint: "重印",

    storeInfo: [
      {
        storeInfoName: "商户名称",
        storeInfoValue: "H&M",
      },
      {
        storeInfoName: "商户编号",
        storeInfoValue: "M02L3HM123",
      },
      {
        storeInfoName: "交易日期",
        storeInfoValue: "2018/06/13 19:10:01",
      }

    ],

    barCode: [
      {
        barCodeTitle: "1238 9890 7890 0972 6152 8",
        barCodeValue: "123898907890097261528",
      }],
    goods: [
      {
        goodCode: "HM01ALL00N01",
        goodSum: "1",
        amount: "900932 989.00"
      }, {
        goodCode: "HM01ALL00N91",
        goodSum: "2",
        amount: "32 989.00"
      }
    ],
    payment: [
      {
        paymentMethod: "银行卡",
        paymentAmount: "170 000.00"
      }, {
        paymentMethod: "预付卡",
        paymentAmount: "100 000.00"
      }, {
        paymentMethod: "微信",
        paymentAmount: "20 000.00"
      }, {
        paymentMethod: "现金",
        paymentAmount: "2 000.00"
      },
    ],
    orderNo: [
      {
        orderInfoKey: "销售单号",
        orderInfoValue: "1238 9090 2348 5647 2349 8"
      }, {
        orderInfoKey: "销售单号",
        orderInfoValue: "2378******0978"
      }, {
        orderInfoKey: "扣除积分",
        orderInfoValue: "-900935077"
      }, {
        orderInfoKey: "退换积分",
        orderInfoValue: "2000"
      }
    ],
    refundAmount: "100,234,000",
    totalAmount: "100,234,000",
    tips: [
      {tipsId: '温馨提示', article: "!"},
      {tipsId: '2', article: "根据相关法规，该交易不得开具发票"}
    ]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public printService: PrinterServiceProvider,
              public logService: LogServiceProvider,
              public notifyService: NotifyServiceProvider) {
    this.notifyService.notify().subscribe((data) => {
      console.log("a8resInvoke Page--", data);
    })
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad A8ResInvokePage');
    // this.logService.logError("a8resinvoke", "进入18resINvoke component");
    // this.logService.logDebug("a8resinvoke", "进入18resINvoke component");
    //
    // cordova.plugins.A8ResPlugin.coolMethod("hello A8 i am coming", (res) => {
    //   alert(res)
    // }, (err) => {
    //   alert(err);
    // });


    /*  const temp = {
        Alipay: '支付宝',
        Wechat: "微信"
      };

      for (const i in temp) {
        console.log("拿到key---", i);
        console.log("拿到value---", temp[i]);
      }*/
  }

  frontCamera() {
    cordova.plugins.A8ResPlugin.coolMethod("hello big brother", (res) => {
      this.printStatus = res;
    }, (err) => {
      this.printStatus = err;
    });

  }

  printSalesTiket() {
    this.logService.logInfo("tag", "dfjs");
    this.printService.printSalesTicket(this.salesParams).subscribe((res) => {
      this.printStatus = res;
    }, err => {
      this.printStatus = err;
    });
  }

  printSalesSummaryTiket() {
    this.printService.printSalesSummaryTicket(this.saleSummaryParams).subscribe((res) => {
      console.log("test----", res);
      this.printStatus = res;
    }, err => {
      this.printStatus = err;
      console.log("err----", err);
    });
  }

  printSalesSmallSummaryTiket() {
    this.printService.printSalesSmallSummaryTicket(this.saleSmallSummaryParams).subscribe((res) => {
      this.printStatus = res;
    }, err => {
      this.printStatus = err;
    });
  }

  reprintSalesSmallSummaryTiket() {
    this.printService.printSalesTicket(this.formatSalesPrintInfo(this.reprintSmallSummaryParams, "重印")).subscribe((res) => {
      this.printStatus = res;
    }, err => {
      this.printStatus = err;
    });

  }

  printSalesReport() {
    this.printService.printSalesReportTicket(this.salesReportParams).subscribe((res) => {
      this.printStatus = res;
      this.printService.printSuccessAlert(res, "打印销售报表")
    }, err => {
      this.printStatus = err;
      this.printService.printFailedAlert(err, "打印销售报表")
    });
  }

  printReturnGood() {

    this.printService.printReturnGoodTicket(this.returnGoodParams).subscribe((res) => {
      this.printStatus = res;
    }, err => {
      this.printStatus = err;
    });
  }

  printSalesSlip() {
    this.printService.printSalesSlipTicket(this.bankSalesSlipParams).subscribe((res) => {
      console.log("printBankSalesSlipTicket", res);
      this.printStatus = res;
    }, err => {
      console.log("printBankSalesSlipTicket", err);
      this.printStatus = err;
    });
  }

  testCoolMethod() {
    /* this.printService.testCoolMethod("hahahha").subscribe((res) => {

       this.printStatus = res;
     }, err => {


       this.printStatus = err;
     });*/

    // this.
  }


  private formatSalesPrintInfo(params: any, reprint?: string) {

    console.log("reprint----", reprint);


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

    return {
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

}
