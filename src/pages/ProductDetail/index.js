// src/pages/ProductDetail/index.js
import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '~/components/data/products';
import { CartContext } from '~/components/Cartcontext'; // Nhập CartContext
import Modal from '~/components/Modal'; // Import Modal
import './ProductDetail.scss';

function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext); // Lấy hàm addToCart từ context
    const [isModalOpen, setIsModalOpen] = useState(false); // State cho modal

    if (!product) {
        return <div>Không tìm thấy sản phẩm!</div>;
    }

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };
    // xử lý thay đổi giá trị
    const handleChange = (e) => {
        const value = Math.max(1, Number(e.target.value) || 1);
        setQuantity(value);
    };

    const handleAddToCart = () => {
        addToCart({ ...product, quantity }); // Thêm sản phẩm vào giỏ hàng
        setIsModalOpen(true); // Mở modal khi thêm vào giỏ hàng

        // Đặt thời gian đóng modal sau 1 giây
        setTimeout(() => {
            setIsModalOpen(false); // Đóng modal sau 1 giây
        }, 500);
    };

    return (
        <div className="product-detail">
            <div className="product-detail-content">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">{product.price}</p>
                    <p className="product-description">{product.description}</p>
                    <div className="product-mass">
                        <h5>
                            Khối lượng: <span>trungbinh</span>
                        </h5>
                    </div>
                    <h5>Số lượng</h5>
                    <div className="product-quantity">
                        <input type="button" value="-" className="btn-quantity-decrease" onClick={handleDecrease} />
                        <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            value={quantity} // Giá trị từ state
                            min="1"
                            className="quantity-selector"
                            onChange={handleChange} // Hàm xử lý thay đổi giá trị
                        />
                        <input type="button" value="+" className="btn-quantity-increase" onClick={handleIncrease} />
                    </div>
                    <button className="btn-add-cart" onClick={handleAddToCart}>
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

export default ProductDetail;
