import { DetailedProduct } from '@/actions';
import AddToCart from '@/components/add-to-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import React from 'react'

const Details = async ({params}) => {
    const id = params.details;
    const getProduct = await DetailedProduct(id);
    const product = getProduct?.data;
    console.log(product);
  return (
    <div>
        <Card className="h-[400px] w-[400px]">
            <CardContent>
                <div className='w-full aspect-w-16 aspect-h-8 lg:h-80'>
                    <img className='object-cover object-center w-full h-full' src={product?.image} alt={product?.title}/>
                </div>
                <div>
                    <CardTitle>{product?.title}</CardTitle>
                </div>
                <div className='flex gap-4 items-center'>
                    <p className='text-lg text-gray-800 font-bold'>${product?.price}</p>
                    <AddToCart/>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default Details