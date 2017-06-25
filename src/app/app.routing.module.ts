import { FeedComponent } from './feed/feed.component';
import { FeedsComponent } from './feeds/feeds.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: 'feeds',
        component: FeedsComponent
    },
    {
        path: 'feed',
        component: FeedComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/feeds',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class RoutingModule {}
