import { FeedsService } from './../services/feeds.service';
import { Feed } from './../entities/feed/feed';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'app-feeds',
    templateUrl: './feeds.component.html',
    styleUrls: ['./feeds.component.scss'],
    providers: [FeedsService]
})
export class FeedsComponent implements OnInit {
    feeds: Feed[];

    constructor(
    private feedsService: FeedsService
    ) { }

    ngOnInit() {
        this.feedsService.getFeeds('space').subscribe((value) => {
            this.feeds = value;
        })
    }
}
