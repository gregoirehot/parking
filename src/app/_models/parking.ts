export class Parking {
    id: number;
    title: string;
    libre: boolean;
    date?: Date;
    conducteur?:string;
    images?: Images[];
    visible: boolean;
    reserve? :boolean;
}

export class Images {
    id: number;
    label: string;
    source: string;
    description?: string;
    visible: boolean;
}