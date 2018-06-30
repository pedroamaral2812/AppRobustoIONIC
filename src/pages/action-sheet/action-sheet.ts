import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Alert } from 'ionic-angular';

/**
 * Generated class for the ActionSheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(public actionSheetCtrl : ActionSheetController) {
  }

  ionViewDidLoad() {
    
  }
  abrirActionSheet(){
    let ActionSheet = this.actionSheetCtrl.create(
      {title : "Opções",
       buttons : [
         {
           icon : 'md-create',
           text : 'Opção A',
           role : 'destructive',
           handler: () => {
            // alert('Voce clicou na opção A');
           }
         },
         {
          text : 'Opção B',
          handler: () => {
            //alert('Voce clicou na opção B');
          }
        },
        {
          text : 'Cancelar',
          role : "cancel",
          handler: () => {
            //alert('Voce clicou na opção cancelar');
          }
        },
       ]
    }
    );
    ActionSheet.present();    
  }
}
