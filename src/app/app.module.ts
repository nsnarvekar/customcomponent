import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {PostComponent} from '../post.component'
import {PostService} from '../post.service'
import {Ng2DeviceDetector} from 'ng2-device-detector';
import {LoginPage} from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PostComponent,LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    Ng2DeviceDetector
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PostComponent,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
