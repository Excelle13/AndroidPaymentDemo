import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

// declare const KioskPlugin: any;

/**
 * Generated class for the LockAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lock-app',
  templateUrl: 'lock-app.html',
})
export class LockAppPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LockAppPage');
  }

  exitKioskMode() {
    // KioskPlugin.exitKiosk();
    // console.log("exitKioskMode");
    // alert("退出exitKioskMode");
  }

  isInKioskMode() {
    // KioskPlugin.isInKiosk((isInKiosk) => {
    //   console.log("isInKiosk", isInKiosk);
    //   alert(isInKiosk);
    // });
  }



}
