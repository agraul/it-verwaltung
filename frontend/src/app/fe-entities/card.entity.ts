export class Card {
    header: string;
    body: string;
    footer: string;
    has_badge: boolean;

    constructor(header: string, body: string, has_badge: boolean, footer?: string) {
        this.header = header;
        this.body = body;
        this.has_badge = has_badge;
        if(footer != undefined) {
            this.footer = footer;
        }

    }
}