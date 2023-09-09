import React from 'react';
import Loginform from './Loginform';
const imageurl = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp';
const Login = () => {
  
  return (
    <div>
      <section className="vh-100 d-flex justify-content-center align-items-center">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src={imageurl}
                className="img-fluid" alt="imageDescription" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <Loginform/>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Login
