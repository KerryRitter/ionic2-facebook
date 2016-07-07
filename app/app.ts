import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from "./pages/home/home";
import {FbProvider} from "./providers/facebookProvider";


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [FbProvider]
})
export class MyApp {

  private rootPage:any;

  constructor(private platform:Platform) {
    this.rootPage = HomePage;

    platform.ready().then(() => {
      StatusBar.styleDefault();
	    (window as any).facebookConnectPlugin.browserInit("1742923842657606");
    });
  }
}

ionicBootstrap(MyApp)
