import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ItemCard from '../components/ItemCard'
import Auth from './Auth'
import angle from '../assets/angel.webp'
import { Button, Carousel } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHomeProjectsAPI } from '../services/allAPI'
import Project from './Project'

function Home() {
  const [homeProjects,setHomeProjects] = useState([])
  const navigate = useNavigate()
  const [loginStatus, setLoginStatus] = useState(false)
  console.log(homeProjects);
  useEffect(() => {
    getHomeProjects()
    if (sessionStorage.getItem("token")) {
      setLoginStatus(true)
    } else {
      setLoginStatus(false)
    }
  }, [])

  const handleProject = ()=>{
    if(loginStatus){
      navigate('/project')
    }else{
      toast.warning("please login for the page access")
    }
  }

const getHomeProjects =  async ()=>{
  try{
    const result = await getHomeProjectsAPI()
    console.log(result);
    if(result.status==200){
      setHomeProjects(result.data)
    }
  }catch(err){
    console.log(err);
  }
}

  return (
    <>
      {/* <div style={{ textAlign: 'center' }} className="d-flex-justify-content-between mt-2">
        <h5>Hey boss <i class="fa-regular fa-hand fa-shake"></i></h5>
      </div> */}
      {/* sidebar */}
      <div class="sidenav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>
      {/* maind */}
      <div class="main">

      <Link to={'/Test'}><button className='btn btn-success rounded ms-2 mt-5'>Upcoming <i class="fa-solid fa-arrow-right"></i></button></Link>

        <div style={{ minHeight: '100vh' }} className="w-100 d-flex justify-content-center align-items-center rounded">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h3>marketPlace <i class="fa-solid fa-cart-shopping"></i></h3>
                <p><span style={{ color: 'red' }}> For Those Who always keeps backup plans</span> Best Place  to buy used items with amazing deals on live and trustworthy sellers and buyers, go for what you need we have every best second options for you.Happy shopping. </p>
                {loginStatus ?
                  <Link to={'/dashboard'} className='btn btn-warning '>Arrange Items</Link>
                  :
                  <Link to={'/login'} className='btn btn-warning '>Start To Explore</Link>
                }
              </div>
             
              <div className="col-lg-6">
                {/* .colr baar */}
                {/* <div class="icon-bar">
                  <a href="#" class="facebook"><i class="fa-brands fa-facebook"></i></a>
                  <a href="#" class="twitter"><i class="fa-brands fa-x-twitter"></i></a>
                  <a href="#" class="google"><i class="fa-brands fa-google"></i></a>
                  <a href="#" class="linkedin"><i class="fa-brands fa-linkedin"></i></a>
                  <a href="#" class="youtube"><i class="fa-brands fa-youtube"></i></a>
                </div> */}

                <div class="content">
                  <img src={angle} alt="" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      {/* showing project */}
      <div className="mt-5">
        <h3 className="text-center mb-5">Explore Items</h3>
        <div className="d-flex">
          <div className="me-5">
            {/* <ItemCard /> */}
          </div>
        </div>
      </div>
      {/* carosel */}
      <Carousel fade >
        <Carousel.Item>
          <img width={"100%"} height={"650px"} src="https://img.freepik.com/free-photo/view-wheel-car-running-high-speed_23-2150635399.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1713225600&semt=ais" alt="" />
          <Carousel.Caption>
            <h2 style={{ fontSize: "40px" }} className='text-white fw-bolder ' > wide range of Exotic Cars.</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"100%"} height={"650px"} src="https://external-preview.redd.it/kuE0JgbsFhXTMH3_NBaWvuHDtHlpLpe6MhdHN0sXXAU.jpg?auto=webp&s=dfb62a2e143a551525c12543a095f54c39eb6a3a" alt="" />
          <Carousel.Caption>
            <h2 style={{ fontSize: "80px" }} className='text-white fw-bolder ' >Galaxy S23 ULTRA</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"100%"} height={"650px"} src="https://i.pinimg.com/originals/1c/11/92/1c119213485d12e420e0a0b119a300cd.jpg" alt="" />
          <Carousel.Caption>
            <h2 style={{ fontSize: "80px" }} className='text-white fw-bolder ' >Sting LIke A bee</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"100%"} height={"650px"} src="https://cdn.wallpapersafari.com/1/31/aqAu5w.jpg" alt="" />
          <Carousel.Caption>
            <h2 style={{ fontSize: "80px" }} className='text-white fw-bolder ' ></h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"100%"} height={"650px"} src="https://images.unsplash.com/photo-1526648856597-c2b6745ad7bd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2glMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D" alt="" />
          <Carousel.Caption>
            <h2 style={{ fontSize: "80px" }} className='text-white fw-bolder ' >MOVE IN STYLE</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"100%"} height={"650px"} src="https://wallpapers.com/images/featured/beautiful-fashion-147jq1wgairhtvzi.jpg" alt="" />
          <Carousel.Caption>
            <h2 style={{ fontSize: "80px" }} className='text-white fw-bolder ' >Be in your TRUE potential</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/*view more  */}
      <div className='text-center mt-5'>
        <div className="d-flex">
        { homeProjects?.length>0 &&
         homeProjects.map(Project=>(
          <div key={Project} className="me-5">
          <ItemCard displayData={Project} />
          </div>
         ))
          }
        </div>
        
        {/* <button style={{ textAlign: 'center' }} className='btn btn-link'>click here to view more....</button> */}
        <button onClick={handleProject} className='btn btn-primary border border-3'>EXPLORE</button>
        <ToastContainer position='top-center' theme='colored' autoClose={3000} />

      </div>
    </>
  )
}

export default Home