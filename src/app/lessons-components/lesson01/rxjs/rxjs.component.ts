import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommentsService, IComment} from "../../../common-services/comments.service";
import {filter, find, first, interval, last, map, mapTo, Observable, of, Subscription, switchMap, tap} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {CommentsCheckerComponent} from "../comments-checker/comments-checker.component";

@Component({
  selector: 'rxjs',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    NgIf,
    CommentsCheckerComponent
  ],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class Rxjs implements OnDestroy, OnInit {

  public comments: IComment[] | undefined;
  public mySubscription: Subscription;
  public $comments: Observable<IComment[]>;
  public error: string | undefined;

  constructor(public commentsService: CommentsService) {

    this.mySubscription = new Subscription();
    this.$comments = new Observable<IComment[]>;
  }

  initClear() {
    this.comments = undefined;
    this.$comments = new Observable<IComment[]>;
    this.error = '';
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.commentsService.storedComment.subscribe(item => console.log(item, 'behaviour item'))
    this.commentsService.latestComment.subscribe(item => console.log(item, 'subject item'))
    this.commentsService.storedComment.next('new value')
    this.commentsService.latestComment.next('new subject value')
  }

  public actionGetAllComments() {
    this.initClear();

    of(1,2,3).pipe(
      filter(n => n > 2)
    )

    this.mySubscription = this.commentsService.getAllComments()
      .pipe(
        map(items =>
          items
            .filter(n => n.id > 5)
            .slice(1, 5)
        ),
        tap(items => console.log('tap', items)),
      )
      .subscribe(comments => {
          this.comments = comments;
          this.commentsService.storedComment.next(this.comments[0].body)
          this.commentsService.latestComment.next(this.comments[0].body)
        }
      );
  }

  public actionGetAllCommentsAsync() {
    this.initClear();

    this.$comments = this.commentsService.getAllComments()
      .pipe(map(items => items.slice(1, 2)));
  }

  public actionError() {
    this.initClear();

    this.commentsService.getComment().subscribe(() => console
      .log('success'), (error) => this.error = error.message);
  }
}
