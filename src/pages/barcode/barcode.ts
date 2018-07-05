import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

/**
 * Generated class for the BarcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {

  constructor(private barcodeScanner : BarcodeScanner, private toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    
  }

  scannerProduto(){
    this.barcodeScanner.scan().then(barcodeData => {
      let response : string = JSON.stringify(barcodeData);
      this.toastCtrl.create ({
        message : response,
        duration: 2000,
        position: 'top'
      }).present();
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
