import React from 'react';
import { navigate } from "@reach/router";
import axios from "axios"
import styles from '../styles/BlogList.module.css'


const Header = () => {
  const logout = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/api/user/logout", {
      // left blank because we have no body but we need an empty body
      // so that post can get to the third parameter.
    }, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data)
      navigate("/")
    })
    .catch(err => {
      console.log(err)
    });
  };

  return (
    <div>

      <nav className={`header mb-2 d-flex align-items-center p-2 ${styles.bgColorLightBlue}`}>
        <h1 className={`${styles.bgColorLightBlue}`}>Blogarific</h1>
        <form className={` ${styles.bgColorLightBlue} rounded mb-2 d-flex align-items-center`}>

            <button className={`btn btn-sm fw-bold`} onClick={() => navigate("/home")} type="button">Home</button>
            <button className={`btn btn-sm fw-bold`} onClick={() => navigate("/create")} type="button" >Create a New Blog</button>
      
            <button className={`btn btn-sm fw-bold`} onClick={(e) => logout(e)} type="button" >Logout</button>

        </form>
      </nav>
    </div>


  )
}

export default Header
