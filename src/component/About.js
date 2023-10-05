import React, { useEffect } from 'react'
import diwakar from '../images/Diwakar.jpg';
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate= useNavigate();
  const callAboutPage=async ()=>{
    try{
      const res= fetch('/about',{
        method: "GET",
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json'
        },
        credentials:"include"
      });
      const data= await res.json();
      console.log(data);
      if(!res.status===200)
      {
        const error= new Error(res.error);
        throw error
      }
    }
    catch(err){
      console.log(err)
      navigate('/login')
    }
  }
  useEffect(()=>{

  })
  return (
    <>
      <div className='container emp-profile shadow-sm p-3 mb-5 bg-white rounded'>
        <form method='GET'>
          <div className='row'>
            <div className='col-md-4'>
              <img src={diwakar} alt= "Diwakar" style={{ height: "200px" }} />
            </div>
            <div className='col-md-6'>
              <div className='profile-head'>
                <h5>Diwakar Jha</h5>
                <h6>Software Developer</h6>
                <p className='profile-rating mt-3 mb-5'>Rankings: <span>1/10</span></p>
                <ul className="nav nav-tabs" role="tablist">
                  <li className='nav-item'>
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role='tab'>About</a>
                  </li>
                  <li className='nav-item'>
                    <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role='tab'>Timeline</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-2'>
              <input type='submit' className='btn btn-light' name='btnAddMore' value="Edit Profile" />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='profile-work'>
                <p>Work Link</p>
                <a href='https://www.youtube.com/channel/UCjZGcg-NwI96hksQsIcQJDA' target='_Diwakar'>YouTube</a><br />
                <a href='https://www.linkedin.com/in/diwakar-jha-22a436218/' target='_Diwakar'>Instagram</a><br />
                <a href='https://auth.geeksforgeeks.org/user/diwakarjha/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user' target='_Diwakar'>GFG</a><br />
                <a href='https://www.youtube.com/channel/UCjZGcg-NwI96hksQsIcQJDA' target='_Diwakar'>YouTube</a><br />
                <a href='https://www.youtube.com/channel/UCjZGcg-NwI96hksQsIcQJDA' target='_Diwakar'>YouTube</a><br />

              </div>
            </div>
            <div className='col-md-8 pl-5 about-info'>
              <div className='tab-content profile-tab' id="myTabContent">
                <div className='tab-pane show active fade' id='home' role='tabpanel' aria-labelledby='home-tab'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>User ID</label>
                    </div>

                    <div className='col-md-6'>
                      <p>1234</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>

                    <div className='col-md-6'>
                      <p>Diwakar Jha</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <label>E-mail</label>
                    </div>

                    <div className='col-md-6'>
                      <p>diwakar@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className='tab-pane show fade' id="profile" role='tabpanel' aria-labelledby='profile-tab'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Experience</label>
                    </div>

                    <div className='col-md-6'>
                      <p>Expert</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Graduation</label>
                    </div>

                    <div className='col-md-6'>
                      <p>B.Tech</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About
