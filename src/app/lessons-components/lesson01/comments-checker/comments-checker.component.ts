import {Component, OnInit} from '@angular/core';
import {CommentsService} from "../../../common-services/comments.service";

@Component({
  selector: 'app-comments-checker',
  standalone: true,
  imports: [],
  templateUrl: './comments-checker.component.html',
  styleUrl: './comments-checker.component.scss'
})
export class CommentsCheckerComponent implements OnInit{

  constructor(public commentsService: CommentsService) {
  }

  ngOnInit(): void {
  this.commentsService.storedComment.subscribe(item => console.log(item, 'comment checker'))
  this.commentsService.latestComment.subscribe(item => console.log(item, 'comment checker subject'))
  }

}
