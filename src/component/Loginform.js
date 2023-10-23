import React, { useState }from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
const Loginform = () => {
    const navigate= useNavigate('/');
    const [email, setemail]= useState('');
  const [password,setPassword]= useState('');
  const loginUser=async (e)=>{
    e.preventDefault();
    const res=await fetch('/signin',{
        method:'POST',
        headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
    });
    const data= res.json();
    if(res.status===400||!data)
    {
        window.alert("Invalid EmailId Or Password");
    }
    else{
        window.alert("Login Successful");
        navigate('/');
    }
  }
    return (
        <>
            <form method='POST'>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
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
                        <input type="email" name="email" id="form3Example3 email" className="form-control form-control-lg"
                           autoComplete='off' value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter a valid email address" />
                    </div>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                    <div className='content'>
                        <i className="fa-solid fa-key icon"></i>
                        <input type="password" name="password" id="form3Example4 password" className="form-control form-control-lg"
                           autoComplete='off' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter password" />
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
                    <input type='submit' name='signin' id='signin' className="btn btn-primary btn-lg" style={{ paddingLeft: "2.5rem;", paddingRight: "2.5rem;" }} value='Login' onClick={loginUser} />
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <NavLink to="/signup"
                        className={"link-danger"}>Register</NavLink></p>
                </div>

            </form>
        </>
    )
}

export default Loginform
