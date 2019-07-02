export class Card {
    header: string;
    body: string;
    has_badge: boolean;

    constructor(header: string, body: string, has_badge: boolean) {
        this.header = header;
        this.body = body;
        this.has_badge = has_badge;

    }
}