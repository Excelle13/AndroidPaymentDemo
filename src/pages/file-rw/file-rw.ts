import {Component} from '@angular/core';
import {FileServiceProvider} from "../../providers/file-service/file-service";
import {FileTransfer, FileTransferObject} from "@ionic-native/file-transfer";
import {File} from "@ionic-native/file";
import {Http, RequestOptions} from "@angular/http";
import {Platform} from "ionic-angular";
import {CryptoDesUtilProvider} from "../../providers/crypto-des-util/crypto-des-util";
import {PayInvokeProvider} from "../../providers/pay-invoke/pay-invoke";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'page-file-rw',
  templateUrl: 'file-rw.html',
})
export class FileRwPage {
  allDir;
  createDirJson;
  createFileJson;
  deleteFileJson;
  createFileTestJson1;
  createFileTestJson2;
  writeFileTestJson1;
  writeFileTestJson2;


  encryptDecryptForm: FormGroup;
  decryptoTxt;
  encryptoTxt;

  cipherTxt="";
  plainTxt="";

  cipherTxtResult;
  plainTxtResult;

  fileTransfer: FileTransferObject = this.transfer.create();

  constructor(public fileService: FileServiceProvider,
              private transfer: FileTransfer,
              public http: Http,
              public platform: Platform,
              private fb: FormBuilder,
              private file: File,
              public crypto: CryptoDesUtilProvider,
              public payInvoke: PayInvokeProvider) {


    // this.cipherTxt = this.crypto.encrypt(this.plainTxt, 0);   // 加密
    // this.plainTxt = this.crypto.decrypt(this.cipherTxt, 0);   // 解密

    this.encryptDecryptForm = this.fb.group({
      plainTxt: ['', [Validators.minLength(1), Validators.required]],
      cipherTxt: ['', [Validators.minLength(1), Validators.maxLength(13), Validators.required]]
    });






    this.platform.ready().then(() => {

      this.allDir = `applicationDirectory=${this.file.applicationDirectory}\n
    applicationDirectory=${this.file.applicationDirectory}\n
    cacheDirectory=${this.file.cacheDirectory}\n
    dataDirectory=${this.file.dataDirectory}\n
    externalRootDirectory=${this.file.externalRootDirectory}\n
    externalApplicationStorageDirectory=${this.file.externalApplicationStorageDirectory}\n
    externalCacheDirectory=${this.file.externalCacheDirectory}\n
    externalDataDirectory=${this.file.externalDataDirectory}\n
    `;
    });


    // this.initFile();
    let temp = Boolean("true");
    console.log("typeof", typeof temp);
    console.log("typeof---", temp);

  }

  encrypt(){

    let plainTxt = this.encryptDecryptForm.controls['plainTxt'].value;

    console.log("encrypt---",this.encryptDecryptForm.controls['plainTxt'].value);
    if (plainTxt.length>0) {
      this.plainTxtResult = this.crypto.encrypt(this.encryptDecryptForm.controls['plainTxt'].value, 0);
      console.log("加密结果---", this.plainTxtResult);
    }
  }

  decrypt(){
    let cipherTxt = this.encryptDecryptForm.controls['cipherTxt'].value;
    console.log("decrypt---",this.encryptDecryptForm.controls['cipherTxt'].value);
    if (cipherTxt.length>0) {
      this.cipherTxtResult = this.crypto.decrypt(this.encryptDecryptForm.controls['cipherTxt'].value, 0);
      console.log("加密结果---", this.cipherTxtResult);
    }

  }

  ionViewDidLoad() {


    // this.focusHideAndShow();
    let temp = {
      txnType: "C",
      payType: "001",
      txnAmt: "000000000023",
      mallCode: "mallcode001",
      posNo: "pos001",
      tellerNo: "tellerNo0001",
      voucher: "23456787656"
    };


    // this.payInvoke.JLPayParamsFormat(temp);


    this.encryptoTxt = this.crypto.encrypt("hello", 0);   // 加密
    // this.crypto.decrypt("hello",0)
    // this.decryptoTxt = this.crypto.decrypt("+HlsxsK7MLE=", 0); // 解密
    // this.decryptoTxt = this.crypto.decrypt("pEuTCUlzTSCnJVmEs3xMEM2akGGnysqGEC1VVlZZN09iX2wkMJTYCgJCYX6e2+3OOa7XT7an26+r2CJMCiPGLg==", 0); // 解密
    // this.decryptoTxt = this.crypto.decrypt("pEuTCUlzTSDNOAbu5g0h0s2akGGnysqGEC1VVlZZN09iX2wkMJTYCgJCYX6e2+3OKcpIWJJwC4+Yrvjfref65A==", 0); // 解密
    this.decryptoTxt = this.crypto.decrypt("pEuTCUlzTSA4/Rnax/ALm82akGGnysqGEC1VVlZZN09iX2wkMJTYCgJCYX6e2+3Oq+2fElf/1ZyYrvjfref65A==", 0); // 解密

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

  uploadFile() {
    this.fileService.uploadFile();
  }

  download() {
    // this.fileService.download();

  }


  createFileTest() {
    this.fileService.createFile("TestCreateLog.txt").then((res) => {
      this.createFileTestJson1 = res
    }).catch((err) => {
      this.createFileTestJson1 = err;
    });
    this.fileService.createFile("TestCreateLog/TestCreateLog.txt").then((res) => {
      this.createFileTestJson2 = res
    }).catch((err) => {
      this.createFileTestJson2 = err;
    });


    // this.fileService.writeFile("TestWriteLog.txt", "TestWriteFileLog1").then((res) => {
    //   this.writeFileTestJson1 = res
    // }).catch((err) => {
    //   this.writeFileTestJson1 = err;
    // });

    this.fileService.createDir("TestWriteLog").then((res) => {

      this.fileService.writeFile("TestWriteLog", "TestWriteFileLog2.txt", "TestWriteFileLog1").then((res) => {
        this.writeFileTestJson2 = res
      }).catch((err) => {
        this.writeFileTestJson2 = err;
      });
    })


    // this.fileService.writeFile("TestLog.txt", "hellowsdfj");

  }

  focusPointFlag: boolean = false;
  focusPointInterval;
  timer;

  focusFlicker() {
    console.log("焦点离开0---");
      this.timer = setInterval(() => {
        this.focusPointFlag = !this.focusPointFlag;
      }, 500);

  }

  focusIn() {
    console.log("焦点laile");
  }

  focusVanish() {
    clearInterval(this.timer);
    setTimeout(() => {
      this.focusPointFlag = true;
      clearInterval(this.timer);
      // let focusB = document.getElementById("focusB");
      // let focusT = document.getElementById("focusT").setAttribute("[hidden]", "true");
      // focusB.removeChild(focusT);
    }, 600);
    console.log("焦点离开");
    this.focusPointFlag = true;
  }

}
