import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'


function Header({insideDashBoard}) {

  const navigate = useNavigate()
  const logout = ()=>{
    sessionStorage.clear()
    navigate('/')
  }
  return (
    <>
      <Navbar style={{zIndex:'1'}} className="card top-0 position-fixed w-100">
    <Container>
      <Navbar.Brand>
        <Link style={{textDecoration:'none'}} to={'/'}><h3>marketPlace <i class="fa-solid fa-cart-shopping"></i></h3></Link>
      </Navbar.Brand>
     {
     insideDashBoard &&
     <div className="ms-auto">
        <button onClick={logout} className='btn btn-link'>Logout</button>
      </div>
      }
    </Container>
  </Navbar>
  </>
  )
}

export default Header