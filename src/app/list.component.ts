import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post, AllPostsGQL } from './generated/graphql';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let post of posts | async">
        {{post.title}} by {{post.author.firstName}} {{post.author.lastName}}
        ({{post.votes}} votes)
        <app-upvoter [postId]="post.id"></app-upvoter>
      </li>
    </ul>
  `,
})
export class ListComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private allPostsGQL: AllPostsGQL) {}

  ngOnInit() {
    this.posts = this.allPostsGQL
      .watch()
      .valueChanges.pipe(map(result => result.data.posts));
  }
}
