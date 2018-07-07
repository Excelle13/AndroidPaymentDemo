import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {Device} from "@ionic-native/device";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cordova;
  model;
  platform1;
  uuid;
  manufacturer;
  isVirtual;
  serial;

  constructor(public navCtrl: NavController,
              public device: Device,
              private platform: Platform,
              public http: HttpClient) {

    // this.test();

    this.platform.ready().then(() => {
      this.cordova = this.device.cordova;
      this.model = this.device.model;
      this.platform1 = this.device.platform;
      this.uuid = this.device.uuid;
      this.manufacturer = this.device.manufacturer;
      this.isVirtual = this.device.isVirtual;
      this.serial = this.device.serial;
    });
  }


  test(get: Function) {
    let flag: any = "12";
    this.http.get("http://lab.ttooc.xyz/device/api/get-code-list").subscribe((data) => {

      flag = data;

      console.log(flag);

    });

    console.log(flag);
    return flag;

  }

}
