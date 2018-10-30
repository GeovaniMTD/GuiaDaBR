import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MinhacontaPage } from '../pages/minhaconta/minhaconta';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  home:any = HomePage;
  minhaconta:any = MinhacontaPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      this.rootPage = this.home;
    });
  }
  openPage(opcao){
    this.rootPage = opcao;
  }

}

