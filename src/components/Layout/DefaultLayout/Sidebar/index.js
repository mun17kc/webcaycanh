import React, { useState } from 'react';

import './Sidebar.scss';
function Sidebar({ onFilterChange, setCurrentPage }) {
    const [checkedItems, setCheckedItems] = useState({
        fruit: false,
        vegetables: false,
        meat: false,
        dryFood: false,
        dessert: false,
        below50k: false,
        between50k200k: false,
        between200k400k: false,
        between400k1m: false,
        above1m: false,
        size1: false,
        size15: false,
        size2: false,
    });

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;

        const newCheckedItems = {
            ...checkedItems,
            [id]: checked,
        };

        setCheckedItems(newCheckedItems);
        onFilterChange(newCheckedItems); // Gọi hàm lọc với trạng thái mới
        setCurrentPage(1); // Đặt lại trang khi thay đổi bộ lọc
    };
    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <h3>Danh mục sản phẩm</h3>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            id="fruit"
                            checked={checkedItems.fruit}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="fruit">cây để bàn </label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="vegetables"
                            checked={checkedItems.vegetables}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="vegetables">cây trồng </label>
                    </li>
                    <li>
                        <input type="checkbox" id="meat" checked={checkedItems.meat} onChange={handleCheckboxChange} />
                        <label htmlFor="meat">đồ phụ kiện </label>
                    </li>
                  
                  
                </ul>
            </div>

            <div className="sidebar-section">
                <h3>Thương hiệu</h3>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            id="farmer"
                            checked={checkedItems.farmer}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="farmer">munC</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="bachHoa"
                            checked={checkedItems.bachHoa}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="bach-hoa">Bách Hóa Xanh</label>
                    </li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3>Giá sản phẩm</h3>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            id="below50k"
                            checked={checkedItems.below50k}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="below-50k">Dưới 50,000đ</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="between50k200k"
                            checked={checkedItems.between50k200k}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="50k-200k">50,000đ - 200,000đ</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="between200k400k"
                            checked={checkedItems.between200k400k}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="200k-400k">200,000đ - 400,000đ</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="between400k1m"
                            checked={checkedItems.between400k1m}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="400k-1m">400,000đ - 1,000,000đ</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id=" above1m"
                            checked={checkedItems.above1m}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="above-1m">Trên 1,000,000đ</label>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3>Kích thước</h3>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            id="size1"
                            checked={checkedItems.size1}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="size1">nhỏ</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="size15"
                            checked={checkedItems.size15}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="size2">trung bình</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="size2"
                            checked={checkedItems.size2}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="size3">lớn</label>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
