import axios from 'axios'


const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

// intercept response and check for unauthorized responses.


export default axiosSecure
