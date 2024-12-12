import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './OrderConfirmation.scss';

function OrderConfirmation() {
    const location = useLocation();
    const { orderId, paymentTime } = location.state || { orderId: null, paymentTime: null };

    return (
        <div className="oder-wrapper">
            <h2>Xác nhận đơn hàng</h2>
            <div className="oder-status">
                {orderId ? (
                    <>
                        <p>Trạng thái: {orderId}</p>
                        <p className="oder-date">Thời gian thanh toán: {paymentTime}</p>{' '}
                        {/* Hiển thị thời gian thanh toán */}
                        <Link to="/product">
                            <button>Tiếp tục mua hàng</button>
                        </Link>
                    </>
                ) : (
                    <p>Đã xảy ra lỗi khi tạo đơn hàng.</p>
                )}
            </div>
        </div>
    );
}

export default OrderConfirmation;
