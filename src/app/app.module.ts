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
    ToastPage
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
    ToastPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
