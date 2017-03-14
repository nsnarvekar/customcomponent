import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {PostComponent} from '../../post.component';
import {PostService} from '../../post.service';
import {Http} from '@angular/http'
import {Post} from '../../post'
import {Device} from 'ng2-device-detector';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PostService,Device]
})
export class HomePage {

private posts: Post[];
isMobile : boolean = false;

  constructor(public navCtrl: NavController,private postService:PostService, private device: Device) {
    
    this.posts = this.postService.getPosts();
     this.isMobile = this.device.isMobile();
  }

  getNotification(evt) {
        // Do something with the notification (evt) sent by the child!
        console.log('parent event received');
     
    }
}
