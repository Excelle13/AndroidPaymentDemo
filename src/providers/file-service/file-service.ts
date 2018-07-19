import {Injectable} from '@angular/core';
import {File} from "@ionic-native/file";
import {Platform} from "ionic-angular";
// import {FileTransfer, FileTransferObject, FileUploadOptions} from "@ionic-native/file-transfer";
import {LogServiceProvider} from "../log-service/log-service";

/*
  Generated class for the FileServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FileServiceProvider {

  rootDir: string;  // 文件根路径
  logDir = "CRLANDIPOSLog/log"; // 日志文件路径
  fileName: string = "cipher.txt"; // 加密文件名
  dirName: string = "A8ActiveInfo"; // 加密文件的路径

  // fileTransfer: FileTransferObject = this.transfer.create();

  constructor(
    public file: File,
    public platform: Platform,
    // private transfer: FileTransfer,
    public  logService: LogServiceProvider) {
    // this.platform.ready().then(() => {
    this.rootDir = this.file.externalRootDirectory;
    // });
  }


  createDir(dirName: string) {
    return this.file.createDir(this.rootDir, dirName, true);
  }

  createFile(fileName: string) {
    return this.file.createFile(this.rootDir, fileName, true);
  }

  checkDir(dirName: string) {
    return this.file.checkDir(this.rootDir, dirName);
  }

  checkFile(fileName: string) {
    return this.file.checkFile(this.rootDir, fileName);
  }

  removeDir(dirName: string) {
    return this.file.removeDir(this.rootDir, dirName);
  }

  removeFile(dirName: string) {
    return this.file.removeFile(this.rootDir, dirName);
  }

  removeRecursively(dirName: string) {
    return this.file.removeRecursively(this.rootDir, dirName);
  }

  listDir(dirName: string) {
    return this.file.listDir(this.rootDir, dirName);
  }

  readAsText(file: string) {
    return this.file.readAsText(this.rootDir, file);
  }

  writeExistingFile(fileName: string, text: string) {
    return this.file.writeExistingFile(this.rootDir, fileName, text);
  }

  writeFile(fileName: string, text: string) {
    return this.file.writeFile(this.rootDir, fileName, text);
  }


  initFile() {

    return new Promise(((resolve, reject) => {
      // 检查文件是否存在
      this.checkDir(this.dirName).then((res) => {
        resolve("文件已存在");
        // console.log("checkDir", res);
        // this.allDir = res;
      }).catch(err => {

        // console.log("checkDir err", err);

        // 创建路径
        this.createDir(this.dirName).then((res) => {
          resolve("文件创建成功" + res);
          // console.log("createDir", res);

          // 创建文件
          this.createFile(this.dirName + "/" + this.fileName).then((res) => {

            resolve("文件创建成功");
            // console.log("createFile", res);
            // this.createFileJson = res;
          }).catch(err => {

            reject("文件创建失败");
            // console.log("createFile err", err);
            // this.createFileJson = err;
          });

          // this.createDirJson = res;
        }).catch(err => {
          console.log("createDir err", err);
          // this.createDirJson = err;
        });

        // this.allDir = err;
      });

    }));
  }

  deleteFile() {
    return this.removeRecursively(this.dirName);

    //   .then((res) => {
    //   console.log("removeRecursively", res);
    //   this.deleteFileJson = res;
    // }).catch(err => {
    //   console.log("removeRecursively err", err);
    //   this.deleteFileJson = err;
    // });
  }

/*
  // 上传文件
  uploadFile() {
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'name.jpg',
      headers: {}

    };

    this.fileTransfer.upload('<file path>', '<api endpoint>', options)
      .then((data) => {
        // success
      }, (err) => {
        // error
      })
  }


  download() {
    // const url = 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png';
    const url = 'http://imgsrc.baidu.com/imgad/pic/item/d000baa1cd11728bf53cb322c2fcc3cec3fd2c98.jpg';
    this.fileTransfer.download(url, this.file.externalDataDirectory + 'applicationDirectory.png').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
      console.log('download err: ' + error.toURL());
    });
  }*/

  getFileList() {
    return new Promise<Array<any>>((resolve, reject) => {
      this.file.listDir(this.file.externalRootDirectory, this.logDir).then(((data) => {
        resolve(data);
        /*for (const fileName of data) {
          this.allDir.push(fileName['name']);
        }*/
      })).catch((err) => {
        reject(err);
      })
    });
  }


  openFile(fileName: string) {
    return new Promise((resolve, reject) => {
      this.file.readAsText(this.file.externalRootDirectory + this.logDir, fileName).then((data) => {
        resolve(data);
      }).catch((err) => {
        reject(err);
      })
    });

  }
}
