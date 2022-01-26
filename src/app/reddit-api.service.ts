import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditAPIService {

  constructor(private http: HttpClient) { }

  getResult(subreddit: string): Observable<any> {
    let url: string = `https://www.reddit.com/r/${subreddit}/.json`;
    let result: Observable<any> = this.http.get(url);
    return result;

  }
}