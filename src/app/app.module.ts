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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    JlPayPage,
    YsPayPage
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
    YsPayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JlPayProvider,
    YsPayProvider,
    AmountCalculationProvider
  ]
})
export class AppModule {
}
