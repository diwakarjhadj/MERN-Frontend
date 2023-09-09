import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <div className="container my-5 py-5 z-depth-1">


        {/* <!--Section: Content--> */}
        <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">


          {/* <!--Google map--> */}
          <div id="map-container-google-1" className="z-depth-1 map-container mb-5">
            <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
              style={{ border: "0px;" }} allowfullscreen></iframe>
          </div>
          {/* <!--Google Maps--> */}

          {/* <!--Grid row--> */}
          <div className="row">

            {/* <!--Grid column--> */}
            <div className="col-lg-5 col-md-12 mb-0 mb-md-0">

              <h3 className="font-weight-bold">Contact Us</h3>

              <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente
                molestiae
                numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam, doloremque laborum.</p>

              <p><span className="font-weight-bold mr-2">Email:</span><NavLink to="#">contact@mycompany.com</NavLink></p>
              <p><span className="font-weight-bold mr-2">Phone:</span><NavLink to="#">+48 123 456 789</NavLink></p>

            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-7 col-md-12 mb-4 mb-md-0">

              {/* <!--Grid row--> */}
              <div className="row">

                {/* <!--Grid column--> */}
                <div className="col-md-6">

                  {/* <!-- Material outline input --> */}
                  <div className="md-form md-outline mb-0">
                    <input type="text" id="form-first-name" placeholder='First Name' className="form-control" />
                  </div>

                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div className="col-md-6">

                  {/* <!-- Material outline input --> */}
                  <div className="md-form md-outline mb-0">
                    <input type="text" id="form-last-name" placeholder='Last Name' className="form-control" />
                  </div>

                </div>
                {/* <!--Grid column--> */}

              </div>
              {/* <!--Grid row--> */}

              {/* <!-- Material outline input --> */}
              <div className="md-form md-outline mt-3">
                <input type="email" id="form-email" placeholder='E-mail' className="form-control" />
              </div>

              <div className="md-form md-outline mt-3">
                <input type="phone" id="form-phone" placeholder='Phone' className="form-control" />
              </div>

              {/* <!-- Material outline input --> */}
              <div className="md-form md-outline mt-3">
                <input type="text" id="form-subject" placeholder='Subject' className="form-control" />
              </div>

              {/* <!--Material textarea--> */}
              <div className="md-form md-outline mb-3 mt-3">
                <textarea id="form-message" className="md-textarea form-control" placeholder='Get In Touch' rows="3"></textarea>
                <label htmlFor="form-message">How we can help?</label>
              </div>

              <button type="submit" className="btn btn-info btn-sm ml-0">Submit<i className="far fa-paper-plane ml-2"></i></button>

            </div>
            {/* <!--Grid column--> */}

          </div>
          {/* <!--Grid row--> */}


        </section>
        {/* <!--Section: Content--> */}


      </div>

    </>
  )
}

export default Contact
