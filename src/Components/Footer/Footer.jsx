import React from 'react'

export default function Footer() {
  return (
    <>
      <footer>
        <div className='p-4'>
          <div className='row text-white mt-4'>
            <div className='col-md-4 text-center'>
              <div>
                <h2>LOCATION</h2>
                <p>2215 John Daniel Drive </p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className='col-md-4 text-center'>
              <div>
                <h2>AROUND THE WEB</h2>
                <div className='d-flex text-center justify-content-center'>
                  <p><span class="fa-stack fa-2x">
  <i class="fa-solid fa-circle fa-stack-2x"></i>
  <i class="fa-brands fa-facebook fa-stack-1x fa-inverse"></i></span> </p>
                <p><span class="fa-stack fa-2x">
  <i class="fa-solid fa-circle fa-stack-2x"></i>
  <i class="fa-brands fa-twitter fa-stack-1x fa-inverse"></i></span> </p>
                <p><span class="fa-stack fa-2x">
  <i class="fa-solid fa-circle fa-stack-2x"></i>
  <i class="fa-brands fa-linkedin-in fa-stack-1x fa-inverse"></i></span> </p>
                <p><span class="fa-stack fa-2x">
  <i class="fa-solid fa-circle fa-stack-2x"></i>
  <i class="fa-solid fa-globe fa-stack-1x fa-inverse"></i></span> </p>
                </div>
                
              </div>
            </div>
            <div className='col-md-4 text-center'>
              <div>
                <h2>ABOUT FREELANCER</h2>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                
              </div>
            </div>
          </div>
        </div>
        <div className='seconed-footer text-center text-white p-3'> 
Copyright © Your Website 2021
        </div>
      </footer>
    </>
  )
}
