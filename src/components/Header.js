import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <ul className="flex justify-center items-center gap-4 my-3 text-xl font-semibold">
          
          <li>
            <Link to="/addproducts">Add Products</Link>
          </li>
          <li>
            <Link to="/display">Display Products</Link>
          </li>
          <li>Mobile</li>
          <li>Todos</li>
          <li>Blog</li>
        </ul>
      </div>
    );
};

export default Header;