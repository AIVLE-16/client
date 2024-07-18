import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const FullContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  min-width: 932px;
  max-width: 1300px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const GoBackBtn = () => {
  const navigate = useNavigate();

  const style = {
    top: '15px',
    left: '15px',
    color: 'white',
    position: 'absolute',
    cursor: 'pointer'
  }

  return (
    <div style={style} onClick={() => navigate('/')}>
      <img
        src={`${process.env.PUBLIC_URL}/images/home.png`} // 이미지 경로
        alt="Home"
        style={{ width: '70px', height: 'auto', cursor: 'pointer' }}
      />
    </div>
  )
}