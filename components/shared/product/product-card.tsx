import { Card, CardHeader, CardContent } from '@/components/ui/card'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ProductPrice from './product-price'
import { Product } from "@/components/types/types";



const ProductCard = ({product}: {product: Product}) => {
  return (
    <div>
        <Card>
            <CardHeader>
                <Link href={`/product/${product.slug}`}>
                 <Image
                     src={product.images && product.images.length > 0 ? product.images[0] : "/placeholder.png"}
                     alt={product.name}
                     width={200}
                     height={200}
                     priority={true}
                 />
                </Link>
            </CardHeader>
            <CardContent className='p-4 grid gap-4'>
          <div className='text-xs'>{product.brand}</div>
          <Link href={`/product/${product.slug}`}>
            <h2 className='text-sm font-medium'>{product.name}</h2>
          </Link>
        <div className='flex-between gap-4'>
          <p>{product.rating} stars</p>
          {product.stock > 0 ? (
            <ProductPrice classname='font-bold' value={product.price}/>
          ) : (
            <p className='text-destructive'>Out of Stock</p>
          )}
        </div>
      </CardContent>

           
        </Card>
    </div>
  )
}

export default ProductCard
