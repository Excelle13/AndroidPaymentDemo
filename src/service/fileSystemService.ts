import {FileSystem} from "ionic-logger";
import {File} from "@ionic-native/file";

export class FileSystemService implements FileSystem {
  documentsDirectory: string;

  checkDir(path: string, directory: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      resolve(true);
    });
  }

  createDir(path: string, directory: string, replace?: boolean): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve(true);
    });
  }

  readAsText(path: string, file: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      resolve("readastext");
    });
  }

  writeFile(path: string, file: string, data: string | Blob | ArrayBuffer, replace?: boolean): Promise<any> {
    return new Promise<boolean>((resolve, reject) => {
      resolve(true);
    });
  }

  constructor(public file: File) {
    this.documentsDirectory = file.externalRootDirectory;
  }


}
