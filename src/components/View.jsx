import React, { useContext, useEffect, useState } from 'react'
import Edit from '../components/Edit'
import Add from '../components/Add'
import { getUserProjectsAPI, removeProjectAPI } from '../services/allAPI';
import Project from '../pages/Project'
import {addResponseContext, editResponseContext} from '../contexts/ContextAPI';


function View() {
  const {editResponse,setEditResponse} = useContext(editResponseContext)
  const {addResponse,setAddResponse} = useContext(addResponseContext)
  const [userProjects,setUserProjects] = useState([])

  console.log(userProjects);
  useEffect(()=>{
    getuserProjects()
  },[addResponse,editResponse])

  const getuserProjects = async ()=>{

    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try{
      const result = await getUserProjectsAPI(reqHeader)
      console.log(result);
      if(result.status==200){
        setUserProjects(result.data)
      }
    }catch(err){
      console.log(err);
    }
  }

  const  handleDeleteProject = async(projectId)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader={
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      }
      //api call
      const result = await removeProjectAPI(projectId,reqHeader)
      if(result.status==200){
        getuserProjects()
      }else{
        console.log(result);
      }
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between w-100">
        <h5>All Items,</h5>
        <button><Add/></button>
        </div>
       { userProjects?.length>0 ?
       userProjects?.map(Project=>(
        <div className="mt-4">
        <div className="d-flex justify-content-between border p-2 rounded">
          <h3>{Project?.title} </h3>
          <div className="icons d-flex">
            <div ><Edit Project={Project}/></div>
           <button onClick={(e)=> handleDeleteProject(Project?._id)} className='btn'> <i style={{color:'red'}} className="fa-solid fa-trash "></i></button>
          </div>
        </div>
        </div>
       ))
       
        :
        <div className='fw-bolder'>No Items added yet</div>
        }
      
    </>
  )
}

export default View