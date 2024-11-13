
import axios from 'axios'


const API = 'http://localhost:3000'

// ProductEndPonts
const getProducts = () => axios.get(`${API}/products/all`)
const getProductsCount = () => axios.get(`${API}/products/count`)
const addProduct = (product) => axios.post(`${API}/products/add`, product)
const editProduct = (product, id) => axios.put(`${API}/products/edit/${id}`, product)
const deleteProduct = (id) => axios.delete(`${API}/products/delete/${id}`)

// OrderEndPonts
const getOrders = () => axios.get(`${API}/orders/all`)
const getOrdersCount = () => axios.get(`${API}/orders/count`)


//UserEndPoints
const getUsers = () => axios.get(`${API}/users/all`)
const getUsersCount = () => axios.get(`${API}/users/count`)
const addUser = (user) => axios.post(`${API}/users/add`, user)
const editUser = (user, id) => axios.put(`${API}/users/edit/${id}`, user)
const deleteUser = (id) => axios.delete(`${API}/users/delete/${id}`)

//AuthEndponts
const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)

export {
    Login,
    Register,
    getProducts,
    getProductsCount,
    addProduct,
    editProduct,
    deleteProduct,
    getUsers,
    getUsersCount,
    addUser,
    editUser,
    deleteUser,
    getOrders,
    getOrdersCount,
}