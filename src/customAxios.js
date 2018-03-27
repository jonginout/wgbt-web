import axios from 'axios';  // axios 그 자체를 임포트

export default axios.create({
    baseURL: 'http://localhost:8080',
    // baseURL: 'http://localhost:8080/api',
    timeout: 3000,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    }
})