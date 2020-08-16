import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../interfaces';

@Component({
    selector: 'app-rss-item',
    templateUrl: './rss-item.component.html',
    styleUrls: ['./rss-item.component.scss']
})
export class RssItemComponent implements OnInit {
    @Input() item: Item;

    constructor() { }

    ngOnInit(): void {

    }

    get imageSrc(): string | undefined {
        if (this.item['media:content'] !== undefined) {
            return this.item['media:content'][0]['$'].url;
        } else if (this.item['media:thumbnail'] !== undefined) {
            return this.item['media:thumbnail'];
        }
        return undefined;
    }

    get itemUrl(): string | undefined {
        if(this.item.guid[0]._ !== undefined) {
            return this.item.guid[0]._;
        }
        return undefined;
    }
}
