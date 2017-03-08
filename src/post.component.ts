import {Component,ViewEncapsulation} from '@angular/core';
import {PostService} from './post.service';
import {Post} from './post'
@Component({
    selector: 'posts',
    inputs:['value','title'],
    template: `<div style="display:inline-block">
                    <label class = "labelText" >{{title}}</label>
                    <label class = "valueText" >{{value}}</label>
                </div>         
    `,
    styles:[`
.labelText {
    text-align:center;
    font-size: 18px;
    display: block;
    font-weight: normal !important;}
.valueText {
        text-align:center;
        display: block;
        font-size: 30px 
    }
    `],
    encapsulation: ViewEncapsulation.None
})

export class PostComponent
{
    // private posts: Post;
    // constructor (private postService:PostService)
    // {
    //     this.posts = postService.getPosts();
    //     // postService.getPosts().subscribe(posts =>{
    //     //     this.posts = posts;
    //     // })
    // }

}