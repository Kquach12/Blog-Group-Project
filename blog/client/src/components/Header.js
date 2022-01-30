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
    <div>
      <div className="header">
        <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/create")}>Create New Blog</button>
        <button onClick={(e) => logout(e)}>Logout</button>
      </div>
    </div>
  )
}

export default Header
