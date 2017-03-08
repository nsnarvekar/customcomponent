import {Component} from '@angular/core';
import {PostService} from './post.service';
import {Post} from './post'
@Component({
    selector: 'posts',
    inputs:['value','title'],
    template: `<div>
                    <h2>{{title}}</h2>
                    <h2> {{value}}</h2>
                    </div>
                
    `
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