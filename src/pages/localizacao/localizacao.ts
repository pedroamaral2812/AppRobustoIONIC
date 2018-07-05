import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the LocalizacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-localizacao',
  templateUrl: 'localizacao.html',
})
export class LocalizacaoPage {

  latitude : number;
  longitude : number;

  constructor(private geolocation : Geolocation) {
  }

  ionViewDidLoad() {

    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
    
  }

}
