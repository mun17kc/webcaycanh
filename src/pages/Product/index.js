import React, { useState } from 'react';
import Sidebar from '~/components/Layout/DefaultLayout/Sidebar';
import img3 from '../../asset/slider/th4.jpg';
import ProductCard from '~/components/ProductCard/index';
import products from '~/components/data/products';
import './Product.scss';

function Product() {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredProducts, setFilteredProducts] = useState(products); // Danh sách sản phẩm đã lọc

    // Hàm để lấy các sản phẩm theo trang
    const productsPerPage = 8;
    const currentProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage); // Sử dụng filteredProducts

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleFilterChange = (checkedItems) => {
        const selectedCategories = Object.keys(checkedItems).filter((key) => checkedItems[key]);

        const newFilteredProducts = products.filter((product) => {
            const categoryMatch =
                selectedCategories.length === 0 || selectedCategories.some((category) => product.category === category);

            const priceMatch = (() => {
                const price = parseInt(product.price.replace(/[^0-9]/g, '')); // Chuyển đổi giá thành số
                if (checkedItems.below50k && price < 50000) return true;
                if (checkedItems.between50k200k && price >= 50000 && price < 200000) return true;
                if (checkedItems.between200k400k && price >= 200000 && price < 400000) return true;
                if (checkedItems.between400k1m && price >= 400000 && price < 1000000) return true;
                if (checkedItems.above1m && price >= 1000000) return true;
                return false;
            })();

            return categoryMatch && priceMatch; // Chỉ cần categoryMatch và priceMatch
        });

        setFilteredProducts(newFilteredProducts);
        setCurrentPage(1); // Đặt lại trang khi thay đổi bộ lọc
    };
    return (
        <div className="main">
            <div className="product_content">
                <Sidebar
                    onFilterChange={handleFilterChange}
                    setFilteredProducts={setFilteredProducts}
                    setCurrentPage={setCurrentPage}
                />
                <div className="product_content_slide">
                    <img src={img3} alt="" className="product_anh1" />
                    <h2 className="content_title">TẤT CẢ SẢN PHẨM</h2>
                    <div className="sanpham">
                        {currentProducts.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                    <div className="product_page">
                        {/* Nút trang 1 */}
                        <button
                            className={`btn_product ${currentPage === 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(1)}
                        >
                            1
                        </button>
                        {/* Nút trang 2 */}
                        <button
                            className={`btn_product ${currentPage === 2 ? 'active' : ''}`}
                            onClick={() => handlePageChange(2)}
                        >
                            2
                        </button>
                        <button
                            className={`btn_product ${currentPage === 3 ? 'active' : ''}`}
                            onClick={() => handlePageChange(3)}
                        >
                            3
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
