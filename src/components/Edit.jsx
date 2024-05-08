import React,{useContext, useEffect, useState} from 'react'
import { Button, Modal } from 'react-bootstrap'
//import uploadImg from '../assets/uploadImg.jpg'
import upload from '../assets/upload.gif'
import { SERVER_URL } from '../services/serverUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProjectAPI } from '../services/allAPI';
import { editResponseContext } from '../contexts/ContextAPI';



function Edit({Project}) {
  const {editResponse,setEditResponse} = useContext(editResponseContext)
  const [projectData,setProjectdata] = useState({
    id:Project?._id,title: Project?.title, location: Project?.location, overview: Project?.overview, projectImage:""
  })
  const [preview,setPreview] = useState("")
  
  const [show, setShow] = useState(false);
  useEffect(()=>{
    if(projectData.projectImage){
      setPreview(URL.createObjectURL(projectData.projectImage))
    }else{
      setPreview("")
    }
  },[projectData.projectImage])

  const handleClose = () => {
    setShow(false);
    setProjectdata({id:Project?._id,title: Project?.title, location: Project?.location, overview: Project?.overview, projectImage:""})
    setPreview("")
  }
  const handleShow = () => {
    setShow(true);

    setProjectdata({id:Project?._id,title: Project?.title, location: Project?.location, overview: Project?.overview, projectImage:""})
  }

  const handleUpdateProject = async ()=>{
    const {title,location,overview,projectImage} = projectData
    if(!title || !location || !overview ){
      toast.warning("please fill the form completely")
    }else{
      ///api call
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("location", location)
      reqBody.append("overview", overview)
      preview?reqBody.append("projectImage", projectImage):reqBody.append("projectImage",Project.projectImage)
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader={
          "Content-Type": preview?"multipart/form-data":"application/json",
          "Authorization": `Bearer ${token}`
        }
        //api call
        try{
          const result = await editProjectAPI(projectData.id,reqBody,reqHeader)
          console.log(result);
          if(result.status==200){
            handleClose()
            //pass response to view
            setEditResponse(result)
          }else{
            console.log(result.response);
          }
        }catch(err){
          console.log(err);
        }
      }
    }
  }
  return (
    <>
    <button onClick={handleShow} className='btn '><i class="fa-solid fa-pen-to-square"></i></button>
    <Modal
        size='lg'
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Edit Item details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
          <div className="col-lg-4">
            <label>
              <input onChange={e=>setProjectdata({...projectData,projectImage:e.target.files[0]})} type="file"  style={{display:'none'}}/>
              <img height={'200px'} className='img-fluid' src={preview?preview:`${SERVER_URL}/uploads/${Project?.projectImage}`} alt="" />
            </label>
          </div>
          <div className="col-lg-8">
            <div className='mt-4'>
            <input value={projectData.title} onChange={e=>setProjectdata({...projectData,title:e.target.value})} className='form-control mb-2' type="text" placeholder='Item name' />
            </div>
            <div className='mt-4`'>
            <input value={projectData.location} onChange={e=>setProjectdata({...projectData,location:e.target.value})}  className='form-control mb-2' type="text" placeholder='Location' />
            </div>
              <div className='mt-4'>
              <input  value={projectData.overview} onChange={e=>setProjectdata({...projectData,overview:e.target.value})}  className='form-control m' type="text" placeholder='Overview' />

              </div>


          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpdateProject} variant="success">Save</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />

    </>
  )
}

export default Edit