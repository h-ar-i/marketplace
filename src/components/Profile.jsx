import React,{ useState }  from 'react'
import { Button, Collapse } from 'react-bootstrap'
import profileImg from '../assets/profileImg.webp'


function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-between">
        <button  onClick={() => setOpen(!open)} className='btn'>User Profile <i class="fa-solid fa-arrow-down"></i></button>
      </div>
      
      <Collapse in={open}>
        <div className='row justify-content-center align-items-center p-3 shadow ' id="example-collapse-text">
        <label className='text-center'>
              <input type="file"  style={{display:'none'}}/>
              <img width={'200px'} height={'200px'} className='rounded-circle'  src={profileImg} alt="" />
            </label>
            <button className='btn btn-success mt-3'>Update</button>
        </div>
       
        
      </Collapse>
    
    </>
  )
}

export default Profile