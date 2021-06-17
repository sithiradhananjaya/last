import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Rating from '../components/Rating';
import ImgSlide from './ImgSlide'

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  return (

    <>
    
    <ImgSlide />
    <span className="our-products-line"><div></div><h1 className="topic"><b>Our Products</b></h1><div></div></span>
    
      {category && <h2>{category}</h2>}

      <div className="filter">
        <div className="search-bar">
          <form onSubmit={submitHandler}>
            <input
              
              name="searchKeyword"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="sort-tab">
          <h3>Sort By</h3>{' '}
          <select className="selector" name="sortOrder" onChange={sortHandler}>
            <option value="">Newest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
      </div>

    

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="mycontainer">
          {products && products.length >0 && products.map((product) => (
            <div className="card" key={product._id}>
                <Link to={'/product/' + product._id}>
                <div 
                  className="crd-img"
                  style={{backgroundImage:`url('${product.image}')`}}
                 ></div>
                </Link>
              <div className="crd-details">
              <Link to={'/product/' + product._id}>
                <h2>{product.name}</h2>
                </Link>
                <h3 className="brand">{product.brand}</h3>
                <h3 className="price">LKR{product.price}</h3>
              <div className="product-rating">
                  <Rating
                    value={product.rating}
                    text={product.numReviews + ' reviews'}
                  />
              </div>
              </div>
            </div>
          ))}
        </div>

      )}
    </>
  );
}
export default HomeScreen;
