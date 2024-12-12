import React from 'react';

import { Link } from 'react-router-dom';

import ProductCard from '~/components/ProductCard/index';
import products from '~/components/data/products';
import img1 from '../../asset/slider/th.jpg';
import img2 from '../../asset/slider/th3.jpg';
import './Home.scss';

function Home() {
    return (
        <div className="wrapper">
            <div className="content">
                <div className="slider"></div>
                <div className="anh_nen">
                    <div className="anh_nen_1">
                        <img src={img1} alt="" />
                    </div>
                    <div className="anh_nen_2">
                        <img src={img2} alt="" />
                    </div>
                </div>
                <h2>SẢN PHẨM CỦA CHÚNG TÔI</h2>
                <div className="product">
                    {products.slice(0, 10).map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
                <div className="slider_2"></div>
                <h2>BEST SELLER</h2>
                <div className="product">
                    {products.slice(0, 5).map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
                <div className="slider_3">
                    
                    <Link to="/product" className="button_sub">
                        Xem ngay
                    </Link>
                </div>
                <h2>SẢN PHẨM MỚI</h2>
                {products.slice(10, 20).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Home;
