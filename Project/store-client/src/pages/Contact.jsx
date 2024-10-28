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
          <div className='h-[90%] w-1/2 flex flex-col justify-center items-center gap-4'>
            <div className='h-[31%] w-[70%] border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-4 shadow-md'>
              <Mail className='h-8 w-8 text-purple-600' />
              <h1>abc@gamil.com</h1>
            </div>
            <div className='h-[31%] w-[70%] border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-4 shadow-md'>
              <Phone className='h-8 w-8 text-purple-600' />
              <h1>9876543210</h1>
            </div>
            <div className='h-[31%] w-[70%] border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-4 shadow-md'>
              <Pin className='h-8 w-8 text-purple-600' />
              <h1 className='text-center'>1/11 ,asd,dfg <br /> wert</h1>
            </div>
          </div>
          <div className='h-[95%] w-1/2 flex flex-col justify-center items-center'>
            <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
              <h1 className='w-[80%] text-left my-6 font-bold text-purple-500'>Get in touch</h1>
              <form className='h-[80%] w-[80%] flex flex-col justify-center items-center gap-8'>
                <input type="text" name="" id="" placeholder='Name' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' />
                <input type="email" name="" id="" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' />
                <input type="tel" name="" id="" placeholder='Phone' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' />
                <textarea name="" id="" className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm ' cols='8' rows='10' placeholder='Message'/>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact