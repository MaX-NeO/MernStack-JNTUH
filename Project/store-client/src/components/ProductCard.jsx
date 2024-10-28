import { IndianRupee } from 'lucide-react'
import React from 'react'

const ProductCard = ({ img, price, name }) => {
    return (
        <>
            <div className="relative flex w-[24%] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-purple-300 to-purple-600">
                    <img src={img} alt={name} className='h-full w-full object-cover' />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {name}
                    </h5>
                    <p className=" font-sans  leading-relaxed text-inherit antialiased font-bold flex flex-row text-xl items-center">
                        <IndianRupee className='h-5 w-6'/> {price}
                    </p>
                </div>
                <div className="p-6 pt-0 w-full">
                    <button data-ripple-light="true" type="button" className="w-full select-none rounded-lg bg-purple-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Buy Now
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductCard