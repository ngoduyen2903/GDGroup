import React from "react";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import { ImMenu } from "react-icons/im";
import { BiSolidPhoneCall } from "react-icons/bi";
import CarouselImage1 from "../../img/carousel/slide1.jpg";
import CarouselImage2 from "../../img/carousel/slide2.jpg";
import CarouselImage3 from "../../img/carousel/slide3.jpg";
import CarouselImage4 from "../../img/carousel/slide4.jpg";
import TranhAnh from "../../img/Menu/TranhAnh.jpg";
import ThietBiDayHoc from "../../img/Menu/ThietBiDayHoc.jpg";
import ThietBiDungChung from "../../img/Menu/ThietBiDungChung.jpg";
import Slider from "react-slick";
import Post1 from "../../img/Post/Post1.jpg";
import Post2 from "../../img/Post/Post2.jpg";
import Post3 from "../../img/Post/Post3.jpg";
import Post4 from "../../img/Post/Post4.jpg";
import Check from "../../img/reading-book.png";
import Book2Icon from "../../img/open-book.png";
import { PiBookOpenTextThin } from "react-icons/pi";
import { BsCheck2Circle } from "react-icons/bs";
const HeThong = () => {
    return (
        <div>
            {/* <div class="container">
                <nav class="biolife-nav">
                    <ul>
                        <li class="nav-item"><a href="index-2.html" class="permal-link">Trang chủ</a></li>
                        <li class="nav-item"><span class="current-page">Giới thiệu</span></li>
                    </ul>
                </nav>
            </div> */}
            <div class="page-contain blog-page left-sidebar">
                <div class="container">
                    <div class="row">
                        <div id="main-content" class="main-content col-lg-9 col-md-8 col-sm-12 col-xs-12">
                            <div class="single-post-contain">
                                <div class="post-head">
                                    <h2 class="post-name">Hệ thống & Lĩnh vực hoạt động</h2>
                                    <div class="thumbnail">
                                        <p class="post-archive">Hệ thống của chúng tôi đã có mặt trên 4 vùng miền và Tư vấn, cung cấp sản phẩm trên phạm vi toàn quốc:</p><br />
                                        <figure><img src="assets/images/about-img.jpg" width="870" height="635" alt="" /></figure>
                                    </div>
                                </div>
                                <div class="post-content">
                                    <p class="post-archive">Hệ thống chúng tôi là đơn vị chuyên:</p>
                                    <blockquote>
                                        <ul>
                                            <li><p>Gia công, sản xuất nội thất học đường (bàn ghế, bảng từ, tủ kệ,...)</p></li>
                                            <li><p>Sản xuất thiết bị dạy học tối thiểu các cấp từ Mầm non đến Trung học phổ thông theo chương trình mới.</p></li>
                                            <li><p>Khảo sát và tư vấn dự toán các Phòng bộ môn Lý, Hóa, Sinh, Âm nhạc, Mỹ thuật, Phòng Lab, Phòng Y tế, Thư viện, Bếp ăn bản trú, cho các trường lên chuẩn Quốc Gia theo các cấp độ;</p></li>
                                            <li><p>Tổ chức bản thảo, in ấn, phát hành sách tham khảo, sách chuyên đề, truyện đọc, ấn phẩm học đường...</p></li>
                                            <li><p>Thực hiện số hóa, chuyển đổi số. Hỗ trợ tư vấn phân tích và thực hiện các ứng dụng công nghệ.</p></li>
                                        </ul>
                                    </blockquote>
                                    <p class="post-archive">Các sản phẩm, dịch vụ của chúng tôi luôn đảm bảo theo các thông tư:</p>
                                    <ul>
                                        <li><p>Thông tư liên tịch số <b>26/2011/TTLT-BGDĐT-BKHCN-BYT</b> hướng dẫn tiêu chuẩn bàn ghế học sinh trường Tiểu học, trường Trung học Cơ sở, trường Trung học Phổ thông.</p></li>
                                        <li><p>Thông tư số <b>05/2019/TT-BGDĐT</b> Ban hành về Danh mục dạy học tối thiểu lớp 1;</p></li>
                                        <li><p>Thông tư số <b>43/2020/TT-BGDĐT</b> Ban hành về Danh mục dạy học tối thiểu lớp 2;</p></li>
                                        <li><p>Thông tư số <b>44/2020/TT-BGDĐT</b> Ban hành về Danh mục dạy học tối thiểu lớp 6;</p></li>
                                        <li><p>Thông tư số <b>37/2021/TT-BGDĐT</b> Ban hành về Danh mục dạy học tối thiểu cấp Tiểu học;</p></li>
                                        <li><p>Thông tư số <b>38/2021/TT-BGDĐT</b> Ban hành về Danh mục dạy học tối thiểu cấp THCS;</p></li>
                                        <li><p>Thông tư số <b>39/2021/TT-BGDĐT</b> Ban hành về Danh mục dạy học tối thiểu cấp THPT.</p></li>
                                        <li><p>Văn bản hợp nhất số <b>01/VBHN-BGDĐT</b> năm 2015 hợp nhất Thông tư về Danh mục Đồ dùng - Đồ chơi - Thiết bị dạy học tối thiểu dùng cho Giáo dục Mầm non</p></li>
                                        <li><p>Thông tư số <b>14/2020/TT-BGDĐT</b> Ban hành Quy định phòng học bộ môn của cơ sở giáo dục phổ thông.</p></li>
                                        <li><p>Luật xuất bản số <b>19/2012/QH13</b> và Thông tư số <b>23/2014/TT-BTTTT</b> Quy định chi tiết và hướng dẫn thi hành một số điều của Luật xuất bản.</p></li>
                                    </ul>
                                    <p class="post-archive">Các sản phẩm, dịch vụ của chúng tôi luôn đảm bảo theo các tiêu chuẩn:</p>
                                    <ul>
                                        <li><p>Về Hệ thống quản lý chất lượng <b>ISO 9001:2015</b> </p></li>
                                        <li><p>Về Hệ Thống quản lý môi trường <b> ISO 14001:2015</b></p></li>
                                        <li><p>Về Hệ thống quản lý An toàn và sức khỏe nghề nghiệp cho lĩnh vực <b>ISO 45001:2018</b></p></li>
                                        <li><p>Chứng nhận sản phẩm Gỗ ghép thanh bằng keo phù hợp với tiêu chuẩn kỹ thuật quốc gia <b>TCVN 8575:2010</b>.</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <aside id="sidebar" class="sidebar blog-sidebar col-lg-3 col-md-4 col-sm-12 col-xs-12">
                            <div class="biolife-mobile-panels">
                                <span class="biolife-current-panel-title">Sidebar</span>
                                <a class="biolife-close-btn" href="#" data-object="open-mobile-filter">&times;</a>
                            </div>
                            <div class="sidebar-contain">
                                <div class="widget biolife-filter">
                                    <h4 class="wgt-title">Giới thiệu về</h4>
                                    <div class="wgt-content">
                                        <ul class="cat-list">
                                            <li class="cat-list-item"><a href="#" class="cat-link">HỆ THỐNG & LĨNH VỰC HOẠT ĐỘNG</a></li>
                                            <li class="cat-list-item"><a href="#" class="cat-link">HỆ THỐNG ISO</a></li>
                                            <li class="cat-list-item"><a href="#" class="cat-link">LĨNH VỰC HOẠT ĐỘNG</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="widget posts-widget">
                                    <h4 class="wgt-title">Bài viết về GD Group</h4>
                                    <div class="wgt-content">
                                        <ul class="posts">
                                            <li>
                                                <div class="wgt-post-item">
                                                    <div class="thumb">
                                                        <a href="#"><img src={Post1} width="80" height="58" alt="" /></a>
                                                    </div>
                                                    <div class="detail">
                                                        <h4 class="post-name"><a href="#">GD Group cùng thấu hiểu nụ cười trẻ thơ</a></h4>
                                                        <p class="post-archive">17/07/2023<span class="comment">Bài viết</span></p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="wgt-post-item">
                                                    <div class="thumb">
                                                        <a href="#"><img src={Post2} width="80" height="58" alt="" /></a>
                                                    </div>
                                                    <div class="detail">
                                                        <h4 class="post-name"><a href="#">GD Group tại sự kiện chuyển đổi số</a></h4>
                                                        <p class="post-archive">02/06/2023<span class="comment">Bài viết</span></p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="wgt-post-item">
                                                    <div class="thumb">
                                                        <a href="#"><img src={Post3} width="80" height="58" alt="" /></a>
                                                    </div>
                                                    <div class="detail">
                                                        <h4 class="post-name"><a href="#">GD Group đồng hành cùng...</a></h4>
                                                        <p class="post-archive">26/05/2023<span class="comment">Bài viết </span></p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HeThong;
