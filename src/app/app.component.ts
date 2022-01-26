import { Component } from '@angular/core';
import { RedditAPIService } from './reddit-api.service';
import { RedditPost, Subreddit } from 'src/RedditPost';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PauperAPI';
  reddit?: RedditPost;

  constructor(private redditAPI: RedditAPIService) { }
  GetReddit() {
    this.redditAPI.getResult("aww").subscribe(
      (response: any) => {
        console.log(response);
        this.reddit = response;
      }
    )
  }

}
