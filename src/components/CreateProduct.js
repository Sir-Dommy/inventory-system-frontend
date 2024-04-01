import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// This component handles product creation using states to track changes on the product
const CreateProduct = ({selectedItem, onSubmit}) => {
    const [name, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [currentStock, setCurrentStock] = useState('');
    const [minimumStockLevel, setMinStock] =useState('');

    useEffect(() => {

        // Initializing state variables with selected item's data
        if (selectedItem) {
          setProductName(selectedItem.name);
          setDescription(selectedItem.description);
          setCurrentStock(selectedItem.currentStock);
          setMinStock(selectedItem.minimumStockLevel);
        }
      }, [selectedItem]);

      // function to handle product creation calling a post url
    const handleProductCreation = async (e) => {
        e.preventDefault();

        try{
          const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:8080/api/product',{name, description, currentStock, minimumStockLevel}, {
            headers: {
                  'Authorization': `Bearer ${token}`,
                  "Content-Type": "application/json"
              }
          });
          if(response.data){
            alert("Product Created Successfully");
          }

          // Move to the "/allProducts" route
          window.location.href = '/allProducts';
        }
        catch(error){
          toast.error(`"Error! incorrect details please ensure you use positive numbers"`);
        }
    }
    

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     onSubmit({currentStock, minStock});
    // }

    // jsx to handle ui for product creation
  return (
    <div>
      <ToastContainer />
        {/* This pop up will handle details of the product to be updated */}
        <div className="modal" tabindex="-1" id="createProduct">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Product Creation</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
         {/* Login form  */}
                <form onSubmit={handleProductCreation}>
                <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Product Name</label>
                        <input type="text" className="form-control" value={name} onChange={ (e) => setProductName(e.target.value)}  required/>
                         {/* <div id="emailHelp" classNameName="form-text">We'll never share your email with anyone else.</div> --> */}
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Product Description</label>
                        <input type="text" className="form-control" value={description} onChange={ (e) => setDescription(e.target.value)}  required/>
                         {/* <div id="emailHelp" classNameName="form-text">We'll never share your email with anyone else.</div> --> */}
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Current Stock <i>( Positive Numerical Values only )</i></label>
                        <input type="number" className="form-control" value={currentStock} onChange={ (e) => setCurrentStock(e.target.value)}  required/>
                         {/* <div id="emailHelp" classNameName="form-text">We'll never share your email with anyone else.</div> --> */}
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"> Minimum Stock amount <i>(Positive Numerical Values only )</i></label>
                        <input type="number" className="form-control" value={minimumStockLevel} onChange={(e) => setMinStock(e.target.value)}  required/>
                         {/* <div id="emailHelp" classNameName="form-text">We'll never share your email with anyone else.</div> --> */}
                    </div>

                    <div className="mb-3">
                        <p>
                            <i>Click create to complete the process of creating a product </i> 
                      </p>  
                    </div>
 

                    <div className="text-center">
                        <button type="button" className="btn btn-secondary m-3" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                        <button type="Submit" className="btn btn-primary m-3" name="login">Create</button>
                    </div>
                    
                </form>

              </div>
              <div className="modal-footer">
                    <p className="text-success mr-1"><i>With you in every step of inventory management</i></p>
              </div>
            </div>
          </div>
        </div>


        
    </div>
  )
}

export default CreateProduct
