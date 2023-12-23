export interface Product {
    name: string;
    price: number;
    id: number;
}
export interface CartDetail {
    product: Product;
    quantity: number;
}