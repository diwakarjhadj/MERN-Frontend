import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const imageurl = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
const Signup = () => {
  const navigate= useNavigate();
  const [user,setuser]=useState({
    email: '',
    password: '',
    cpassword: ''
  });

  let name, value;
  const handleInput= (e)=>{
    name=e.target.name;
    value=e.target.value;
    setuser({...user,[name]:value})
  }

  const sendData=async (e)=>{
    e.preventDefault();
    const {email,password,cpassword }=user;
    const res=await fetch("/signup",{
      method:'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email, password, cpassword
      })
    });
    const data=await res.json();
    if(res.status===422||!data)
    {
      window.alert("Invalid Registration")
    }
    else
    {
      window.alert("Register Successful")
      navigate("/login")
    }
  }
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
              <form method='POST'>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign Up with</p>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <div className='content'>
                    <i className="fa-solid fa-envelope icon"></i>
                    <input type="email" id="form3Example3" name="email" autoComplete='off' onChange={handleInput} className="form-control form-control-lg"
                     value={user.email} placeholder="Enter Email address" />
                  </div>

                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                  <div className='content'>
                    <i className="fa-solid fa-key icon"></i>
                    <input type="password" name='password' id="form3Example4 password" autoComplete='off' onChange={handleInput} className="form-control form-control-lg"
                     value={user.password} placeholder="Enter password" />
                  </div>
                </div>


                {/* <!-- confirm Password input --> */}
                <div className="form-outline mb-3">
                  <div className='content'>
                    <i className="fa-solid fa-lock-open icon"></i>
                    <input type="password" id="form3Example4 cpassword" name='cpassword' autoComplete='off' onChange={handleInput} className="form-control form-control-lg"
                    value={user.cpassword}  placeholder="Confirm password" />
                  </div>

                </div>


                <div className="d-flex justify-content-between align-items-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <input type='submit' name='signup' id='signup' className="btn btn-primary btn-lg" style={{ paddingLeft: "2.5rem;", paddingRight: "2.5rem;" }} value='Sign Up' onClick={sendData}/>
                  
                  <p className='small fw-bold mt-2 pt-1 mb-0'>Already have an account?<NavLink to="/login" className={'link-danger'}>Login</NavLink></p>
                </div>

              </form>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Signup
