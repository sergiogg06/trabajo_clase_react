import { CardSingleProduct } from '@/components/www/Productos/CardSingleProduct'
import { useParams } from 'react-router-dom'

export const ProductoPage = () => {
  const { id } = useParams<{id: string}>()
  return (
    <>
    <h3>Codigo Producto: {id}</h3>
    <CardSingleProduct/>
    </>
  )
}
