import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ItemCard from '../components/ItemCard'
import { getAllProjectsAPI } from '../services/allAPI'
import { Col, Row } from 'react-bootstrap'


function Project() {
  const [searchKey,setSearchKey] = useState("")
  const [allProjects,setAllProjects] = useState([])

console.log(allProjects);

  useEffect(()=>{
    getAllProjects()
  },[searchKey])

  const getAllProjects = async ()=>{
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try{
      const result = await getAllProjectsAPI(searchKey,reqHeader)
      console.log(result);
      if(result.status==200){
        setAllProjects(result.data)
      }
    }catch(err){
      console.log(err);
    }
  }


  return (

    <>
    <Header/>
    <div style={{marginTop:'150px'}} className='container-fluid '>
      <div className="text-align-center align-items-center">
        {/* <h4>All Products</h4> */}
        <input onChange={e=>setSearchKey(e.target.value)} className='form-control w-25 ms-5 mb-5' style={{textAlign:'center'}} type="text" placeholder='search by product name' />
      </div>
     <Row className="mt-3">
      {
        allProjects?.length>0?
        allProjects?.map(project=>(
          <Col key={project} className='mb-3' sm={12} md={6} lg={4}>
            <ItemCard displayData={project}/>
          </Col>
        ))
        :
        <div className="fw-bolder text-danger m-5 text-center">no items found</div>
      }
     </Row>
    </div>
    </>
  )
}

export default Project