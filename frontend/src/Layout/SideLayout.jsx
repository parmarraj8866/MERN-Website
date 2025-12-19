import React from 'react'

export default function SideLayout(props) {

 
  return (
    <div className=' border' style={{width : "300px", height : "100vh", backgroundColor : "#dedebaff"}}>
      <h2 className='mx-5 fw-normal' style={{marginTop : "100px"}}>{props.name}</h2>
    </div>
  )
}
