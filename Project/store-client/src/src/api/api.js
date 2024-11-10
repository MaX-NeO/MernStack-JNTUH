
import axios from 'axios'


const API = 'http://localhost:3000/products/all'


const getProducts = () => axios.get(API)


export { getProducts }