import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({
    title: '',
    price: '',
    description: '',
    image: ''
  });

  // Fetch initial inventory data from the API
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setInventory(response.data);
      })
      .catch(error => {
        console.error('Error fetching inventory data:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prevItem => ({
      ...prevItem,
      [name]: value
    }));
  };

  const handleAddItem = () => {
    axios.post('https://fakestoreapi.com/products', newItem)
      .then(response => {
        setInventory(prevInventory => [...prevInventory, response.data]);
        setNewItem({
          title: '',
          price: '',
          description: '',
          image: ''
        });
      })
      .catch(error => {
        console.error('Error adding item:', error);
      });
  };

  const handleDeleteItem = (id) => {
    axios.delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        setInventory(prevInventory => prevInventory.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };

  return (
    
    <div className='container '>
         <Link to={'/'}><button className='btn btn-success rounded ms-2 mt-5'><i class="fa-solid fa-arrow-left"></i> HOME </button></Link>
      <h1 className='mt-5' style={{textAlign:'center',color:"green"}}>Inventory </h1>
      <table>
        <thead>
          <tr className='fw-bolder'>
            <th ><u>Title</u></th>
            <th ><u>Price</u></th>
            <th ><u>Description</u></th>
           
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                {/* <button style={{backgroundColor:'red'}} onClick={() => handleDeleteItem(item.id)}>Delete</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <hr /> */}
  {/* input */}
  
      {/* <div className='container' style={{textAlign:'center'}}>
        <h2 style={{textAlign:'center'}}>Add New Inventory</h2>
       
        <div>
          <label><i class="fa-solid fa-arrow-left"></i> Title:</label>
          <input className='form-control mt-5' style={{width:"600px"}} type="text" name="title" value={newItem.title} onChange={handleChange}  placeholder='enter title'/>
        </div>
        <div>
          <label><i class="fa-solid fa-arrow-left"></i> Price:</label>
          <input className='form-control mt-5'  style={{width:"600px"}} type="text" name="price" value={newItem.price} onChange={handleChange} placeholder='enter price' />
        </div>
        <div>
          <label><i class="fa-solid fa-arrow-left"></i> Description:</label>
          <input className='form-control mt-5' style={{width:"600px"}} type="text" name="description" value={newItem.description} onChange={handleChange}  placeholder='enter description'/>
        </div>
        <div>
          <label><i class="fa-solid fa-arrow-left"></i> Image:</label>
          <input className='form-control mt-5' style={{width:"600px"}} type="text" name="image" value={newItem.image} onChange={handleChange} placeholder='Add URl' />
        </div>
        <button className='form-control mt-5 btn btn-success'  onClick={handleAddItem}>Add Item</button>
      </div> */}
    </div>
  );
};

export default InventoryManagement;