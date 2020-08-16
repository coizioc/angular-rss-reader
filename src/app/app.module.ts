import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RssFeedComponent } from './rss-feed/rss-feed.component';
import { RssItemComponent } from './rss-item/rss-item.component';

@NgModule({
    declarations: [
        AppComponent,
        RssFeedComponent,
        RssItemComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
