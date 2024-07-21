import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommentsService, IComment} from "../../../common-services/comments.service";
import {concat, filter, from, interval, map, Observable, of, range, Subscription, take,  tap
} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {CommentsCheckerComponent} from "../comments-checker/comments-checker.component";
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from "@angular/forms";
import {ButtonCustomComponent} from "../../../custom-ui/button-custom/button-custom.component";

@Component({
  selector: 'rxjs',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    NgIf,
    CommentsCheckerComponent,
    MatButtonModule,
    FormsModule,
    ButtonCustomComponent,
  ],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss',
})
export class Rxjs implements OnDestroy, OnInit {

  public comments: IComment[] | undefined;
  public mySubscription: Subscription;
  public $comments: Observable<IComment[]>;
  public error: string | undefined;
  public result?: number[];
  public function: string = "";
  public number?: number;
  public msg = '';

  constructor(public commentsService: CommentsService) {

    this.mySubscription = new Subscription();
    this.$comments = new Observable<IComment[]>;
  }

  initClear() {
    this.comments = undefined;
    this.$comments = new Observable<IComment[]>;
    this.error = '';
    this.function = "";
    this.result = undefined;
    this.number = undefined;
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

    this.mySubscription = this.commentsService.getAllComments()
      .pipe(
        map(items =>
          items
            .filter(n => n.id > 5)
            .slice(1, 5)
        ),
        tap(items => {
          console.log('tap', items);
        }),
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

  public of123() {
    this.initClear();

    this.function = "of123";
    of([1, 2, 3], [4, 5], [6, 7, 8, 9], [10, 11, 12, 13, 14, 15])

      .pipe(
        filter(n => n.length < 4)
      )
      .subscribe(n => {
          this.result = n;
          console.log(`value: ${n}`)
        }
      );
  }

  public from123() {
    this.initClear();

    this.function = "from123";
    from([1, 2, 3])
      .pipe(
        filter(n => n < 3)
      )
      .subscribe(n => {
        this.number = n;
        console.log(`value: ${n}`)
      });
  }

  public concat() {
    this.initClear();

    this.function = "concat";
    const timer = interval(1000).pipe(take(4));
    const sequence = range(1, 10);
    const result = concat(timer, sequence);
    result.subscribe(x => console.log(x));
    result.subscribe(x => this.number=x);

  }
}
