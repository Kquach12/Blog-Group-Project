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
      <h1>title: work in progress</h1>
      <div>
        <button onClick={() => navigate("")}>Button 1</button>
        <button onClick={() => navigate("")}>Button 2</button>
        <button onClick={() => navigate("/logout")}>Logout</button>
      </div>
    </div>
  )
}

export default Header
