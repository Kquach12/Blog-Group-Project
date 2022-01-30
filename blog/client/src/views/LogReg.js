import React from 'react'
import UserLogin from '../components/UserLogin'
import UserRegister from '../components/UserRegister';
import styled from 'styled-components';


const LogReg = () => {
  return (
    <div className='container'>
      <div>
        <h2>Welcome to the Blog Website!</h2>
        <h5>Please register or login if already a registered user!</h5>
      </div>
      <div className="row ">
        <div className='col d-flex justify-content-start'>
          <UserRegister/>
        </div>
        <div className='col d-flex justify-content-start'>
          <UserLogin/>
        </div>
    </div>
    </div>
  )
}

export default LogReg;



