import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the CryptoDesUtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

declare const require: any;

declare const Buffer: any;

const helper = require('crypto');


@Injectable()
export class CryptoDesUtilProvider {

  key = "wanxiang";  // 默认KEY，可配置
  algorithm = {ecb: 'des-ecb', cbc: 'des-cbc'};  //算法

  constructor(public http: HttpClient) {
    console.log('Hello CryptoDesUtilProvider Provider');
  }

  encrypt(plaintext, iv) {
    let key = new Buffer(this.key);
    let iv1 = new Buffer(iv ? iv : 0);
    let cipher = helper.createCipheriv(this.algorithm.ecb, key, iv1);
    cipher.setAutoPadding(true); //default true
    let ciph = cipher.update(plaintext, 'utf8', 'base64');
    ciph += cipher.final('base64');
    return ciph;
  }

  decrypt(encrypt_text, iv) {
    let key = new Buffer(this.key);
    let iv1 = new Buffer(iv ? iv : 0);
    let decipher = helper.createDecipheriv(this.algorithm.ecb, key, iv1);
    decipher.setAutoPadding(true);
    let txt = decipher.update(encrypt_text, 'base64', 'utf8');
    txt += decipher.final('utf8');
    return txt;
  }

}
