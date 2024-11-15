import React, { useEffect, useState } from 'react'
import {  getName } from '../../service/auth'

const AdminTopBar = () => {
  const [name, setName] = useState('')
  useEffect(() => {
    const username = getName()
    setName(username)
  }, [])
  return (
    <div className='w-full h-full shadow-purple-400 shadow-sm flex justify-end items-center px-4'>{name}</div>
  )
}

export default AdminTopBar