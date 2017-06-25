import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Feed } from './../entities/feed/feed';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
    feed: Feed;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.route.queryParams.subscribe(params => {
            this.feed = new Feed(params);
        });
    }

    ngOnInit() {
    }

}
