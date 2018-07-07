import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import * as moment from 'moment';

// declare const datepicker: any;
declare const require: any;


/**
 * Generated class for the DatePickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-date-picker',
  templateUrl: 'date-picker.html',
})

export class DatePickerPage {

  showOrHide: boolean = false;

  lastMonthStatus: boolean;
  nextMonthStatus: boolean;


  calendarArr;
  weeks = ["日","一","二","三","四","五","六"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toToday(){
    this.calendarArr = this.monthDay(new Date());
  }

  lastMonth(){
    // let temp = new Date();

    this.calendarArr = this.monthDay(new Date().getMonth()-1);
  }
  nextMonth(){
    this.calendarArr = this.monthDay(new Date().getMonth()+1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatePickerPage');

    console.log('formatdate', this.monthDay(new Date()));
    this.calendarArr = this.monthDay(new Date());

/*    $('#sandbox-container .btDatePicker').datepicker({
    });*/
  }





  pickDate(day){
    console.log(day);
  }

  monthDay(date) {
    const daysArr = [[], [], [], [], [], []]; // 6*7的日历数组
    const currentWeekday = moment(date).date(1).weekday(); // 获取当月1日为星期几
    const lastMonthDays = moment(date).subtract(1, 'month').daysInMonth(); // 获取上月天数
    const currentMonthDays = moment(date).daysInMonth(); // 获取当月天数
    const getDay = day => (day <= lastMonthDays ? day : (day <= (lastMonthDays + currentMonthDays)) ? day - lastMonthDays : day - (lastMonthDays + currentMonthDays)); // 日期处理
    for (let i = 0; i < 7; i += 1) {
      let virtualDay = (lastMonthDays - currentWeekday) + i;
      for (let j = 0; j < 6; j += 1) {
        daysArr[j][i] = getDay(virtualDay + (j * 7));
      }
    }
    return daysArr
  }


  // btDatePicker


}
