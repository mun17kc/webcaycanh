import React from 'react';


import img1 from '../../asset/slider/banner3.jpg';
import './Introduce.scss';
function Introduce() {
    return (
        <div className="intro_wrapper">
            <div className="intro_container">
                <div className="intro_left">
                    <img src={img1} alt="banner" className="left_intro_img"></img>
                </div>
                <div className="intro_right">
                    
                    <h2 className="intro_tilte">Giới thiệu</h2>
                    <div className="lorem_intro">
                        <p className="p_intro">
                        Shop Cây Cảnh Nhà Mun tự hào là điểm đến lý tưởng cho những ai yêu thích thiên nhiên và muốn mang không gian xanh vào ngôi nhà của mình. Chúng tôi cam kết cung cấp những loại cây cảnh chất lượng, tươi tốt, giúp bạn tạo nên một môi trường sống trong lành và đầy sức sống.
                        </p>
                        <p className="p_intro">
                        Tại Nhà Mun, bạn sẽ khám phá một bộ sưu tập đa dạng các loại cây cảnh, từ những loại cây nhỏ xinh để bàn làm việc cho đến các cây lớn, phù hợp với không gian sống rộng rãi. Tất cả sản phẩm đều được chọn lọc kỹ càng từ những nguồn cung ứng uy tín, đảm bảo an toàn và dễ chăm sóc.
                        </p>
                        <p className="p_intro">
                        Chúng tôi không chỉ cung cấp cây cảnh, mà còn chia sẻ kiến thức hữu ích về cách chăm sóc và bảo quản cây, giúp bạn trở thành một người yêu cây cảnh thực thụ. Đội ngũ nhân viên nhiệt tình và giàu kinh nghiệm của chúng tôi luôn sẵn sàng hỗ trợ bạn trong hành trình tìm kiếm và chăm sóc những người bạn xanh.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduce;
