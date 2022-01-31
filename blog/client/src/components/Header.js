import React from 'react';
import { navigate } from "@reach/router";
import axios from "axios"

const Header = () => {
  const logout = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/api/user/logout", {
      // left blank because we have no body but we need an empty body
      // so that post can get to the third parameter
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
    <div className="container">
      <div class="d-flex col-6 offset-md-7 justify-content-between">
        <div><button onClick={() => navigate("/home")} type="button" class="btn btn-info">Home</button></div>
        <div><button onClick={() => navigate("/create")} type="button" class="btn btn-info">Create a New Blog</button></div>
        <div><button onClick={(e) => logout(e)} type="button" class="btn btn-info">Logout</button></div>
      </div>
    </div>
  )
}

export default Header
