import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Http} from '@angular/http'
import {Device} from 'ng2-device-detector';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

isWeb : boolean = false;

  constructor(public navCtrl: NavController, private device: Device) {
    
     this.isWeb = true;//this.device.isDesktop();

  }

  public  setPlaceholder(){
      if(this.isWeb) {
          return "Username";
      }
      else{
          return "";
      }
  }

}
