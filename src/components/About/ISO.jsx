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
const ISO = () => {
    return (
        <div class="page-contain about-us">
            <div id="main-content" class="main-content">
                <div class="why-choose-us-block">
                    <div class="container">
                        <h4 class="box-title">Hệ thống ISO 9001:2015; ISO 14001:2015; ISO 45001:2018; TCVN 5373:2020; TCVN 8575:2010</h4>
                        <b class="subtitle">Hệ thống của chúng tôi đã được Viện nghiên cứu phát triển tiêu chuẩn chất lượng và Tổ chức chứng nhận Quasta CE đánh giá hệ thống quản lý, quy trình sản xuất, an toàn sức khỏe, vệ sinh môi trường và thử nghiệm sản phẩm. Chúng tôi đạt chứng nhận hệ thống chất lượng theo các tiêu chuẩn:</b>
                        <div class="showcase">
                            <div class="sc-child sc-left-position">
                                <ul class="sc-list">
                                    <li>
                                        <div class="sc-element color-01">
                                            <span class="biolife-icon icon-fresh-drink"></span>
                                            <div class="txt-content">
                                                <span class="number">01</span>
                                                {/* <b class="title">ISO 9001:2015 Chứng nhận Hệ thống Quản lý chất lượng sản phẩm của Công ty;</b> */}
                                                <p class="desc">ISO 9001:2015 Chứng nhận Hệ thống Quản lý chất lượng sản phẩm của Công ty</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="sc-element color-02">
                                            <span class="biolife-icon icon-healthy-about"></span>
                                            <div class="txt-content">
                                                <span class="number">02</span>
                                                {/* <b class="title">Overall Healthy</b> */}
                                                <p class="desc">ISO 14001:2015 Chứng nhận sản phẩm Công ty sản xuất đạt chứng nhận bảo vệ môi trường</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="sc-element color-03">
                                            <span class="biolife-icon icon-green-safety"></span>
                                            <div class="txt-content">
                                                <span class="number">03</span>
                                                {/* <b class="title">Encironmental Safety</b> */}
                                                <p class="desc">ISO 45001:2018 Chứng nhận Hệ thống Quản lý an toàn và sức khoẻ nghề nghiệp</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="sc-child sc-center-position">
                                <figure><img src="assets/images/about-img1.jpg" alt="" width="622" height="656" /></figure>
                            </div>
                            <div class="sc-child sc-right-position">
                                <ul class="sc-list">
                                    <li>
                                        <div class="sc-element color-04">
                                            <span class="biolife-icon icon-capacity-about"></span>
                                            <div class="txt-content">
                                                <span class="number">04</span>
                                                {/* <b class="title">Antioxidant Capacity</b> */}
                                                <p class="desc">TCVN 5373:2020 Chứng nhận về Đồ gỗ nội thất</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="sc-element color-05">
                                            <span class="biolife-icon icon-arteries-about"></span>
                                            <div class="txt-content">
                                                <span class="number">05</span>
                                                {/* <b class="title">Good For Arteries</b> */}
                                                <p class="desc">TCVN 8575:2010 Chứng nhận sản phẩm Gỗ ghép thanh bằng keo phù hợp với tiêu chuẩn kỹ thuật quốc gia</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ISO;
