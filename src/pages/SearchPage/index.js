import React, { useEffect, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CartContext } from '~/components/Cartcontext';
import './SearchPage.scss';
import axios from 'axios';

function SearchPage() {
    const query = new URLSearchParams(useLocation().search).get('query'); // Lấy query từ URL
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost/myapi/api.php?action=search&keyword=${query}`);
                console.log('Dữ liệu trả về từ API:', response.data);
                setFilteredProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        if (query) {
            fetchProducts();
        }
    }, [query]);

    return (
        <div className="products-search">
            <h2 className="search-title">Kết quả tìm kiếm cho: "{query}"</h2>
            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="product-search-card">
                            <Link to={`/product/${product.id}`}>
                                <img src={product.image} alt={product.name} className="product-image-search" />
                                <div className="product-search-left">
                                    <p className="product-search-name">{product.name}</p>
                                    <p className="product-search-price">{product.price}</p>
                                </div>
                            </Link>
                            <div className="product-search-right">
                                <button className="add_to_cart" onClick={() => addToCart(product)}>
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Không tìm thấy sản phẩm nào.</p>
                )}
            </div>
        </div>
    );
}

export default SearchPage;
