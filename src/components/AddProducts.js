import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddProducts = () => {
  const [products, setProducts] = useState({})
  // console.log(products);
  const handalAdd = (e) =>{
    e.preventDefault();
    fetch("http://localhost:5000/products",{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(products)
    }).then(res=> res.json())
    .then(data => {
      console.log(data);
      if(data.success){
        toast.success(data.message);
        e.target.reset();
      }else{
        toast.error(data.error)
      }
    })
    .catch(err =>{
      toast.error(err.message)
    })
  }
  const handalBlur = (e)=>{
    const field = e.target.name;
    const name = e.target.value;
    const newProducts = {...products};
    newProducts[field] = name;
    setProducts(newProducts);
  }
    return (
      <div>
        <h3>Please Add a Products</h3>
        <div>
          <div className="hero bg-base-200">
            <div className="hero-content">
              <div className="card  w-full  shadow-2xl bg-base-100">
                <form onSubmit={handalAdd} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Name</span>
                    </label>
                    <input
                      onBlur={handalBlur}
                      required
                      name="name"
                      type="text"
                      placeholder="Product"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Quantity</span>
                    </label>
                    <input
                      onBlur={handalBlur}
                      required
                      name="quantity"
                      type="text"
                      placeholder="Quantity"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Image URL</span>
                    </label>
                    <input
                      onBlur={handalBlur}
                      required
                      name="image"
                      type="text"
                      placeholder="Image URL"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Product</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddProducts;