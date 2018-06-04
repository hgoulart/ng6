import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { fadeInAnimation, listStagger } from '../animations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [fadeInAnimation, listStagger],
  host: { '[@fadeInAnimation]': '' }
})
export class PostsComponent implements OnInit {

  posts: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(data=>{
      this.posts = data;
    })
  }

}
