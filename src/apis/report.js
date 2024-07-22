import axios from 'axios';

const access = localStorage.getItem('access');
const SERVER_URL = process.env.REACT_APP_POST_SERVER_URL

// 신고내역 가져오기
export const getReport = () => {
  return axios.get(SERVER_URL + 'postlog/', {
    headers: {
      Authorization: access
    }
  })
  .then((res) => {return res.data})
  .catch((error) => console.log(error))
}

// 출동통계 가져오기
export const getStats = () => {
  return axios.get(SERVER_URL + 'categorycount/', {
    headers: {
      Authorization: access
    }
  })
  .then((res) => {return res.data})
  .catch((error) => console.log(error))
}