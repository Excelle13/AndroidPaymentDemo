import {Component} from '@angular/core';
import {FileServiceProvider} from "../../providers/file-service/file-service";
import {FileTransfer, FileTransferObject} from "@ionic-native/file-transfer";
import {File} from "@ionic-native/file";
import {Http, RequestOptions} from "@angular/http";


@Component({
  selector: 'page-file-rw',
  templateUrl: 'file-rw.html',
})
export class FileRwPage {
  allDir;
  createDirJson;
  createFileJson;
  deleteFileJson;

  fileTransfer: FileTransferObject = this.transfer.create();

  constructor(public fileService: FileServiceProvider,
              private transfer: FileTransfer,
              public http: Http,
              private file: File) {

    this.allDir = `applicationDirectory=${this.file.applicationDirectory}\n
    applicationDirectory=${this.file.applicationDirectory}\n
    cacheDirectory=${this.file.cacheDirectory}\n
    dataDirectory=${this.file.dataDirectory}\n
    externalRootDirectory=${this.file.externalRootDirectory}\n
    externalApplicationStorageDirectory=${this.file.externalApplicationStorageDirectory}\n
    externalCacheDirectory=${this.file.externalCacheDirectory}\n
    externalDataDirectory=${this.file.externalDataDirectory}\n
    `;

    // this.initFile();
    let temp = Boolean("true");
    console.log("typeof", typeof temp);
    console.log("typeof---", temp);

  }

  ionViewDidLoad() {

  }

  testDelete() {

    const deleteDate = {
      "id": "5",
      "itemCode": "null",
      "projectNo": "12345",
      "shopNumber": "null"
    };


    // headers: {"Content-Type": "application/json"},
    // body: deleteDate
    this.http.delete("http://193.112.239.236:60443/erp/api/delete-pay-keyboard", new RequestOptions({
      body: deleteDate
    })).map(res => res.json()).subscribe((data) => {
      console.log("deletedata--", data);
    }, error1 => console.log("delete err", error1));
  }


  initFile() {
    this.fileService.initFile().then((data) => {
      this.createFileJson = data;
      console.log(data);
    })
  }

  uploadFile(){
    this.fileService.uploadFile();
  }

  download() {
    // this.fileService.download();


  }
}
