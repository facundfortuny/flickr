import {Feed} from './feed';

describe('Feed', () => {
    it('should create an instance', () => {
        expect(new Feed()).toBeTruthy();
    });

    it('should accept values in the constructor', () => {
        const feed = new Feed({
            'title': 'Caravan',
            'link': 'https:\/\/www.flickr.com\/photos\/148372453@N05\/34689949793\/',
            'media': {
                'm': 'https:\/\/farm5.staticflickr.com\/4232\/34689949793_bec4f6facc_m.jpg'
            },
            'date_taken': '2016-08-11T02:53:39-08:00',
            'description': 'something in the description',
            'published': '2017-06-24T08:48:12Z',
            'author': 'nobody@flickr.com (\'Redhood Photography\')',
            'author_id': '148372453@N05',
            'tags': 'tagexample',
        });

        expect(feed.title).toEqual('Caravan');
        expect(feed.link).toEqual('https:\/\/www.flickr.com\/photos\/148372453@N05\/34689949793\/');
        expect(feed.media.m).toEqual('https:\/\/farm5.staticflickr.com\/4232\/34689949793_bec4f6facc_m.jpg');
        expect(feed.date_taken).toEqual('2016-08-11T02:53:39-08:00');
        expect(feed.description).toEqual('something in the description');
        expect(feed.published).toEqual('2017-06-24T08:48:12Z');
        expect(feed.author).toEqual('nobody@flickr.com (\'Redhood Photography\')');
        expect(feed.author_id).toEqual('148372453@N05');
        expect(feed.tags).toEqual('tagexample');
    });
});

