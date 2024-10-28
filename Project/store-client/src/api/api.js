
import axios from 'axios'


const API = 'https://671b70ef2c842d92c37fec0c.mockapi.io/prodcutsapp/products'


const getProducts = () => axios.get(API)


export { getProducts }