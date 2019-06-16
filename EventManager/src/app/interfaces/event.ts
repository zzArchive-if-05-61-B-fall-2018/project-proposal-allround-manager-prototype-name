
export interface Event {
    _id: string;
    event_name: string;
    date: string;
    event_dis?: string;
    event_participants?: string[];
    adminId: string;
}
