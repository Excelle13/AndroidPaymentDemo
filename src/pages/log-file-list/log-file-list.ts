import {Component} from '@angular/core';
import {AlertController, ModalController, NavController, NavParams} from 'ionic-angular';
import {File} from "@ionic-native/file";
import {LogServiceProvider} from "../../providers/log-service/log-service";
import {ShowLogPage} from "../show-log/show-log";
import {FileServiceProvider} from "../../providers/file-service/file-service";

/**
 * Generated class for the LogFileListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-log-file-list',
  templateUrl: 'log-file-list.html',
})
export class LogFileListPage {


  allFileName;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public file: File,
              public alertCtrl: AlertController,
              public logService: LogServiceProvider,
              public fileService: FileServiceProvider,
              public modalCtrl: ModalController,
  ) {
  }

  logDir = "CRLANDIPOSLog/log";
  allDir = [];
  logData;
  testNum;

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogFileListPage');
    this.getFileList();
  }


  getFileList() {

    // filesystem: FileSystem
    // fullPath: "/CRLANDIPOSLog/log/2018-7-15.txt"
    // isDirectory: false
    // isFile: true
    // name: "2018-7-15.txt"
    // nativeURL: "file:///storage/emulated/0/CRLANDIPOSLog/log/2018-7-15.txt"

    this.fileService.getFileList().then((data)=> {
      console.log("文件", data);
      // this.logData = data;
      for (const fileName of data) {
        this.allDir.push(fileName['name']);
      }
    }).catch(err => {
      this.logData = err;

    });

  }


  selectFile(fileName: string) {
    this.navCtrl.push(ShowLogPage, {fileName: fileName});
  }


  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

}
