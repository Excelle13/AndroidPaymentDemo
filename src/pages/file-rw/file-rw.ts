import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {File} from "@ionic-native/file";


@Component({
  selector: 'page-file-rw',
  templateUrl: 'file-rw.html',
})
export class FileRwPage implements OnInit {

  txt: string;
  readText;
  writeText;
  createDirStatus;
  allDir;

  checkFileStatus;
  fileDir: string;
  fileName: string = "cipher.txt";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public file: File) {
    this.fileDir = this.file.externalRootDirectory + "A8ActiveInfo/";
  }

  ionViewDidLoad() {

    this.file.checkFile(this.fileDir, this.fileName).then(res => {
      this.checkFileStatus = res;
    }).catch(err => {
      this.createDirStatus = err;
    });

    console.log('ionViewDidLoad FileRwPage');
    this.file.checkDir(this.file.dataDirectory, 'mydir')
      .then(_ => console.log('Directory exists'))
      .catch(err => console.log('Directory doesn\'t exist'));
  }


  checkFile() {

    return this.file.checkFile(this.fileDir, this.fileName);

  }


  // 保存文件
  saveFile(content: string) {

    //检查文件是否存在
    this.checkFile().then((res) => {
      this.checkFileStatus = res;

      // 若存在，进行写入操作，以往数据将会被替换
      this.writeFile(this.txt).then((res) => {
        // console.log(res);
        this.writeText = res;
      }).catch(err => {
        // console.log(err);
        this.writeText = err;
      });

    }).catch((err) => {

      // 文件不存在将进行创建操作
      this.createFileDir().then((res) => {

        this.createDirStatus = res;
      }).catch(err => {

        this.createDirStatus = err;

      });

      this.checkFileStatus = err;
    });


  }

  writeFile(content: string) {
    return this.file.writeFile(this.fileDir, this.fileName, content, {replace: true})
  }

  readFile() {

    this.checkFile().then(
      (res) => {

        this.createDirStatus = res;

        this.file.readAsText(this.fileDir, this.fileName)
          .then(res => {
            this.readText = res;
          }).catch(err => {
          this.readText = err;
        })
      }
    ).catch(err => {
      //TODO 文件找不到
      this.createDirStatus = err;
    });

  }

  createFileDir() {
    // this.allDir = `applicationDirectory=${this.file.applicationDirectory}
    // applicationDirectory=${this.file.applicationDirectory}
    // cacheDirectory=${this.file.cacheDirectory}
    // dataDirectory=${this.file.dataDirectory}
    // externalRootDirectory=${this.file.externalRootDirectory}
    // externalApplicationStorageDirectory=${this.file.externalApplicationStorageDirectory}
    // externalCacheDirectory=${this.file.externalCacheDirectory}
    // externalDataDirectory=${this.file.externalDataDirectory}
    // `;

    return this.file.createFile(this.fileDir, this.fileName, true);
  }

  ngOnInit(): void {
  }

  getFileList() {
    this.file.listDir(this.file.externalRootDirectory, "CRLANDIPOSLog/log").then((date => {
      this.allDir = date;
    })).catch((err) => {
      this.allDir = err;
    })
  }

}
