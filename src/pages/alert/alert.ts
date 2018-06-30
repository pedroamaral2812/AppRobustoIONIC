import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(private alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  abrirAlert(){
    alert(1);
  }

  basicAlert(){
  let alert = this.alertCtrl.create(
    {
      title: 'Atenção',
      subTitle: 'Curso de Ionic em promoção',
      buttons : ['OK']
    }

  );
  alert.present();
}

  confirmAlert(){
    let alert = this.alertCtrl.create(
      {
        title : 'Confirmar compra',
        message : 'Tem certeza que deseja comprar este livro?',
        buttons: [
          {
            text : "Cancelar", 
            role: 'cancel',
            handler: ()=> {
              console.log('Compra cancelada');
            }
          },
          {
            text: 'Comprei',
            handler : () => {
              console.log('Compra realizada com sucesso');
            } 
          }
        ]

      }
    );
    alert.present();
  }

  //Botão input
  inputAlert(){
    let alert = this.alertCtrl.create(
      {
        title : "Acesso restrito",
        inputs: [
          {
            name : 'username',
            placeholder: 'Login'
          },
          {
            name : 'senha',
            placeholder: 'Senha',
            type : 'password'
          }
        ],
        buttons: [
          {
            text : 'Cancelar',
            role: 'cancel',
            handler : data => {
              console.log('Autenticacao cancelada');
            }
          },
          {
            text: 'Entrar',
            handler: data => {
              if(data.username== 'paulo' && data.senha == '123'){
                console.log('Usuario autenticado!');
              }
              else{
                console.log("Seus dados não conferem");
              }
            }
          }
          
        ]
      }
    ).present();
    
  }

  RadioAlert(){
    let alert = this.alertCtrl.create();
      alert.setTitle('Escolha uma cor');
      alert.addInput(
        {
          type: 'radio',
          label: 'Azul',
          value : 'blue',
          checked: true
        }
    );

    alert.addInput(
      {
        type: 'radio',
        label: 'Vermelho',
        value : 'red',
        checked: false
      }
  );

  alert.addInput(
    {
      type: 'radio',
      label: 'Verde',
      value : 'green',
      checked: false
    }
);

  alert.addButton("Cancelar");
  alert.addButton({
    text: 'Ok',
    handler: (data: any) => {
      console.log('Cor selecionada', data);

    }
  });
    alert.present();
  }

  checkAlert(){
    let alert = this.alertCtrl.create();
    alert.setTitle("Quais frutas você gosta?");
  
    alert.addInput({
      type: "checkbox",
      label: 'Laranja',
      value : 'orange',
      checked: true
      });
    
      alert.addInput({
        type: "checkbox",
        label: 'Banana',
        value : 'banana',
        checked: false
        });  

        alert.addButton('Cancelar');
        alert.addButton({
          text: "OK",
          handler: (data : any) => {
            console.log('Voce selecionou as frutas: ', data);
          }
        });

        alert.present();
  }

}
