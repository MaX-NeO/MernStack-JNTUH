import { ChartBar, DollarSign, Package2, ShoppingCart, User2, Users } from 'lucide-react'
import React from 'react'

const AdminDashboardHomeCards = ({ products, orders, users }) => {
    return (
        <>
            {/* <div className="w-full flex flex-row justify-center items-center gap-6  px-3">
                <div className=" w-1/4 rounded-lg bg-[#673ab7] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_#2196f3]">
                    <p className="text-white text-2xl">2000</p>
                    <p className="text-white text-sm">Users</p>
                    <Users className="group-hover:opacity-100 absolute right-[10%] top-[50%] translate-y-[-50%] text-white transition group-hover:scale-110 duration-300" />
                </div>
                <div className="group w-1/4 rounded-lg bg-[rgb(41,49,79)] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_rgb(244,67,54)]">
                    <p className="text-white text-2xl">1999</p>
                    <p className="text-white text-sm">Products</p>
                    <Package2 className="group-hover:opacity-100 absolute right-[10%] top-[50%] translate-y-[-50%] text-white transition group-hover:scale-110 duration-300" />
                </div>
                <div className="group w-1/4 rounded-lg bg-[rgb(43,79,41)] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_rgb(244,221,54)]">
                    <p className="text-white text-2xl">1999</p>
                    <p className="text-white text-sm">Orders</p>
                    <ChartBar className="group-hover:opacity-100 absolute right-[10%] top-[50%] translate-y-[-50%] text-white transition group-hover:scale-110 duration-300" />
                </div>
            </div> */}
            <div className=' w-full flex flex-row justify-center items-center gap-6'>
                <div className='w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-purple-200 hover:text-purple-500'>
                    <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                        <p className='text-3xl font-bold'>
                            {users}
                        </p>
                        <p className='text-sm font-semibold px-1'>
                            Users
                        </p>
                    </div>
                    <div className='w-[30%] h-full flex justify-center items-center'>
                        <Users className='w-9 h-9' />
                    </div>
                </div>
                <div className='w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-purple-200 hover:text-purple-500'>
                    <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                        <p className='text-3xl font-bold'>
                            {products}
                        </p>
                        <p className='text-sm font-semibold px-1'>
                            Products
                        </p>
                    </div>
                    <div className='w-[30%] h-full flex justify-center items-center'>
                        <Package2 className='w-9 h-9' />
                    </div>
                </div>
                <div className='w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-purple-200 hover:text-purple-500'>
                    <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                        <p className='text-3xl font-bold'>
                            {orders}
                        </p>
                        <p className='text-sm font-semibold px-1'>
                            Orders
                        </p>
                    </div>
                    <div className='w-[30%] h-full flex justify-center items-center'>
                        {/* <DollarSign  /> */}
                        <ShoppingCart className='w-9 h-9' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboardHomeCards