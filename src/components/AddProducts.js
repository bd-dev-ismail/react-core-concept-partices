import React from 'react';

const AddProducts = () => {
    return (
      <div>
        <h3>Please Add a Products</h3>
        <div>
          <div className="hero bg-base-200">
            <div className="hero-content">
    
              <div className="card  w-full  shadow-2xl bg-base-100">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Name</span>
                    </label>
                    <input
                    name='product'
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
                    name='quantity'
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
                    name='image'
                      type="text"
                      placeholder="Image URL"
                      className="input input-bordered"
                    />
                    </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Product</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddProducts;