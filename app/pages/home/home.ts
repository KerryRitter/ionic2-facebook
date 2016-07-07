import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Page, Platform} from 'ionic-angular';
import {FbProvider} from "../../providers/facebookProvider";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  public email = "";
  public name = "";
  public id = "";

  constructor(public platform: Platform, public fbProvider : FbProvider ) {
  }

  login() {
    this.fbProvider.login().then(() => {
          this.email = "test";
          this.name = "test";
          this.id = "test";
    });
  }
}