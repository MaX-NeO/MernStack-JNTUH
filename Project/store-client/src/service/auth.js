import { jwtDecode } from 'jwt-decode'


const storeToken = (token) => {
    localStorage.setItem('token', token)
}
const getToken = () => {
    const token = localStorage.getItem('token')
    if (!token) {
        return null;
    }
    return token;
}
const getRole = () => {
    const token = getToken()
    if (token) {
        const data = jwtDecode(token)
        return data.role;
    }
    else {
        return null;
    }
}
const getEmail = () => {
    const token = getToken()
    if (token) {
        const data = jwtDecode(token)
        return data.email;
    }
    else {
        return null;
    }
}
const getName = () => {
    const token = getToken()
    if (token) {
        const data = jwtDecode(token)
        return data.name;
    }
    else {
        return null;
    }
}
const getUID = () => {
    const token = getToken()
    if (token) {
        const data = jwtDecode(token)
        return data.id;
    }
    else {
        return null;
    }
}
const isLoginValid = () => {
    const token = getToken()
    if (token) {
        const data = jwtDecode(token)
        if (data.exp > Date.now() / 1000) {
            return true
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
export { storeToken, getToken, getEmail, getRole, isLoginValid, getName, getUID }