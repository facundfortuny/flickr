import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { RoutingModule } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeedsComponent } from './feeds/feeds.component';
import { FeedComponent } from './feed/feed.component';


@NgModule({
    declarations: [
        AppComponent,
        FeedsComponent,
        FeedComponent
    ],
    imports: [
        BrowserModule,
        JsonpModule,
        RoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
