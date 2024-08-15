import React, { useState, useEffect } from 'react';
import { getProducts } from '../../Api/Api';
import { PropagateLoader } from 'react-spinners';
import './PrroductLists.css';

const PrroductLists = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const productFilter = products.filter((product) => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        if (data.length === 0) {
          setError("No products available.");
        } else {
          setProducts(data);
        }
      } catch (error) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="spinner-container"><PropagateLoader color="#3498db" /></div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="product-list-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
      <ul className="product-list">
        {productFilter.length > 0 ? (
          productFilter.map(product => (
            <li key={product.id} className="product-card">
              {product.image ? (
                <img src={product.image} alt={product.title} className="product-image" />
              ) : (
                <PropagateLoader color="#3498db" />
              )}
              <div className="product-details">
                <h2 className="product-title">{product.title}</h2>
                {/* <p className="product-description">{product.description}</p> */}
                <p className="product-price">${product.price}</p>
                <div className="product-actions">
                  <a href={`/product_description/${product.id}`}>
                    <button className="view-details-btn">View Details</button>
                  </a>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <div className="error-message">No products found.</div>
        )}
      </ul>
    </div>
  );
};

export default PrroductLists;
