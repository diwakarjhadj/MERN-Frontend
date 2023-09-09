import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div id='notfound' className='Pagenotfound'>
      <div className='notfound-404'>
        <h1>404</h1>
      </div>
      <h2> We are Sorry, page not found!</h2>
      <p className='mb-5'>This Page is not fond</p>
      <NavLink to="/" className="linkpage">Back to Home Page</NavLink>
    </div>
  )
}

export default ErrorPage
