import React, { useEffect, useState } from 'react'
import CreateProduct from './CreateProduct';
import UpdateProduct from './UpdateProduct';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RemoveSpecificQuantity from './RemoveSpecificQuantity';

// All Products will show here states are used to track every change a product takes
const AllProducts = () => {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        // console.log(typeof(token));

        // make an api request to get all details
        if (token) {
            fetch('http://localhost:8080/api/allProducts', {
                headers: {
                    'Authorization': `Bearer ${""}`,
                    // "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));

        }
    }, []);


    // functio to handle product deletion
    const handleProductDelete = async(item1) => {
        console.log(item1);

            try{
            const token = localStorage.getItem('token');
                const response = await axios.delete(`http://localhost:8080/api/product/${item1}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            console.log(response.data);
                // Show success toast
            
            // Move to the "/allProducts" route
            window.location.href = '/allProducts';
            alert("Product id "+ item1+" deleted successfully");
            }
            catch(error){
                console.log(error.response.data.message);
                toast.error(`"Error! incorrect details please ensure you use positive numbers"`);
            }
    }

    // this is a test function
    const handleProductUpdate = (item1) => {
        setSelectedItem(item1);
    }

    // this is a test function
    const handleUpdateSubmit = (updatedData) => {

        console.log('Updating item:', selectedItem);
        console.log('Updated data:', updatedData);
        // Close the modal
        // setShowModal(false);
    };

    // this is a test function
    const handleProductCreation = () => {

    }

// jsx code to show table of all products and the actions for each product
  return (
    <div>
        <ToastContainer />
        <div className='position-relative float-end'>
            <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#createProduct">
                Add Product
            </button>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">SR:No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Current Stock</th>
                    <th scope="col">Minimum stock amount</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>

            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                    <td>{index +1 +"."}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.currentStock}</td>
                    <td>{item.minimumStockLevel}</td>
                    <td>
                        <div className=''>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateProduct" onClick={ () => handleProductUpdate(item)}>
                                Update
                            </button>
                            <button type="button" className="btn btn-warning m-3 mt-0 mb-0" data-bs-toggle="modal" data-bs-target="#removeQuantity" onClick={ () => handleProductUpdate(item)}>
                                Remove Specific Quantity
                            </button>
                            <button className='btn btn-danger m-3 mt-0 mb-0' onClick={ () => handleProductDelete(item.id)}>Delete</button>
                        </div>
                        
                    </td>
                    
                    
                    </tr>
                ))}
                </tbody>
        </table>

        {/* <div className='position-relative float-end'>
            <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#createProduct">
                Add Product
            </button>
        </div> */}

        {/* Pass selectedItem and handleUpdateSubmit as props to the popup component */}
      {<UpdateProduct selectedItem={selectedItem} onSubmit={handleUpdateSubmit} />}
      {<RemoveSpecificQuantity selectedItem={selectedItem} onSubmit={handleUpdateSubmit} />}
      {<CreateProduct onSubmit={handleProductCreation} />}


    </div>

    
  )
}

export default AllProducts
