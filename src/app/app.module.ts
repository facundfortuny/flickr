import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FeedsComponent } from './feeds/feeds.component';

@NgModule({
    declarations: [
        AppComponent,
        FeedsComponent
    ],
    imports: [
        BrowserModule,
        JsonpModule,
        RoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
