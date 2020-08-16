export interface Image {
    link?: string;
    title?: string;
    url?: string;
}

export interface Item {
    title: string;
    description?: string;
    pubDate?: string;
    [propName: string]: any;
}

export interface Channel {
    description: string;
    link: string;
    title: string;
    item: Item[];
    image?: Image;
    [propName: string]: any;
}
