import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";

export interface IComment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  latestComment = new Subject<string>()
  storedComment = new BehaviorSubject<string>('')

  constructor(public http: HttpClient) {
  }

  public getAllComments(): Observable<IComment[]> {
    return this.http.get<IComment []>('https://jsonplaceholder.typicode.com/comments')
  }

  public getComment(): Observable<IComment[]> {
    return this.http.get<IComment []>('https://jsonplaceholder.typicode.com/commentsss/1')
  }
}
