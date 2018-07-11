import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {StompService} from "ng2-stomp-service";
import {environment} from "../../environments/environment";

@Injectable()
export class NotifyServiceProvider {


  private subscription : any;

  constructor(public http: HttpClient,
              public stompService: StompService) {
    // console.log('Hello NotifyServiceProvider Provider');


    const token = localStorage.getItem('userToken');

    // configuration
    stompService.configure({
      host: environment.baseUrl+"/ws",
      debug: true,
      headers: {"jwt": token},
      recTimeout: 5000,
      heartbeatIn: 500,
      heartbeatOut: 500,
      queue: {
        "init":
          false
      },
      queueCheckTime:5000
    });


    //start connection
    this.stompService.startConnect().then(() => {
      this.stompService.done("init");

      console.log("链接成功");

      //subscribe
      this.subscription = stompService.subscribe('/notify', (data,{"jwt":token})=>{
        console.log("成功返回的数据---",data.body);
      });

      /*
       //send data
        stompService.send('/notify',{"data":"data"});

        //unsubscribe
        this.subscription.unsubscribe();

        //disconnect
        stompService.disconnect().then(() => {
            console.log( 'Connection closed' )
        })*/

    });

  }

  //response
  public response = (data) => {
    console.log("从服务器获取到的信息为----",data)
  }
}
