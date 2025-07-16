export interface Course {
    id:number;
    name:string;
    desc:string;
    price:number;
    date?:string;
    soldOut?:boolean;
    onSale?:boolean;
    img:string;
}
