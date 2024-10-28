import React from 'react'
import { Mail, Phone, Pin } from 'lucide-react'
const Contact = () => {
  return (
    <>
      <div className='w-screen h-full flex flex-col justify-center items-center'>

        <div className='w-full h-40 flex justify-center items-center text-3xl text-purple-500 font-semibold'>
          Contact Us
        </div>
        <div className='w-[75%] h-[45rem] shadow-lg flex flex-row justify-center items-center'>
          <div className='h-[90%] w-1/2 flex flex-col justify-center items-center'>
            <div className='h-[32%] w-[80%] border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-4'>
              <Mail className='h-8 w-8 text-purple-600' />
              <h1>abc@gamil.com</h1>
            </div>
            <div className='h-[32%] w-[80%] border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-4'>
              <Phone className='h-8 w-8 text-purple-600' />
              <h1>9876543210</h1>
            </div>
            <div className='h-[32%] w-[80%] border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-4'>
              <Pin className='h-8 w-8 text-purple-600' />
              <h1 className='text-center'>1/11 ,asd,dfg <br /> wert</h1>
            </div>
          </div>
          <div className='h-[90%] w-1/2 flex flex-col justify-center items-center'>
            <div className='h-[32%]  border rounded-md flex flex-col justify-center items-center text-lg font-semibold'>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact