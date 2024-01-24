export interface Product {
    name: string;
    price: number;
    id: number;
    imageProduct: string;
    imageProduct2: string;
    imageProduct3: string;
    imageDemostration: string;
    imageDemostration2: string;
    talla: string [];
    categoryId: number;
}
export interface CartDetail {
    product: Product;
    quantity: number;
    totalPriceProduct: number;
}

export interface Image { 
    id: number;
    imageCollage: string;
    title: string;
}
export interface Talla {
    talla: number;
    id: number;
    seleccionada: boolean;
}
