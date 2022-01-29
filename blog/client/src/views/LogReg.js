import React from 'react'
import UserLogin from '../components/UserLogin'
import UserRegistration from '../components/UserLogin'
import styled from 'styled-components';

const LogReg = () => {
  return (
    <LogRegContainer>
      <UserRegistration/>
      <UserLogin/>
    </LogRegContainer>
  )
}

export default LogReg;

const LogRegContainer = styled.div`
    margin: 3rem auto;
    padding: 4rm;
    width: 31.25rem;
    font-family: 'Poppins', sans-serif;
`;

