import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {JlPayPage} from "../pages/jl-pay/jl-pay";
import {YsPayPage} from "../pages/ys-pay/ys-pay";
import {JlPayProvider} from '../providers/jl-pay/jl-pay';
import {YsPayProvider} from '../providers/ys-pay/ys-pay';
import {HttpClientModule} from "@angular/common/http";
import {AmountCalculationProvider} from '../providers/amount-calculation/amount-calculation';
import {NjlPayProvider} from '../providers/njl-pay/njl-pay';
import {NysPayProvider} from '../providers/nys-pay/nys-pay';
import {FileRwPage} from "../pages/file-rw/file-rw";
import {File} from "@ionic-native/file";
import {DatePickerPage} from "../pages/date-picker/date-picker";
import {DirectivesModule} from "../directives/directives.module";
import {Device} from "@ionic-native/device";
import {A8ResInvokePage} from "../pages/a8-res-invoke/a8-res-invoke";
import {IonicLoggerModule, Logger} from "ionic-logger";
import {PrinterServiceProvider} from '../providers/printer-service/printer-service';
import {LogServiceProvider} from '../providers/log-service/log-service';
import {LoggerModule, NgxLoggerLevel} from "ngx-logger";
import {NotifyServiceProvider} from '../providers/notify-service/notify-service';
import {StompService} from 'ng2-stomp-service';

// const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrczIzMDAxMDEiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZGV2aWNlIjoiMTIzNDU2Nzg5MDExMjY1MCIsIm1hbGwiOiIwMjAyQTAwMyIsInN0b3JlIjoiS1MyMzAwMSIsImV4cCI6MTUzMjg0NjY3MH0.qyTS5P31FVYhF7iXjUMisH0Gxsuoz055LkZC_bmrjqG_-C-3jn_qGf0wa0XjFv0uds4MPhLYLRzcsKncwbpbFQ";
// const token = localStorage.getItem('userToken');
// const stompConfig: StompConfig = {
//   // Which server?
//   url: 'ws://lab.ttooc.xyz/ws',
//
//   // Headers
//   // Typical keys: login, passcode, host
//   headers: {
//     jwt: token
//   },
//
//   // How often to heartbeat?
//   // Interval in milliseconds, set to 0 to disable
//   heartbeat_in: 0, // Typical value 0 - disabled
//   heartbeat_out: 200, // Typical value 20000 - every 20 seconds
//   // Wait in milliseconds before attempting auto reconnect
//   // Set to 0 to disable
//   // Typical value 5000 (5 seconds)
//   reconnect_delay: 2000,
//
//   // Will log diagnostics on console
//   debug: true
// };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    JlPayPage,
    YsPayPage,
    FileRwPage,
    DatePickerPage,
    A8ResInvokePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    DirectivesModule,
    IonicLoggerModule.forRoot({
      docDir: 'MyApp',
      logDir: 'log'
    }),
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    JlPayPage,
    YsPayPage,
    FileRwPage,
    DatePickerPage,
    A8ResInvokePage


  ],
  providers: [
    Device,
    File,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JlPayProvider,
    YsPayProvider,
    AmountCalculationProvider,
    NjlPayProvider,
    NysPayProvider,
    Logger,
    PrinterServiceProvider,
    LogServiceProvider,
    NotifyServiceProvider,
    StompService
    /*    StompService,
        {
          provide: StompConfig,
          useValue: stompConfig
        }*/
  ]
})
export class AppModule {
}
