import { Geolocation } from '@ionic-native/geolocation';
import { LocalizacaoPage } from './../pages/localizacao/localizacao';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BarcodePage } from './../pages/barcode/barcode';
import { Camera } from '@ionic-native/camera';
import { CameraPage } from './../pages/camera/camera';
import { EstilizacaoPage } from './../pages/estilizacao/estilizacao';
import { Pagina1Page } from './../pages/pagina1/pagina1';
import { PaginaPrincipalPage } from './../pages/pagina-principal/pagina-principal';
import { TabsPage } from './../pages/tabs/tabs';
import { SegmentPage } from './../pages/segment/segment';
import { ToolbarPage } from './../pages/toolbar/toolbar';
import { ToastPage } from './../pages/toast/toast';
import { LoadingPage } from './../pages/loading/loading';
import { TooglePage } from './../pages/toogle/toogle';
import { ListPage } from './../pages/list/list';
import { InputPage } from './../pages/input/input';
import { GridPage } from './../pages/grid/grid';
import { FabPage } from './../pages/fab/fab';
import { RangePage } from './../pages/range/range';
import { RadioPage } from './../pages/radio/radio';
import { CheckboxPage } from './../pages/checkbox/checkbox';
import { BotoesPage } from './../pages/botoes/botoes';
import { AlertPage } from './../pages/alert/alert';
import { ActionSheetPage } from './../pages/action-sheet/action-sheet';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, List } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BadgesPage } from '../pages/badges/badges';
import { CardPage } from '../pages/card/card';
import { TdateTimePage } from '../pages/tdate-time/tdate-time';
import { SelectPage } from '../pages/select/select';
import { Pagina2PageModule } from '../pages/pagina2/pagina2.module';
import { Pagina2Page } from '../pages/pagina2/pagina2';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionSheetPage,
    AlertPage,
    BadgesPage,
    BotoesPage,
    CardPage,
    CheckboxPage,
    RadioPage,
    RangePage,
    TdateTimePage,
    FabPage,
    GridPage,
    InputPage,
    ListPage,
    TooglePage,
    LoadingPage,
    ToastPage,
    ToolbarPage,
    SegmentPage,
    TabsPage,
    SelectPage,
    PaginaPrincipalPage,
    Pagina1Page,
    Pagina2Page,
    EstilizacaoPage,
    CameraPage,
    BarcodePage,
    LocalizacaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActionSheetPage,
    AlertPage,
    BadgesPage,
    BotoesPage,
    CardPage,
    CheckboxPage,
    RadioPage,
    RangePage,
    TdateTimePage,
    FabPage,
    GridPage,
    InputPage,
    ListPage,
    TooglePage,
    LoadingPage,
    ToastPage,
    ToolbarPage,
    SegmentPage,
    TabsPage,
    SelectPage,
    PaginaPrincipalPage,
    Pagina1Page,
    Pagina2Page,
    EstilizacaoPage,
    CameraPage,
    BarcodePage,
    LocalizacaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    BarcodeScanner,
    Geolocation
  ]
})
export class AppModule {}
