
import axios from 'axios'
import { getToken } from '../service/auth'


const API = 'http://localhost:3000'


const axiosInstance = axios.create({
    baseURL: API,
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken()
        if (token) {
            config.headers.Authorization = `${token}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

// ProductEndPonts
const getProducts = () => axios.get(`${API}/products/all`)
const getProductsCount = () => axiosInstance.get(`/products/count`)
const addProduct = (product) => axiosInstance.post(`${API}/products/add`, product)
const editProduct = (product, id) => axiosInstance.put(`${API}/products/edit/${id}`, product)
const deleteProduct = (id) => axiosInstance.delete(`${API}/products/delete/${id}`)

// OrderEndPonts
const getOrders = () => axiosInstance.get(`${API}/orders/all`)
const addOrder = (order) => axiosInstance.post('/orders/add', order)
const getOrdersCount = () => axiosInstance.get(`/orders/count`)
const deleteOrder = (id) => axiosInstance.delete(`${API}/orders/delete/${id}`)


//UserEndPoints
const getUsers = () => axiosInstance.get(`/users/all`)
const getUsersCount = () => axiosInstance.get(`/users/count`)
const addUser = (user) => axiosInstance.post(`/users/add`, user)
const editUser = (user, id) => axios.put(`${API}/users/edit/${id}`, user)
const deleteUser = (id) => axios.delete(`${API}/users/delete/${id}`)
const resetPassword = (password, id) => axios.put(`${API}/users/resetpassword/${id}`, password)
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
    resetPassword,
    getOrders,
    addOrder,
    getOrdersCount,
    deleteOrder
}