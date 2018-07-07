import { CepPage } from './../pages/cep/cep';
import { LocalizacaoPage } from './../pages/localizacao/localizacao';
import { BarcodePage } from './../pages/barcode/barcode';
import { CameraPage } from './../pages/camera/camera';
import { EstilizacaoPage } from './../pages/estilizacao/estilizacao';
import { PaginaPrincipalPage } from './../pages/pagina-principal/pagina-principal';
import { SelectPage } from './../pages/select/select';
import { ToolbarPage } from './../pages/toolbar/toolbar';
import { LoadingPage } from './../pages/loading/loading';
import { TooglePage } from './../pages/toogle/toogle';
import { ListPage } from './../pages/list/list';
import { FabPage } from './../pages/fab/fab';
import { TdateTimePage } from './../pages/tdate-time/tdate-time';
import { RangePage } from './../pages/range/range';
import { RadioPage } from './../pages/radio/radio';
import { CheckboxPage } from './../pages/checkbox/checkbox';
import { BotoesPage } from './../pages/botoes/botoes';
import { BadgesPage } from './../pages/badges/badges';
import { AlertPage } from './../pages/alert/alert';
import { ActionSheetPage } from './../pages/action-sheet/action-sheet';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CardPage } from '../pages/card/card';
import { GridPage } from '../pages/grid/grid';
import { InputPage } from '../pages/input/input';
import { ToastPage } from '../pages/toast/toast';
import { SegmentPage } from '../pages/segment/segment';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any =  CepPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      {title: 'ActionSheet', component: ActionSheetPage},
      {title: 'Alert', component: AlertPage},
      {title: "Badges", component: BadgesPage},
      {title: "Botoes", component: BotoesPage},
      {title: "Cartões", component: CardPage},
      {title: "Checkbox", component: CheckboxPage},
      {title: "Radio", component: RadioPage},
      {title: "Range", component: RangePage},
      {title: "TdateTime", component: TdateTimePage},
      {title: "Fab", component: FabPage},
      {title: "GRID", component: GridPage},
      {title: "Input", component: InputPage},
      {title: "List", component: ListPage},
      {title: "Toogle", component: TooglePage},
      {title: "Loading", component: LoadingPage},
      {title: "Toast", component: ToastPage},
      {title: "Toolbar", component: ToolbarPage},
      {title: "Segment", component: SegmentPage},
      {title: "Tabs", component: TabsPage},
      {title: "Select", component: SelectPage},
      {title: "Navegação", component: PaginaPrincipalPage},
      {title: "Estilização", component: EstilizacaoPage},
      {title:"Camara", component: CameraPage},
      {title:"BarCode", component: BarcodePage},
      {title:"Localizcao", component: LocalizacaoPage},
      {title: "CEP", component: CepPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
