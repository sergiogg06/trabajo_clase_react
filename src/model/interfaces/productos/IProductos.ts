export interface IProducto {
    id: number;
    title: string;
    category: string;
    description: string;
    price: number;
    thumbnail: string;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    }
}