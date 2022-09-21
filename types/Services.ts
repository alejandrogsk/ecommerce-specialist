export interface ServiceListI {
    title: string; 
    content: string;
}

export interface ServiceI {
    title: string;
    list: ServiceListI[];
    list2?: ServiceListI[];
    image: { alt: string; src: string };
    cta?: {
        title: string;
        link: string;
    }
}

export interface HomeServices {
    title: string;
    cta: { title: string; link: string };
    design: ServiceI;
    development: ServiceI;
    other: ServiceI;
}