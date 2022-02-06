import React from 'react'
import UserLogin from '../components/UserLogin'
import UserRegister from '../components/UserRegister';
import styles from '../styles/BlogList.module.css'


const LogReg = () => {
  return (
    <div className='container'>
      <div className={`${styles.blogContainer} ${styles.bgColorLightBlue} rounded mb-2`}>
        <h2 className={`${styles.bgColorLightBlue}`}>Welcome to the Blogarific!</h2>
      </div>
        <h5>Please register or login if already a registered user!</h5>
      <div className="row">
        <div className='col-4 offset-md-2'>
          <UserRegister/>
        </div>
        <div className='col-4'>
          <UserLogin/>
        </div>
    </div>
    </div>
  )
}

export default LogReg;



