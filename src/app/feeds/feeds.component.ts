import { FeedsService } from './../services/feeds.service';
import { Feed } from './../entities/feed/feed';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'app-feeds',
    templateUrl: './feeds.component.html',
    styleUrls: ['./feeds.component.scss'],
    providers: [FeedsService]
})
export class FeedsComponent implements OnInit {
    feeds: Feed[];

    constructor(
        private feedsService: FeedsService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.feedsService.getFeeds('space').subscribe((value) => {
            this.feeds = value;
        })
    }

    onSelect(feed: Feed) {
        /**
         * Passing the data via query params is not
         * the best way to do, as this data has a lot
         * of information. But is a temporal solution
         * before building a proper state management.
         */
        const params = {
            queryParams: {
                'title': feed.title,
                'media': feed.media,
                'description': feed.description,
                'author': feed.author,
                'published': feed.published,
                'tags': feed.tags,
                'author_id': feed.author_id,
                'link': feed.link,
            }
        };
        this.router.navigate(['feed'], params);
    }
}
