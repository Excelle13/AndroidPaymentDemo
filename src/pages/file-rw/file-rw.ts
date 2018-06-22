import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {File} from "@ionic-native/file";


@Component({
  selector: 'page-file-rw',
  templateUrl: 'file-rw.html',
})
export class FileRwPage {

  txt:string;
  readText;
  writeText;
  createDirStatus;

  allDir;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public file: File) {


    this.allDir=`applicationDirectory=${this.file.applicationDirectory}
    applicationDirectory=${this.file.applicationDirectory}
    cacheDirectory=${this.file.cacheDirectory}
    dataDirectory=${this.file.dataDirectory}
    externalRootDirectory=${this.file.externalRootDirectory}
    externalApplicationStorageDirectory=${this.file.externalApplicationStorageDirectory}
    externalCacheDirectory=${this.file.externalCacheDirectory}
    externalDataDirectory=${this.file.externalDataDirectory}
    `

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FileRwPage');


    this.file.checkDir(this.file.dataDirectory, 'mydir')
      .then(_ => console.log('Directory exists'))
      .catch(err => console.log('Directory doesn\'t exist'));


  }


  saveFile() {
    let str = "hello,world! " + this.txt;
    console.log("要保存的文本为--》", str);
    this.file.writeFile(this.file.externalRootDirectory, "text.txt", str, {replace: true}).then((res) => {
      console.log(res);
      this.writeText = res;
    }).catch(err => {
      console.log(err);
      this.writeText = err;
    });
  }

  readFile() {

    this.file.readAsText(this.file.externalRootDirectory, "text.txt").then(res => {
      this.readText = res;
    }).catch(err => {
      this.readText = err;
    })
  }

  createFileDir(){
    this.allDir=`applicationDirectory=${this.file.applicationDirectory}
    applicationDirectory=${this.file.applicationDirectory}
    cacheDirectory=${this.file.cacheDirectory}
    dataDirectory=${this.file.dataDirectory}
    externalRootDirectory=${this.file.externalRootDirectory}
    externalApplicationStorageDirectory=${this.file.externalApplicationStorageDirectory}
    externalCacheDirectory=${this.file.externalCacheDirectory}
    externalDataDirectory=${this.file.externalDataDirectory}
    `

    this.file.createDir(this.file.externalRootDirectory, "tempTxt", true).then(
      res=>{
        this.createDirStatus = res;
      }
    ).catch(err=>{
      this.createDirStatus = err
    })
  }

}
