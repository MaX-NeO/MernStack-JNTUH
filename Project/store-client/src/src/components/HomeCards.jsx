import React from 'react'
import { Gift, MessageSquareHeart, PiggyBank, ShoppingCart } from 'lucide-react'
const HomeCards = () => {
    return (
        <>
            <div className='w-full h-full flex flex-row justify-center items-center gap-8 mt-10'>
                <div className=" h-[8rem] w-[23%] bg-white  rounded-sm overflow-hidden relative group p-2 z-0 shadow-lg">
                    <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-purple-500 group-hover:scale-[800%] duration-500 z-[-1] op" />
                    <div className='flex h-full w-full justify-center items-center flex-row'>
                        <ShoppingCart className='h-8 w-8 mr-2 text-black group-hover:text-white  duration-300 ' />
                        <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-300 text-lg">
                            Free Shipping
                        </h1>
                    </div>
                </div>
                <div className=" h-[8rem] w-[23%] bg-white rounded-sm overflow-hidden relative group p-2 z-0 shadow-lg">
                    <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-purple-500 group-hover:scale-[800%] duration-500 z-[-1] op" />
                    <div className='flex h-full w-full justify-center items-center flex-row'>
                        <Gift className='h-8 w-8 mr-2 text-black group-hover:text-white  duration-300 ' />
                        <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-300 text-lg">
                            Great Deals
                        </h1>
                    </div>
                </div>
                <div className=" h-[8rem] w-[23%] bg-white  rounded-sm overflow-hidden relative group p-2 z-0 shadow-lg">
                    <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-purple-500 group-hover:scale-[800%] duration-500 z-[-1] op" />
                    <div className='flex h-full w-full justify-center items-center flex-row'>
                        <PiggyBank className='h-8 w-8 mr-2 text-black group-hover:text-white  duration-300 ' />
                        <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-300 text-lg">
                            EMI Offers
                        </h1>
                    </div>
                </div>
                <div className=" h-[8rem] w-[23%] bg-white  rounded-sm overflow-hidden relative group p-2 z-0 shadow-lg">
                    <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-purple-500 group-hover:scale-[800%] duration-500 z-[-1] op" />
                    <div className='flex h-full w-full justify-center items-center flex-row'>
                        <MessageSquareHeart className='h-7 w-7 mr-2 text-black group-hover:text-white  duration-300 ' />
                        <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-300 text-lg">
                            Instant Support
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCards