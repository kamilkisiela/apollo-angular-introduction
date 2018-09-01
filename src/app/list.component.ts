import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
  `
})
export class ListComponent implements OnInit {
  posts: Observable<any[]>;

  ngOnInit() {
    //
  }
}
