import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import uploadImg from '../assets/uploadImg.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../services/allAPI';
import { addResponseContext } from '../contexts/ContextAPI';


function Add() {
  const {addResponse,setAddResponse} = useContext(addResponseContext)
  const [preview, setPreview] = useState("")
  const [imageFileStatus, setImageFileStatus] = useState(false)
  const [projectdetails, setProjectDetails] = useState({
    title: "", location: "", overview: "", projectImage: ""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setProjectDetails({ title: "", location: "", overview: "", projectImage: "" })
  }
  const handleShow = () => setShow(true);
  console.log(projectdetails);

  useEffect(() => {
    if (projectdetails.projectImage.type == "image/webp" || projectdetails.projectImage.type == "image/png" || projectdetails.projectImage.type == "image/jpeg" || projectdetails.projectImage.type == "image/jpg" || projectdetails.projectImage.type == "image/svg") {
      setImageFileStatus(true)
      setPreview(URL.createObjectURL(projectdetails.projectImage))
    } else {
      setPreview(uploadImg)
      setImageFileStatus(false)
      setProjectDetails({ ...projectdetails, projectImage: "" })
    }
  }, [projectdetails.projectImage])


  const handleUploadProject = async () => {
    const { title, location, overview, projectImage } = projectdetails
    if (!title || !location || !overview || !projectImage) {
      toast.warning("please fill the form completely")
    } else {
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("location", location)
      reqBody.append("overview", overview)
      reqBody.append("projectImage", projectImage)

      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }

        //api call
     try{
         const result = await addProjectAPI(reqBody,reqHeader)
       console.log(result);
       if(result.status==200){
        toast.success(`'${result.data.title}' has added successfully`)
        setAddResponse(result)
        handleClose()
       }else{
        toast.warning(result.response.data)
       }
      }catch(err){
        console.log(err);
      }
      }
    }
  }


  return (
    <>
      <button onClick={handleShow} className='btn btn-success rounded'>ADD NEW</button>
      <Modal
        size='lg'
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Item details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{ display: 'none' }} onChange={e => setProjectDetails({ ...projectdetails, projectImage: e.target.files[0] })} />
                <img height={'200px'} className='img-fluid' src={preview} alt="" />
              </label>
              {!imageFileStatus && <div className="fw-bolder my-2">*Upload following types only (jpeg,png,jpg,svg)</div>}
            </div>
            <div className="col-lg-8">
              <div className='mt-4'>
                <input className='form-control mb-2' type="text" placeholder='Item name' value={projectdetails.title} onChange={(e) => setProjectDetails({ ...projectdetails, title: e.target.value })} />
              </div>
              <div className='mt-4`'>
                <input className='form-control mb-2' type="text" placeholder='Location' value={projectdetails.location} onChange={(e) => setProjectDetails({ ...projectdetails, location: e.target.value })} />
              </div>
              <div className='mt-4'>
                <input className='form-control m' type="text" placeholder='Overview' value={projectdetails.overview} onChange={(e) => setProjectDetails({ ...projectdetails, overview: e.target.value })} />

              </div>


            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploadProject} variant="success">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />

    </>
  )
}

export default Add