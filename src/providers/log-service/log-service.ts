import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {NGXLogger} from "ngx-logger";

declare let cordova: any;

@Injectable()
export class LogServiceProvider {

  constructor(public http: HttpClient,
              private logger: NGXLogger) {
    // console.log('Hello LogServiceProvider Provider');
  }

  logInfo(tag: string, message: string): void {
    this.logger.info(tag, message);
    cordova.plugins.A8ResPlugin.logInfo({tag: tag, message: message}, (res) => {
    }, (err) => {
    });
  }

  logDebug(tag: string, message: string): void {
    this.logger.debug(tag, message);
    cordova.plugins.A8ResPlugin.logDebug({tag: tag, message: message}, (res) => {
    }, (err) => {
    });
  }

  logWarn(tag: string, message: string): void {
    this.logger.warn(tag, message);
    cordova.plugins.A8ResPlugin.logWarn({tag: tag, message: message}, (res) => {
    }, (err) => {
    });
  }

  logError(tag: string, message: string): void {
    this.logger.error(tag, message);
    cordova.plugins.A8ResPlugin.logError({tag: tag, message: message}, (res) => {
    }, (err) => {
    });
  }

}
