import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../api/api'

const Products = () => {
    const [products, setProducts] = useState(null)


    async function fetchData() {
        try {
            const res = await getProducts()
            if (res.status === 200) {
                setProducts(res.data)
            }

        } catch (error) {

        }
    }


    console.log(products)
    useEffect(() => {
        fetchData()
    }, [])

    if (products === null) {
        return (
            <>
                No Products Available
            </>
        )
    }

    const img = "https://loremflickr.com/640/480/cats"
    const name = "Bespoke Fresh Mouse"
    const price = "101.00"
    return (
        <>
            <div className='w-screen h-full flex justify-start items-start flex-row flex-wrap mt-14 gap-y-20 gap-x-2'>

                {products.map((product, index) => (
                    <ProductCard img={product.img} name={product.name} price={product.price} key={product.id} />
                ))
                }
            </div>
        </>
    )
}

export default Products