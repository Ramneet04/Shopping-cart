"use client"
import React from 'react'
import { Card, CardContent, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const ProductCard = ({product}) => {
    const router = useRouter();
  return (
    <div>
        <Card>
            <CardContent>
                <div className='w-full aspect-w-16 aspect-h-8 lg:h-80'>
                    <img className='object-cover object-center w-full h-full' src={product?.image} alt={product?.title}/>
                </div>
                <div>
                    <CardTitle>{product?.title}</CardTitle>
                </div>
                <div className='flex gap-4 items-center'>
                    <p className='text-lg text-gray-800 font-bold'>${product?.price}</p>
                    <Button onClick={()=>router.push(`${product?.id}`)}>Details</Button>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default ProductCard