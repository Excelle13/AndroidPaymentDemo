import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {YsPayPage} from "../pages/ys-pay/ys-pay";
import {JlPayPage} from "../pages/jl-pay/jl-pay";
import {FileRwPage} from "../pages/file-rw/file-rw";
import {DatePickerPage} from "../pages/date-picker/date-picker";
import {A8ResInvokePage} from "../pages/a8-res-invoke/a8-res-invoke";
import {Logger} from "ionic-logger";
import {FileSystemService} from "../service/fileSystemService";
import {File} from "@ionic-native/file";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  @ViewChild(Nav) nav: Nav;

  rootPage: any = A8ResInvokePage;

  pages: Array<{ title: string, component: any }>;


  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private logger: Logger,
              public file: File
              // private _stompService: StompService
  ) {

    this.platform.ready().then(() => {
      this.logger.init(new FileSystemService(this.file)).then((status) => {
        this.logger.info("hello,这是info-log");
        this.logger.debug('[Logger] init: ' + status);
      });

      this.logger.info("hello,这是log");
    });


    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'List', component: ListPage},
      {title: '银石', component: YsPayPage},
      {title: '嘉利', component: JlPayPage},
      {title: '文件读写', component: FileRwPage},
      {title: '日期选择', component: DatePickerPage},
      {title: 'A8资源调用', component: A8ResInvokePage}
    ];

    /*  this._stompService.subscribe('/notify').subscribe((message)=>{
        console.log("notify message----", message);
      });*/

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}

