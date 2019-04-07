import DateTimeFormat = Intl.DateTimeFormat;

export interface Event {
    id: number;
    name: string;
    ownerId: number;
    data: DateTimeFormat;
}
