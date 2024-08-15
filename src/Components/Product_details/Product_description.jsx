import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../Api/Api';
import './ProductDescription.css'; 
import { PropagateLoader } from 'react-spinners';

const Product_description = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const data = await getProductById(id);
                if (data) {
                    setProduct(data);
                } else {
                    setError("Product not found.");
                }
            } catch (error) {
                setError("Failed to fetch product details.");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, []);

    if (loading) return <div className="spinner-containers"><PropagateLoader color="#3498db" /></div>;
    if (error) return <div className="error-messages">{error}</div>;



    return (
        <div className="product-description-containers">
            <h1 className="product-titles">{product.title}</h1>
            {product.image && (
                <img src={product.image} alt={product.title} className="product-images" />
            )}
            <p className="product-descriptions">{product.description}</p>
        </div>
    );
};

export default Product_description;
