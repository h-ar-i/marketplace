import React,{useState}  from 'react'
import { Card,Modal,Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import duke from '../assets/d200.jpeg'
import duke200 from '../assets/dukebs6.webp'
import { SERVER_URL } from '../services/serverUrl';


function ItemCard({displayData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <>
       <Card onClick={handleShow} className='shadow mb-5 ms-5 ' style={{ width: '18rem' }}>
      <Card.Img height={'200px'} src={` ${SERVER_URL}/uploads/${displayData?.projectImage}`} />

{/* carousel */}

      {/* <Carousel fade >
        <Carousel.Item>
          <img width={"100%"} height={"200px"} src={` ${SERVER_URL}/uploads/${displayData?.projectImage[0]}`} alt="" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"100%"} height={"200px"} src={` ${SERVER_URL}/uploads/${displayData?.projectImage[1]}`} alt="" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"100%"} height={"200px"} src={` ${SERVER_URL}/uploads/${displayData?.projectImage[2]}`}alt="" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"100%"} height={"200px"} src={` ${SERVER_URL}/uploads/${displayData?.projectImage[3]}`} alt="" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"100%"} height={"200px"} src="" alt="" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>       
      </Carousel> */}

      <Card.Body>
        <Card.Title>{displayData?.title}</Card.Title>
        <Card.Text>
         
        </Card.Text>
      </Card.Body>
    </Card>
   
    {/* modal */}
    
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src={` ${SERVER_URL}/uploads/${displayData?.projectImage}`}alt="" />
            </div>
            <div className="col-lg-6">
            <h3>{}</h3>
              <h6><span className='fw-bolder'>Location</span>:{displayData?.location}</h6>
              <p style={{textAlign:'justify'}}> <span className='fw-bolder'>{displayData?.overview} :- </span></p>
            </div>
          </div>
        </Modal.Body>
        <hr />
        <Modal.Footer> 
          <p>click here to chat !</p>
          <Link to={'https://www.facebook.com/messenger/'} target='_blank' variant="secondary" onClick={handleClose}>
          <i class="fa-brands fa-facebook-messenger"></i>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ItemCard