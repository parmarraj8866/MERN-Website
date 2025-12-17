import React from 'react'

export default function Signup() {
  return (
     <div className='container shadow-sm border my-5 rounded p-5 w-50 '>
        <form method='post' >
            <h3 className='fw-normal text-center mb-4'>User Signup </h3>
            <div className="mb-4">
                <label className='form-label fw-bold'> Username : </label>
                <input type="text" className='form-control' placeholder='Enter Username...' />
            </div>
            <div className="mb-4">
                <label className='form-label fw-bold'> Email : </label>
                <input type="email" className='form-control' placeholder='Enter Email...' />
            </div>
            <div className="mb-4">
                <label className='form-label fw-bold'> Password : </label>
                <input type="password" className='form-control' placeholder='Enter Password...' />
            </div>
           <div className='mb-3'><button className='btn btn-success me-1' >Signup</button> 
           <a href="/login" >Login</a></div>
        </form>
    </div>
  )
}
