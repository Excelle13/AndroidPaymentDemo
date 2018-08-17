import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";

declare let cordova: any;

@Component({
  selector: 'page-a8printer',
  templateUrl: 'a8printer.html',
})
export class A8printerPage {

  barCodedata;

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad A8printerPage');
  }

  scanBarcode() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.barCodedata = barcodeData;
    }).catch(err => {
      console.log('Error', err);
      this.barCodedata = err;
    });
  }

  printStatus;

  testPlugin() {
//      AscScale       AscSize       HzScale     HzSize
//       SC1x1         DOT16x8         SC1x1     DOT16x16
//       SC1x2         DOT24x12        SC1x2     DOT24x16
//       SC1x3         DOT24x8         SC1x3     DOT24x24
//       SC2x1         DOT32x12        SC2x1     DOT32x24
//       SC2x1SP       DOT5x7          SC2x2
//       SC2x2         DOT7x7          SC2x3
//       SC2x3                         SC3x1
//       SC3x1                         SC3x2
//       SC3x2                         SC3x3

    // 设置字间距大小
    //mXSpace - 0~24

    // 设置行间距大小
    // mYSpace - 0~60


    let temp = {
      "img": {imgSrc: "mixc.bmp", imgOffset: 0},
      // img2: {imgSrc: "mixc.bmp", imgOffset: 0},
      // img3: {imgSrc: "mixc.bmp", imgOffset: 0},
      // img4: {imgSrc: "mixc.bmp", imgOffset: 0},
      // img5: {imgSrc: "mixc.bmp", imgOffset: 0},
      // img6: {imgSrc: "mixc.bmp", imgOffset: 0},
      title: {
        titleTxt: "销售单",
        titleAlign: "center",
        spaceXY: {spaceX: "5", spaceY: "3"},
        fontFormat: {
          hzFormat: {hzScale: "SC1x1", hzSize: "DOT24x24"},
          ascFormat: {ascScale: "SC1x1", ascSize: "DOT24x12"}
        }
      },
      title2: {
        titleTxt: "重印",
        titleAlign: "center",
        spaceXY: {spaceX: "5", spaceY: "3"},
        fontFormat: {
          hzFormat: {hzScale: "SC1x1", hzSize: "DOT32x24"},
          ascFormat: {ascScale: "SC1x1", ascSize: "DOT24x12"}
        }
      },
      splitLine: {style: "", feedLine: 0},
      // cuteLine: {style: "", feedLine: 0},
      content: [
        {
          params: {param1: "商品名称", param2: "深圳万象城"},
          spacing: {spacing1: "-15", spacing2: ""},
          spaceXY: {spaceX: "1", spaceY: "2"},
          fontFormat: {
            hzFormat: {hzScale: "SC1x1", hzSize: "DOT24x24"},
            ascFormat: {ascScale: "SC1x1", ascSize: "DOT24x12"}
          }
        }, {
          params: {param1: "商品名称", param2: "深圳万象城"},
          spacing: {spacing1: "-15", spacing2: ""},
          spaceXY: {spaceX: "1", spaceY: "2"},
          fontFormat: {
            hzFormat: {hzScale: "SC1x1", hzSize: "DOT24x24"},
            ascFormat: {ascScale: "SC1x1", ascSize: "DOT24x12"}
          }
        }, {
          params: {param1: "商品名称", param2: "深圳万象城"},
          spacing: {spacing1: "-15", spacing2: ""},
          spaceXY: {spaceX: "1", spaceY: "2"},
          fontFormat: {
            hzFormat: {hzScale: "SC1x1", hzSize: "DOT24x24"},
            ascFormat: {ascScale: "SC1x1", ascSize: "DOT24x12"}
          }
        },
      ],
      cutLine: {style: "", feedLine: 0},
      // barCode: "12312458978787523",
      // qrCode: {qrcode:"iwuriwiweir",qrCodeOffset:0, qrCodeImgHeight: 300},

    };
    cordova.plugins.A8Printer.coolMethod(temp, (res) => {
      this.printStatus = res;
      console.log("res--",res);
    }, (err) => {
      this.printStatus = err;
      console.log("err--",err);
    })

  }

}
