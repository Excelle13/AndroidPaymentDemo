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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    JlPayPage,
    YsPayPage,
    FileRwPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    JlPayPage,
    YsPayPage,
    FileRwPage
  ],
  providers: [
    File,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JlPayProvider,
    YsPayProvider,
    AmountCalculationProvider,
    NjlPayProvider,
    NysPayProvider
  ]
})
export class AppModule {
}
