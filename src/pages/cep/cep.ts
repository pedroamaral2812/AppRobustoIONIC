import { Response } from '@angular/http';
import { CepProvider } from './../../providers/cep/cep';
import { Component } from '@angular/core';
import { IonicPage, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cep',
  templateUrl: 'cep.html',
})
export class CepPage {
  public form : FormGroup;
  response : any;
  constructor(private cepProvider : CepProvider, private fb : FormBuilder, private toastCtrl : ToastController, private loadingCtrl :  LoadingController) {
    this.form = this.fb.group ({
      cep: ['', Validators.compose([
         Validators.required
      ])],
    });
  }


  ionViewDidLoad() {

    
  }

  consultarEnderecoPeloCep(){
    let aguarde = this.loadingCtrl.create({
      content: "Por favor aguarde..."
    });
    aguarde.present();

    let valueCep = this.form.controls['cep'].value;
    this.cepProvider.listarEndereco(valueCep).then((data) => {
      this.response = data.json();  

      aguarde.dismiss();
    
      }).catch((response) => {
        console.log('error ->', response);
      });

  }
}
