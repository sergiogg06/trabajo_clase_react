import React, { useEffect, useState } from 'react'
import { Spinner } from "@/components/ui/spinner"
import axios from 'axios';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Car } from 'lucide-react';
import { CardListProductos } from '@/components/www/Productos/CardListProductos';
import { IProducto } from '@/model/interfaces/productos/IProductos';
import { get } from 'http';
import { productosService } from '@/model/api/productos/apiProductos';
export interface Producto {
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

export const ProductosPage = () => {
    // En esta PAGINA deseo cargar la lista de productos
    // 1-. No puedo mostrar el html hasta que no esten disponibles
    // todos los datos de la api --> hook useEffect + hook useState + axios
    // crear una variable de estado que almacene los productos cuando esten disponibles en axios
    // para posteriormente mostrarlos en el return
    // Obligatorio: programar types/interfaces que definen la estructura de los datos que devuelve la api
    //(xTypescript, legibilidad) --> crear un archivo de tipos en la carpeta de tipos
    //     const [productos, setProductos] = useState<Producto[]>([{
    //         id: 0, title: '', category: '', price: 0, thumbnail: ''
    //    }]);
    const [productos, setProductos] = useState<IProducto[]>([]);
    const [limit, setLimit] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    useEffect(() => {
        const obtenerProductos = async () => {
            const productos = await productosService.getProductos()
            setProductos(productos);
            setLoading(false);
      
        };
           obtenerProductos(); 
    }, [])
    return (
      loading
        ? <Spinner />
        : <CardListProductos
            productos={productos}
            limit={20}
        />
    )
    
}
