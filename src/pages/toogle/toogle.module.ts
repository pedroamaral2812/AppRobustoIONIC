import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TooglePage } from './toogle';

@NgModule({
  declarations: [
    TooglePage,
  ],
  imports: [
    IonicPageModule.forChild(TooglePage),
  ],
})
export class TooglePageModule {}
