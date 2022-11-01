import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import AllProducts from './AllProducts';

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);
  useEffect(()=>{
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.data);
        } else {
          toast(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
  },[])
    return (
      <div>
        <h3 className="text-5xl font-bold text-primary">Products</h3>
        <div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <AllProducts product={product} key={product._id}></AllProducts>
            ))}
          
          </div>
        </div>
      </div>
    );
};

export default DisplayProducts;