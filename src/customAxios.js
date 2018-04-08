import axios from 'axios';  // axios 그 자체를 임포트

export default axios.create({
    baseURL: 'http://localhost:8080/api',
    // baseURL: 'http://localhost:8080/api',
    timeout: 3000,
    withCredentials: true, //쿠키를 보내거나 받고싶을때
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'z'
    }
})