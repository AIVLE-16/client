import axios from 'axios';
import { getCookie } from '../utils/cookie';
import { errorWithoutBtn, successWithoutBtn } from '../utils/swal';

const csrftoken = getCookie('csrftoken');
const SERVER_URL = 'http://localhost:8000/account/'

// 로그인
export const login = (id, password) => {
  axios.post(SERVER_URL + 'signin/', {id, password}, {
    headers: {
      'X-CSRFToken': csrftoken
    }
  })
  .then((res) => {
    const access = res.data.token;
    localStorage.setItem('access', access);
    window.location.href = '/main';
  })
  .catch((error) => {
    const status = error.response.status;
    if (status == 401 || 400) errorWithoutBtn('아이디 또는 비밀번호가 일치하지 않습니다.');
    console.log('로그인', error);
  })
}

// 아이디 중복 확인
export const idCheck = (id) => {
  return axios.post(SERVER_URL + 'idcheck/', {id}, {
    headers: {
      'X-CSRFToken': csrftoken
    }
  })
  .then((res) => {return res.data.valid ? true : false})
  .catch((error) => console.log(error))
}

// 이메일 중복 확인
export const emailCheck = (email) => {
  const csrftoken = getCookie('csrftoken');

  return axios.post(SERVER_URL + 'emailcheck/', {email}, {
    headers: {
      'X-CSRFToken': csrftoken
    }
  })
  .then((res) => {return res.data.valid ? true : false})
  .catch((error) => {
    console.log(error);
    errorWithoutBtn('알 수 없는 오류가 발생했습니다.', '잠시후 다시 시도해주세요.');
  })
}

// 인증코드 발송
export const sendCode = (email) => {
  return axios.post(SERVER_URL + 'sendemail/', {email}, {
    headers: {
      'X-CSRFToken': csrftoken
    }
  })
  .then(() => {
    successWithoutBtn('인증번호가 발송되었습니다.', '', () => {});
    return true;
  })
  .catch((error) => {
    console.log(error);
    errorWithoutBtn('이메일 발송에 실패하였습니다.', '잠시후 다시 시도해주세요.');
  })
}

// 인증코드 확인
export const checkCode = (email, code) => {
  axios.post(SERVER_URL + 'checksignupcode/', {email, code}, {
    headers: {
      'X-CSRFToken': csrftoken
    }
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    const msg = error.response.data.message
    
    if (msg == 'INVALID_CODE') errorWithoutBtn('인증번호가 정확하지 않습니다.');
    console.log(error);
  })
}