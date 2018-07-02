import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
  
  }

  showToast(position: string){
      this.toastCtrl.create({
      message: 'Dados com sucesso',
      duration: 2000,
      position: position
    }).present();
  }

  showLongToast(){
    this.toastCtrl.create({
      message: 'Seja bem vindo ao curso de Ionic, aqui sera aprendido vario conceitos de ionic' ,
      duration: 2000,
      position: 'top'
    }).present();
  }

  showToastWithCloseButton(){
    this.toastCtrl.create({
      message: 'Operação realizada com sucesso',
      showCloseButton: true,
      closeButtonText: 'OK',
      position: 'top'
    }).present();
  }

}
