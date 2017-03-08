import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {PostComponent} from '../../post.component';
import {PostService} from '../../post.service';
import {Http} from '@angular/http'
import {Post} from '../../post'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PostService]
})
export class HomePage {

private posts: Post[];

  constructor(public navCtrl: NavController,private postService:PostService) {
    
    this.posts = this.postService.getPosts();
  }

}
