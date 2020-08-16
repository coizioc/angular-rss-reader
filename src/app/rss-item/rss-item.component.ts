import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../interfaces';

@Component({
  selector: 'app-rss-item',
  templateUrl: './rss-item.component.html',
  styleUrls: ['./rss-item.component.scss']
})
export class RssItemComponent implements OnInit {
    @Input() item: Item;
    imageSrc: string | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
      if(this.item['media:content'] !== undefined) {
          this.imageSrc = this.item['media:content'][0]['$'].url;
      } else if(this.item['media:thumbnail'] !== undefined) {
          this.imageSrc = this.item['media:thumbnail'];
      }
  }
}
