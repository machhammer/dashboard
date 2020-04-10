
export interface Equity {
    company: string;
    country: string;
    performance: number;
    sector: string;
    current_price: number;
    index: string;
}  

export interface Index {
    country: string;
    index: string;
}


export interface Country {
    code: string;
    country: string;
    performance: number;
}