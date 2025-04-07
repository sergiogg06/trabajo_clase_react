import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { IProducto } from '@/model/interfaces/productos/IProductos'
import { Link } from 'react-router-dom'




interface Props {
  productos: IProducto[]
  limit: number
}
// export const CardListProductos = (data: Props) => {
export const CardListProductos = ({ productos, limit }: Props) => {
  return (
    <>
                <div>Seccion de Productos {}</div>
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                  {productos.map((producto: IProducto) => (
                    <Card key={producto.id} className="shadow-md hover:shadow-lg transition rounded-2xl">
                      <CardHeader>
                        <Link to={`/productos/${producto.id}`} >
                        <CardTitle className="text-xl">{producto.title}</CardTitle>
                        </Link>
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
}
