import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const initialCredentials = {
  username: '',
  password: ''
}

const Login = () => {
  const [ credentials, setCredentials ] = useState(initialCredentials)
  const { push } = useHistory()
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChanges = (e) => {
    const { name, value } = e.target

    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then((res) => {
        localStorage.setItem('token', res.data.payload)
        push('/bubbles')
      })
      .catch((err) => {
        alert(`${err.message}`)
      })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleLogin}>
        <label>Username:
          <input
          type='text'
          name='username'
          value={credentials.username}
          onChange={handleChanges}
          >
          </input>
        </label>
        <label>Password:
          <input
          type='text'
          name='password'
          value={credentials.password}
          onChange={handleChanges}
          >
          </input>
        </label>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
