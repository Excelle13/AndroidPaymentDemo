import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {StompService} from "ng2-stomp-service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Injectable()
export class NotifyServiceProvider {


  private subscription: any;

  private subject = new Subject<any>();

  constructor(public http: HttpClient,
              public stompService: StompService) {

    const token = localStorage.getItem('userToken');

    // configuration
    this.stompService.configure({
      host: environment.baseUrl + "/ws",
      debug: true,
      headers: {"jwt": token},
      recTimeout: 1000,
      heartbeatIn: 500,
      heartbeatOut: 500,
      queue: {
        "init":
          false
      },
      queueCheckTime: 500
    });

  }

  /**
   * 消息通信的信息订阅方法
   * @returns {Observable<any>}
   */
  notify(): Observable<any> {
    // return Observable.create((ob) => {
    //start connection

    this.stompService.startConnect().then(() => {

      this.stompService.done("init");

      // console.log("websocket 链接成功", res);

      //subscribe
      this.subscription = this.stompService.subscribe('/notify', (data) => {
        this.subject.next(data);
        // ob.next(data);
      });


      /*
        //send data
        stompService.send('/notify',{"data":"data"});

        //unsubscribe
        this.subscription.unsubscribe();

        //disconnect
        stompService.disconnect().then(() => {
            console.log( 'Connection closed' )
        })
        */
    });

    return this.subject.asObservable();
    // })
  }

  /**
   * 获取信息的回调方法
   * @param data
   */
  public notifyMessage = (data) => {
    console.log("从服务器获取到的信息为----", data)
  }
}
