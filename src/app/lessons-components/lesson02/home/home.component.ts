import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommentsService, IComment} from "../../../common-services/comments.service";
import {filter, map, Observable, of, Subscription, tap} from "rxjs";
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, ParamMap, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {Lesson03Module} from "../../lesson03/lesson03-module/lesson03.module";

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    Lesson03Module
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy{

  public comments?: IComment[];
  public mySubscription: Subscription;
  public id: number = 0;

  constructor(public commentsService: CommentsService,
              private route: ActivatedRoute) {

    this.mySubscription = new Subscription();
  }

  initClear() {
    this.comments = undefined;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // @ts-ignore
      this.id = params.get('id');
      console.log("id=", this.id);
      this.actionGetAllComments(this.id)
    })
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }

  public actionGetAllComments(id: number) {
    this.initClear();

    id++;

    this.mySubscription = this.commentsService.getAllComments()
      .pipe(
        map(items =>
          items
            .slice(1, id)
        ),
        tap(items => console.log('tap', items)),
      )
      .subscribe(comments => {
          this.comments = comments;
        }
      );
  }
}
