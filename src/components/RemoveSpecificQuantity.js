import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// This component deals with removal of specific quantity of product
const RemoveSpecificQuantity = ({selectedItem, onSubmit}) => {
    const [name, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [currentStock1, setCurrentStock] = useState('');
    const [minimumStockLevel, setMinStock] =useState('');
    const [quantityToRemove, setquantityToRemove] =useState('');

    useEffect(() => {
        // Initialize state variables with selected item's data
        if (selectedItem) {
          setProductName(selectedItem.name);
          setDescription(selectedItem.description);
          setCurrentStock(selectedItem.currentStock);
          setMinStock(selectedItem.minimumStockLevel);
        }
      }, [selectedItem]);

      // function to handle the removal
    const handleQuantityRemoval = async (e) => {
        e.preventDefault();

        if(currentStock1 < quantityToRemove || quantityToRemove < 0){
          toast.error("Quantity to remove must be less than Current Stock and not less than 0");
            return null;
        }

        try{
          let a = currentStock1 - quantityToRemove;
          const currentStock = a;
          const token = localStorage.getItem('token');
          const response = await axios.put(`http://localhost:8080/api/product/${selectedItem.id}`,{name, description, currentStock, minimumStockLevel}, {
            headers: {
                  'Authorization': `Bearer ${token}`,
                  "Content-Type": "application/json"
              }
          });
          
          // // const response = await axios.put(`http://localhost:8080/api/removeStock/${selectedItem.id}/${quantityToRemove}`
          // const token = localStorage.getItem('token');
          // const response = await axios.put(`http://localhost:8080/api/removeStock/1/1`, {
          //   headers: {
          //         'Authorization': `Bearer ${token}`,
          //         "Content-Type": "application/json"
          //     }
          // });

          console.log(response.data);

          // Show success toast
        // toast.success(`Product id ${selectedItem.id} updated successfully`);
          
        //   Move to the "/allProducts" route
          window.location.href = '/allProducts';
          alert("Success, quantity removed");
        }
        catch(error){
            console.log(localStorage.getItem('token'))
            console.log(error.response.data.message, selectedItem.id);
            toast.error(" :Error! incorrect details please ensure you use positive numbers");
        }
    }
    

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     onSubmit({currentStock, minStock});
    // }

  return (
    <div>

      {/* This pop up will handle details of the product to be updated */}
        <ToastContainer />
        
        <div className="modal" tabindex="-1" id="removeQuantity">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Remove Specific Quantity</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
         {/* Login form  */}
                <form onSubmit={handleQuantityRemoval}>
                <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Product Name</label>
                        <input type="text" className="form-control" value={name} onChange={ (e) => setProductName(e.target.value)}  disabled/>
                         {/* <div id="emailHelp" classNameName="form-text">We'll never share your email with anyone else.</div> --> */}
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Product Description</label>
                        <input type="text" className="form-control" value={description} onChange={ (e) => setDescription(e.target.value)}  disabled/>
                         {/* <div id="emailHelp" classNameName="form-text">We'll never share your email with anyone else.</div> --> */}
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Current Stock <i>( Numerical Values only )</i></label>
                        <input type="number" className="form-control" value={currentStock1} onChange={ (e) => setCurrentStock(e.target.value)}  disabled/>
                         {/* <div id="emailHelp" classNameName="form-text">We'll never share your email with anyone else.</div> --> */}
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"> Minimum Stock amount <i>( Numerical Values only )</i></label>
                        <input type="number" className="form-control" value={minimumStockLevel} onChange={(e) => setMinStock(e.target.value)}  disabled/>
                         {/* <div id="emailHelp" classNameName="form-text">We'll never share your email with anyone else.</div> --> */}
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Quantity to remove <i>( Numerical Values only )</i></label>
                        <input type="number" className="form-control" value={quantityToRemove} onChange={ (e) => setquantityToRemove(e.target.value)}  required/>
                         {/* <div id="emailHelp" classNameName="form-text">We'll never share your email with anyone else.</div> --> */}
                    </div>

                    <div className="mb-3">
                        <p>
                            <i>Click Remove to complete action </i> 
                      </p>  
                    </div>
 

                    <div className="text-center">
                        <button type="button" className="btn btn-secondary m-3" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                        <button type="Submit" className="btn btn-danger m-3" name="login">Remove</button>
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

export default RemoveSpecificQuantity
