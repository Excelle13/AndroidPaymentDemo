import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {File} from "@ionic-native/file";
import {FileServiceProvider} from "../../providers/file-service/file-service";

/**
 * Generated class for the ShowLogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-show-log',
  templateUrl: 'show-log.html',
})
export class ShowLogPage {

  logData;
  fileName;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public file: File,
              public params: NavParams,
              public fileService: FileServiceProvider) {
    this.fileName = params.data.fileName;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowLogPage');
    this.openFile();
  }

  openFile(){
    this.fileService.openFile(this.fileName).then((data)=>{
      this.logData = data;
    }).catch(err=>{
      this.logData = err;
    })

  }

}
