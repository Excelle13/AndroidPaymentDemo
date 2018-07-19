import {Component} from '@angular/core';
import {FileServiceProvider} from "../../providers/file-service/file-service";
import {FileTransfer, FileTransferObject, FileUploadOptions} from "@ionic-native/file-transfer";
import {File} from "@ionic-native/file";


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

  initFile() {
    this.fileService.initFile().then((data) => {
      this.createFileJson = data;
      console.log(data);
    })
  }

  download(){
    this.fileService.download();
  }
}
