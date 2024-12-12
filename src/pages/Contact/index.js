import React from 'react';

import { RiMapPin2Fill } from 'react-icons/ri';
import { FaPhoneFlip } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import './Contact.scss';
function Contact() {
    return (
        <div className="contact_wrapper">
            <div className="contact_container">
                <div className="contact_gg_map"></div>
                <div className="contact_container_info">
                    <div className="contact_left">
                        <h2 className="contact_h2">GỬI THẮC MẮC CHO CHÚNG TÔI</h2>
                        <form>
                            <div className="contact_input">
                                <label>Họ và tên</label>
                                <input type="text" placeholder="Nhập họ và tên"></input>
                            </div>
                            <div className="contact_input">
                                <label>Số điện thoại</label>
                                <input type="number" placeholder="Nhập số điện thoại của bạn"></input>
                            </div>
                            <div className="contact_input">
                                <label>Email</label>
                                <input type="email" placeholder="Nhập email của bạn"></input>
                            </div>
                            <div className="contact_input">
                                <label>Nội dung</label>
                                <textarea placeholder="Nội dung"></textarea>
                            </div>
                            <div className="contact_button">
                                <button className="contact_btn">Gửi nội dung </button>
                            </div>
                        </form>
                    </div>
                    
                    <div className="contact_right">
                        <h2 className="contact_h1">THÔNG TIN LIÊN HỆ</h2>
                        <div className="contact_info">
                            <ul className="contact_info_list">
                                <i className="contact_street">
                                    <RiMapPin2Fill />
                                </i>
                                <label>Địa chỉ</label>
                                <p>566 Núi Thành, Quận hải Châu, Thành phố Đà Nẵng</p>
                            </ul>
                            <ul className="contact_info_list">
                                <i className="contact_street">
                                    <FaPhoneFlip />
                                </i>
                                <label>Số điện thoại</label>
                                <p>033066959</p>
                            </ul>
                            <ul className="contact_info_list">
                                <i className="contact_street">
                                    <MdEmail />
                                </i>
                                <label>Email</label>
                                <p>nguyenthikimcam1@gmail.com</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
