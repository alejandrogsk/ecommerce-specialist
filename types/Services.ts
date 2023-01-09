export interface ServiceListI {
    title: string; 
    content: string;
}

export interface ServiceI {
    title: string;
    list: ServiceListI[];
    list2?: ServiceListI[];
    ctaVertical?: {
        title: string;
        link: string;
    };
    ctaHorizontal?: {
        title: string;
        link: string;
    }
    images: {
        mockup: { alt:string; src:string; width:string; height:string},
        image: { alt:string; src:string; width:string; height:string}
      }
}

export interface HomeServices {
    title: string;
    cta: { title: string; link: string };
    design: ServiceI;
    development: ServiceI;
    other: ServiceI;
}