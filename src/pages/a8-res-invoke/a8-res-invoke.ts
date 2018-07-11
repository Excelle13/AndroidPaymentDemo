import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PrinterServiceProvider} from "../../providers/printer-service/printer-service";
import {LogServiceProvider} from "../../providers/log-service/log-service";

declare let cordova: any;

/**
 * Generated class for the A8ResInvokePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-a8-res-invoke',
  templateUrl: 'a8-res-invoke.html',
})
export class A8ResInvokePage {
  printStatus;

  saleSmallSummaryParams = {
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
    ]

  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public printService: PrinterServiceProvider,
              public logService: LogServiceProvider) {
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

  frontCamera(){
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

}


interface SaleSummary {
  storeInfo: StoreInfoDetail[];
  bill: Bill[];
  payment: Payment[];
}

interface StoreInfoDetail {
  storeInfoType,
  storeInfoValue,
}

interface Bill {
  billType,
  billSum,
  billAmount,
}

interface Payment {

  paymentMethod,
  paymentSum,
  paymentAmount,

}
