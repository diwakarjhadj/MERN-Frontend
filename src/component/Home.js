import React from 'react'
import '../css/Home.css';
import diwakar from '../images/Diwakar.jpeg';
const Home = () => {
  return (
    <>
      <div className='home-page container'>
        <div className='home-div'>
          <div className='home-content'>
            <h2>Welcome to Diwakar Jha Website<span class="name-purple" ></span></h2>
            <h5>Learn <span class="name-purple" id="element">Web Designing with Diwakar Jha</span></h5>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              delectus doloribus autem vero eveniet error inventore adipisci odit
              sint dolorem, impedit, quis, explicabo iste saepe veritatis aliquid
              eaque porro ipsa!
            </h6>
            <button className="btn-color Explore-more">Explore More </button>
          </div>
          <div className='home-images'>
            <div className='home-image'>
              <img src={diwakar} alt="Internet Connection"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
