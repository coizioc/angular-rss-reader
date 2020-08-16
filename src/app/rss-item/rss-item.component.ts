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

}
