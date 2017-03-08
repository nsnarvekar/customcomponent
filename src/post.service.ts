import {Injectable} from '@angular/core'
import {Http, HttpModule} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'
import 'rxjs/add/Operator/map'
import {Post} from './post'

@Injectable()

export class PostService{

    private posts;
    private url = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http:Http)
    {
        this.posts = [
            {
                Value1:34.2,
                Value2:64.32
            },
            {
                Value1:34.2,
                Value2:64.32
            }
            ]

    } 
    getPosts(){
        return this.posts;
    }
            // getPosts():Observable<Post[]>
            // {
            //     return this.http.get(this.url)
            //     .map(res => res.json());
            //     ;
            // }
}