import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import View from '../components/View'
import Profile from '../components/Profile'

function Dashboard() {
  const [displayName,setDisplayName] = useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("existinguser")){
      const {username} = JSON.parse(sessionStorage.getItem("existinguser"))
      setDisplayName(username)
    }else{
      setDisplayName("")
    }
  },[])

  return (
    <>
    <Header insideDashBoard={true}/>

    <div style={{marginTop:'100px'}} className='container-fluid'>
      <h2>Welcome <span className='text-success'>{displayName}</span></h2>
      <div className="row mt-2">
        <div className="col-lg-8">
          <View/>
        </div>
        <div className="col-lg-4">
          {/* <Profile/> */}
          
         

        </div>
      </div>
      </div>
    </>
  )
}

export default Dashboard