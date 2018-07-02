import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public loadingCtrl : LoadingController) {
  }

  salvar() {
    let aguarde = this.loadingCtrl.create({
      content : "Salvando dados ...",
      duration: 3000
    });

    aguarde.present();
    
  }

}
