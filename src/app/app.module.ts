import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RssFeedComponent } from './rss-feed/rss-feed.component';
import { RssItemComponent } from './rss-item/rss-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

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
        BrowserAnimationsModule,
        MatCardModule,
        MatToolbarModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
