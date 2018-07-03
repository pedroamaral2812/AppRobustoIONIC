import { ToastPage } from './../toast/toast';
import { CardPage } from './../card/card';
import { BotoesPage } from './../botoes/botoes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  botoesPage = BotoesPage;
  cardPage   = CardPage;
  toastPage  = ToastPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  
  }

}
