import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TdateTimePage } from './tdate-time';

@NgModule({
  declarations: [
    TdateTimePage,
  ],
  imports: [
    IonicPageModule.forChild(TdateTimePage),
  ],
})
export class TdateTimePageModule {}
