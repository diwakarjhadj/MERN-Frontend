import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/About.css';
// import diwakar from '../images/Diwakar.jpg';
// import { useNavigate } from 'react-router-dom';
const About = () => {
  // const navigate = useNavigate();
  // const callAboutPage = async () => {
  //   try {
  //     const res = fetch('/about', {
  //       method: "GET",
  //       headers: {
  //         Accept: 'application/json',
  //         "Content-Type": 'application/json'
  //       },
  //       credentials: "include"
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error
  //     }
  //   }
  //   catch (err) {
  //     console.log(err)
  //     navigate('/login')
  //   }
  // }
  useEffect(() => {

  })
  return (
    <>
      <div className='main-container'>
      <div className='main-div user-container'>
        <div>
          <div className='sub-div1'>
            <h5>Hello Everyone to Enjoy with the latest videos</h5>
          </div>
          <div className='sub-div2'>
            <h5>Enjoy my Latest DSA Playlist</h5>
          </div>
        </div>
        <div>
          <h5>To Join with us please go through my channel:- <Link to="https://www.youtube.com/@diwakarjha5339/featured" target="_blank">My Channel</Link> </h5>
        </div>
        <div className='top-heading'>
          <h3>Here are the Most Important Interview Question to Explain Briefly</h3>
        </div>
        <h4>SDE Sheet Overview</h4>
        <div className='overview'>
          <p>Given Below is the Best structured path to Learn How to solve the problem of the Data Structure in the and at the same time practice problems which are asked in top tech giants like Google, Amazon, Facebook, etc, and startups like Swiggy, Zomato, Paytm, and others.</p>
          <h5>Watch My SDE Sheet Playlist:- <Link to="https://www.youtube.com/playlist?list=PLjHDKRQVtwJdlYEutKjWhegcyu_-jp7Vk" target="_blank">SDE Sheet</Link></h5>
          <hr />
          <p>In this PlayList You will Learn the Concept to How to Solve the Problem of a Data Structure and Algorithm in an Efficient Manner If you have any Doubt so Please comment on my <strong>Youtube comments</strong> Section</p>
        </div>
        <div className='overview'>
          <h5>Watch My Leetcode Sheet Playlist:- <Link to="https://www.youtube.com/playlist?list=PLjHDKRQVtwJehabd38rm6oSZwKXOrAS6f" target="_blank">Leetcode Sheet </Link></h5>
          <hr />
          <p>In this PlayList You will Learn the Concept to How to Solve the Problem of a Data Structure and Algorithm in an Efficient Manner If you have any Doubt so Please comment on my <strong>Youtube comments</strong> Section</p>
        </div>
        <div className='overview'>
          <h5>Watch My Coding Sheet Playlist:- <Link to="https://www.youtube.com/playlist?list=PLjHDKRQVtwJeCUHwrXLyV0y-sDJu84kPA" target="_blank">Coding Sheet </Link></h5>
          <hr />
          <p>In this PlayList You will Learn the Concept to How to Solve the Problem of a Data Structure and Algorithm in an Efficient Manner If you have any Doubt so Please comment on my <strong>Youtube comments</strong> Section</p>
        </div>
        <div className='faq'>
          <p>FAQs:-</p>
          <div className='overview'>
            <li className='question'>what is the Benefit to get the Videos</li>
            <p className='answer'>There Are Multiple Type of Videos to Explore you want to Improve your logic and improve your skills</p>
          </div>
        </div>
      </div>
      <div className='user2-container main-div'>
        <div className='iframe-container'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1BA-nASy_3U?si=H9tqxU3Z-wiLJ608" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      </div>
    </>
  )
}

export default About
