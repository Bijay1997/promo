import React from 'react'
import "./Sizes.css";
import {useDispatch, useSelector} from "react-redux";
import { filterProducts } from '../../redux/actions/productActions';

const Sizes = () => {
    const sizes = useSelector((state) => state.allProducts.size);
    const dispatch = useDispatch();
    // const handleChange=(e) => {
    //     const { sizes, selected} = e.target;
    //    let  sizeOptions = sizes.map(allProducts === filterProducts
    //      ? {...sizes, isSelected : selected}: sizes)
    // }

  return (
    <div>
        <h1>Sizes:</h1>
        <ul className="sizeButton" 
        // onChange={handleChange}
        >{["XS","S","M","ML","L","XL","XXL"].map((e) => (
            <button className={sizes === e ? "clicker selected" : "clicker"}
            key={e}
            onClick={() => dispatch(filterProducts(e))}>
                {e}
            </button>
        ))}
            </ul>
        
        </div>
  )
}

export default Sizes