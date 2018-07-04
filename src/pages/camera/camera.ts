import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import {Camera, CameraOptions, DestinationType, EncodingType} from '@ionic-native/camera';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  foto : any;

  constructor(private camera : Camera, private toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    
  }

  tirarFoto(){
    debugger;
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType : this.camera.MediaType.PICTURE

    };
    this.camera.getPicture(options).then((imageData)=>{
      debugger;
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    
      this.foto = base64Image;

      
    }, (err) =>{
      this.toastCtrl.create({
        message: 'Dados naõ foi possivel tirar a foto',
        duration: 2000,
        position: 'top'
      }).present();

    });

  }

}
