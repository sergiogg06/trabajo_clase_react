import React, { useEffect, useState } from 'react'
import { Spinner } from "@/components/ui/spinner"
import axios from 'axios';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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

export const Productos = () => {
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
    const [productos, setProductos] = useState<Producto[]>([]);
    const [limit, setLimit] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((respuesta) => {
                // la vairable respuesta solo tiene validez en el ambito o contexto de la funcion de then()--> no se puede leer en el return
                console.log(respuesta.data)
                setProductos(respuesta.data.products)
                setLimit(respuesta.data.limit)
                setLoading(false)
            })
    }, [])
    return (
        loading
          ? <Spinner />
          : (
              <>
                <div>Seccion de Productos {limit}</div>
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                  {productos.map((producto: Producto) => (
                    <Card key={producto.id} className="shadow-md hover:shadow-lg transition rounded-2xl">
                      <CardHeader>
                        <CardTitle className="text-xl">{producto.title}</CardTitle>
                        <CardDescription>{producto.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <img
                          src={producto.thumbnail}
                          alt={producto.title}
                          className="w-full h-48 object-cover rounded-md"
                        />
                        <p className="mt-4 text-lg font-semibold text-gray-700">${producto.price}</p>
                      </CardContent>
                      {producto.dimensions && (
                        <CardFooter className="text-sm text-gray-600">
                          <h4 className="font-medium mb-1">Dimensiones: </h4>
                          <p>width: {producto.dimensions.width}</p>
                          <p>height: {producto.dimensions.height}</p>
                          <p>depth: {producto.dimensions.depth}</p>
                        </CardFooter>
                      )}
                    </Card>
                  ))}
                </section>
              </>
            )
    )
}
