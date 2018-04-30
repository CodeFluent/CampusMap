import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { CampusMap } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FeedPage } from '../pages/feed/feed';

import { LogoutPage } from '../pages/logout/logout';


import { SubscribePage } from '../pages/subscribe/subscribe';
import { FeedDataProvider } from '../providers/feed-data';
import { DatasetsProvider } from '../providers/datasets';
import { UserDataProvider } from '../providers/user-data';

@NgModule({
  declarations: [
    CampusMap,
    HomePage,
    FeedPage,
    SubscribePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(CampusMap, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: HomePage, name: 'Mainmap', segment: 'main-map' },
        { component: FeedPage, name: 'FeedPage', segment: 'feeds' },
        { component: SubscribePage, name: 'SubscribePage', segment: 'subscriptions' }
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CampusMap,
    FeedPage,
    HomePage,
    SubscribePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FeedDataProvider,
    DatasetsProvider,
    UserDataProvider
  ]
})
export class AppModule { }
