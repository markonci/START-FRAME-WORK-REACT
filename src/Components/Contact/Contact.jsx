import React from 'react'

export default function Contact() {
  return (
    <>
    <div className='Contact text-center'>
      <div className='container'>
        <h2 className='mt-5'>conatct section</h2>
        <p className='mb-5'><i className='fa fa-star'></i></p>
        <div className='mb-5 col-md-6  mx-auto bg-'>
          <div><input type="text" placeholder='userName' className='border-top-0 border-end-0 border-start-0 border-3 shadow form-control mb-5  ' /></div>
          <div><input type="number" placeholder='userAge' className='border-top-0 border-end-0 border-start-0 border-3 shadow  form-control mb-5  ' /></div>
          <div><input type="email" placeholder='userEmail' className='border-top-0 border-end-0 border-start-0   border-3 shadow form-control mb-5  ' /></div>
          <div><input type="password" placeholder='userpassword' className='border-top-0 border-end-0 border-start-0  border-3 shadow form-control mb-5  ' /></div>
          <div className='d-flex'> 
            <button className='btn btn-primary me-auto'>send message</button>
            </div>
        </div>
      </div>
    </div>

    
    
    </>
  )
}
