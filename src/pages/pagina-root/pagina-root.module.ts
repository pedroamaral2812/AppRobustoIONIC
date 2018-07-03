import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaRootPage } from './pagina-root';

@NgModule({
  declarations: [
    PaginaRootPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaRootPage),
  ],
})
export class PaginaRootPageModule {}
