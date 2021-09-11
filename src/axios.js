import axios from 'axios'

const instance = axios.create({
    baseURL:'https://zocket-assessment-server.herokuapp.com/'
})

export default instance
