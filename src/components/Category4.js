import React from 'react'
import "./css/Category4.css"


const products = [
    { id: 1, name: "Product 1", price: "$10", image: "product/product-1.webp" },
    { id: 2, name: "Product 2", price: "$20", image: "product/product-2.webp" },
    { id: 3, name: "Product 3", price: "$15", image: "product/product-3.webp" },
    { id: 4, name: "Product 4", price: "$25", image: "product/product-4.webp" },
  ];

export default function Category4() {
  return (
    <>
    <div className="main-section">
        <div className="header">
            <h2>Shop for</h2>
            <a href="/more">More Categories</a>
        </div>
        <div className="section-body">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} className="product-img" />
                    <div className="product-details">
                        <p className='product-name'>{product.name}</p>
                        <p className='product-price'>{product.price}</p>
                        <button className='add-to-cart'>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}
