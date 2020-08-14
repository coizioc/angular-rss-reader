import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as xml2js from 'xml2js';

interface Item {
    title: string;
    [propName: string]: any;
}

interface Channel {
    title: string;
    item: Item[];
    [propName: string]: any;
}

@Component({
    selector: 'app-rss-feed',
    templateUrl: './rss-feed.component.html',
    styleUrls: ['./rss-feed.component.scss']
})
export class RssFeedComponent implements OnInit {
    @Input() url: string;
    rssChannel: Channel | null = null;

    constructor(private httpClient: HttpClient) { }

    ngOnInit(): void {
        this.retrieveFeed();
    }

    private async retrieveFeed() {
        this.httpClient.get(this.url, {responseType: 'text'}).subscribe(async data => {
            this.rssChannel = await this.parseXML(data);
            console.log(this.rssChannel);
        });

    }

    private parseXML(data: string): Promise<Channel> {
        return new Promise(res => {
            let k: string | number;
            let items = [];
            let parser = new xml2js.Parser({
                trim: true,
                explicitArray: true
            });
            parser.parseString(data, function (err, result) {
                if(err !== null) {
                    console.log(err);
                }
                const rssChannel = result.rss.channel[0];
                res(rssChannel);
            });
        });
    }
}
