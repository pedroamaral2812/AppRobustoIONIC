import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TdateTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tdate-time',
  templateUrl: 'tdate-time.html',
})
export class TdateTimePage {
  event : any =  {
    month: '2018-01-06',
    timeStarts : '07:43',
    timeEnds : '2018-01-07'
  }
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

}
