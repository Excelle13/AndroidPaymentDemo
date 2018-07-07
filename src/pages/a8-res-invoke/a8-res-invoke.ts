import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad A8ResInvokePage');
    //
    // cordova.plugins.A8ResPlugin.coolMethod("hello A8 i am coming", (res) => {
    //   alert(res)
    // }, (err) => {
    //   alert(err);
    // });
  }

  addLog() {
    cordova.plugins.A8ResPlugin.coolMethod({name:'zhaobo',age:'12'}, (res) => {
      alert(res)
    }, (err) => {
      alert(err);
    });

  }

}
