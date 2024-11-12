import React, { useEffect, useState } from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'
import { Loader2, Pencil, Trash, TriangleAlert } from 'lucide-react'
import { getProducts } from '../../api/api'
import AddProduct from '../../components/Admin/AddProduct'

const AdminProducts = () => {
  //null -> products[] | Store the data
  const [products, setProducts] = useState(null)
  //true (shows loading screen) -> false(hide loading screen) | Condition Render
  const [loading, setLoading] = useState(true)


  const fetchData = async () => {
    try {
      const res = await getProducts()
      if (res.status === 200) {
        console.log(res.data)
        setProducts(res.data)
      }
    } catch (error) {
      console.error(error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    console.log("UseEffect Called")
    fetchData()
  }, [])

  if (loading) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <Loader2 className='text-purple-500 h-14 w-14 animate-spin' />
        </div>
      </>
    )
  }
  if (!products || products.length === 0) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <TriangleAlert className='text-orange-400 h-12 w-12' />
          <p>
            No Products Available !
          </p>
        </div>
      </>
    )
  }
  return (
    <div className='w-full flex flex-col justify-start items-start'>
      <div className='w-full flex flex-row justify-between items-center my-4 shadow-md rounded-md p-1 border'>
        <AdminPageHeader title='Products' /><AddProduct />
      </div>
      <table className='w-full h-full border-collapse border shadow-lg rounded-md'>
        <thead className='shadow-md font-bold text-purple-500 text-left rounded-md'>
          <tr>
            <th className='p-6'>PID</th>
            <th className='p-6'>Image</th>
            <th className='p-6'>Title</th>
            <th className='p-6'>Price</th>
            <th className='p-6'>Actions</th>
          </tr>
        </thead>
        <tbody>

          {
            products.map((product, index) => (
              <tr key={index}>
                <td className='p-4'>{product._id} </td>
                <td className='flex justify-start px-4 items-center'><img src={product.img} alt={product.title} className='h-12 w-12 object-cover rounded-full shadow-md bg-purple-500' /></td>
                <td className='p-4'>{product.title} </td>
                <td className='p-4'>{product.price}</td>
                <td className='p-4 flex h-full w-full flex-row justify-start items-center gap-4'>
                  <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md
               hover:bg-blue-500 hover:text-white hover:shadow-blue-500'>
                    <Pencil />
                  </button>
                  <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md
               hover:bg-red-500 hover:text-white hover:shadow-red-500'>
                    <Trash />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default AdminProducts