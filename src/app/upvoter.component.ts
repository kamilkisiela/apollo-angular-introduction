import { Component, Input } from '@angular/core';

import { UpvotePostGQL } from './generated/graphql';

@Component({
  selector: 'app-upvoter',
  template: `
    <button (click)="upvote()">
      Upvote
    </button>
  `
})
export class UpvoterComponent {
  @Input() postId: number;

  constructor(private upvotePostGQL: UpvotePostGQL) {}

  upvote() {
    this.upvotePostGQL.mutate({
      postId: this.postId,
    }).subscribe();
  }
}
