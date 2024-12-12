// src/components/ProductCard/index.js
import React, { useContext, useState } from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { CartContext } from '../Cartcontext'; // Import CartContext
import Modal from '../Modal'; // Import Modal

function ProductCard({ product }) {
    const { addToCart } = useContext(CartContext); // Lấy hàm addToCart từ context
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setIsModalOpen(true); // Mở modal khi thêm vào giỏ hàng

        // Đặt thời gian đóng modal sau 1 giây
        setTimeout(() => {
            setIsModalOpen(false); // Đóng modal sau 1 giây
        }, 500);
    };

    return (
        <div className="wrapper">
            <div className="product_card">
                <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} className="product_image" />
                    <div className="product_left">
                        <p className="product_name">{product.name}</p>
                        <p className="product_price">{product.price}</p>
                    </div>
                </Link>
                <div className="product_right">
                    <button className="add_to_cart" onClick={handleAddToCart}>
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <Modal message="Sản phẩm đã được thêm vào giỏ hàng!" onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    );
}

export default ProductCard;
