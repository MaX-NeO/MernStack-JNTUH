import { IndianRupee, X } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { addOrder } from '../api/api'
import { toast } from 'sonner'

const ProductCard = ({ img, price, name, auth, uid, pid }) => {
    const [showPurchase, setShowPurchase] = useState(false)
    const phoneRef = useRef(0)
    const addressRef = useRef('')
    const handleBuy = async (e) => {
        e.preventDefault()
        const order = {
            uid: uid,
            pid: pid,
            total: price,
            phone: phoneRef.current.value,
            address: addressRef.current.value
        }
        try {
            const response = await addOrder(order)
            if (response.status === 200) {
                toast.success("Order Placed")
                setShowPurchase(false)
            }
        } catch (error) {
            toast.error("Error while placing order")
            console.log(error)
        }
    }
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
                        <IndianRupee className='h-5 w-6' /> {price}
                    </p>
                </div>
                {auth && (
                    <div className="p-6 pt-0 w-full">
                        <button data-ripple-light="true" type="button" className="w-full select-none rounded-lg bg-purple-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={() => { setShowPurchase(!showPurchase) }}>
                            Buy Now
                        </button>
                    </div>
                )
                }
            </div>
            {showPurchase && (
                <>
                    <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
                        <div className='h-[55%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
                            <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                                <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                                    <h1 className='w-1/2 text-left text-xl my-6 font-bold text-purple-500'>Complete Purchase</h1>
                                    <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowPurchase(!showPurchase) }}>
                                        <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                                    </div>
                                </div>
                                <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleBuy}>
                                    <input ref={phoneRef} type="number" name="" id="phone" placeholder='Phone' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required autoFocus />
                                    <textarea ref={addressRef} name="" id="address" className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm ' cols='8' rows='6' placeholder='Shipping Address' />
                                    <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-purple-400 bg-purple-500 text-white rounded-sm outline-none">Complete</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )

            }
        </>
    )
}

export default ProductCard