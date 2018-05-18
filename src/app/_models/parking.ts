export class Parking {
    id: number;
    title: string;
    libre: boolean;
    date?: string;
    conducteur?:string;
    images?: Images[];
    visible: boolean;
}

export class Images {
    id: number;
    label: string;
    source: string;
    description?: string;
    visible: boolean;
}