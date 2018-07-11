import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {last} from "rxjs/operators";

declare let cordova: any;

@Injectable()
export class PrinterServiceProvider {

  constructor(public http: HttpClient) {
    // console.log('Hello PrinterServiceProvider Provider');
  }

  printSalesTicket(printParams: object): Observable<any> {
    return Observable.create((ob) => {
      cordova.plugins.A8ResPlugin.printSales(printParams, (res) => {
        ob.next(res);
      }, (err) => {
        ob.error(err);
      });
    }).pipe(last());
  }

  printSalesSummaryTicket(printParams: object): Observable<any> {
    return Observable.create((ob) => {
      cordova.plugins.A8ResPlugin.printSalesSummary(printParams, (res) => {
        ob.next(res);
      }, (err) => {
        ob.error(err);
      });

    }).pipe(last());
  }

  printSalesSmallSummaryTicket(printParams: object): Observable<any> {
    return Observable.create((ob) => {
      cordova.plugins.A8ResPlugin.printSalesSmallSummary(printParams, (res) => {
        ob.next(res);
      }, (err) => {
        ob.error(err);
      });

    }).pipe(last());
  }


}
