export interface Reservation {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    place?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
}