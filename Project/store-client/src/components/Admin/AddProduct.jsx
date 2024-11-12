import { Plus } from 'lucide-react'
import React from 'react'

const AddProduct = () => {
    return (
        <>
            <button className='w-10 h-10 font-bold flex justify-center items-center border-2 border-green-500 rounded-md text-green-500 shadow-md hover:text-white hover:bg-green-500 hover:shadow-md hover:shadow-green-400'>
                <Plus className='w-8 h-8' />
            </button>
        </>
    )
}

export default AddProduct