import axios from 'axios'

const request = axios.create({
  baseURL: 'https://react-antd-admin-green.vercel.app/api',
})

// Add a request interceptor
request.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    console.error(error);
    return Promise.reject(error)
  }
)

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // TODO handler error
    console.error(error)
    return Promise.reject(error)
  }
)

export default request