import { Feed } from './../entities/feed/feed';
import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedsService {
    feeds$: Observable<Feed[]>;
    API_URL = 'https://api.flickr.com/services/feeds/photos_public.gne';

    constructor(
        private jsonp: Jsonp
    ) {}

    getFeeds(term: string): Observable<Feed[]> {
        const url = `${this.API_URL}?tags=${term}&tagmode=all&format=json&&jsoncallback=JSONP_CALLBACK`;

        return this.jsonp.request(url)
            .map(res => res.json())
            .map(val => {
                return val.items;
            });
    }
}
