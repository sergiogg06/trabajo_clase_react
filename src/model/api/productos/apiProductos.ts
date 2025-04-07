import { IProducto } from '@/model/interfaces/productos/IProductos';
import axios from 'axios';

// Servicio

class ProductosService {
    // getAll
    async getProductos(): Promise<IProducto[]> {
        const respuesta = await axios.get('https://dummyjson.com/products')
        return respuesta.data.products;
    }
    // getBYid
    async getProductoID(id: number): Promise<IProducto> {
        const respuesta = await axios.get(`https://dummyjson.com/products/${id}`)
        return respuesta.data.product;
    }
    // getCategory


}
export const productosService = new ProductosService();
// export const getProductos = async (): Promise<IProducto[]> => {
//     const respuesta = await axios.get('https://dummyjson.com/products')
//     console.log(respuesta)
//     return respuesta.data.products
// }