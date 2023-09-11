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

import Slider from "react-slick";
import TranhAnh from "../../img/Menu/TranhAnh.jpg";
import TBNN1 from "../../img/ThietBiNgheNhin/TBNN1.jpg";
import TBNN2 from "../../img/ThietBiNgheNhin/TBNN2.jpg";
import TBNN3 from "../../img/ThietBiNgheNhin/TBNN3.jpg";
import TBNN4 from "../../img/ThietBiNgheNhin/TBNN4.jpg";
import PBM1 from "../../img/PBM/PBM1.jpg"
import HLDT1 from "../../img/HocLieuDT/HLDT1.jpg"
import HLDT2 from "../../img/HocLieuDT/HLDT2.jpg"
import HLDT3 from "../../img/HocLieuDT/HLDT3.jpg"
import HLDT4 from "../../img/HocLieuDT/HLDT4.jpg"
import SPTNL1 from "../../img/SachThamKhao/PhatTrienNangLuc.jpg";
import SPTNL2 from "../../img/SachThamKhao/PhatTrienNangLuc1.jpg";
import SPTNL3 from "../../img/SachThamKhao/PhatTrienNangLuc2.jpg";
import SPTNL4 from "../../img/SachThamKhao/PhatTrienNangLuc3.jpg";
import SPTNL5 from "../../img/SachThamKhao/PhatTrienNangLuc4.jpg";

import { PiBookOpenTextThin } from "react-icons/pi";
const Home = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    // const motionHorizontal = {
    //     initial: { rotateY: -90 },
    //     whileInView: { rotateY: 0 },
    //     viewport: { margin: "0px" },
    //     transition: { duration: 1 }
    // };
    // const motionVertical = {
    //     initial: { rotateX: -90 },
    //     whileInView: { rotateX: 0 },
    //     viewport: { margin: "0px" },
    //     transition: { duration: 1 }
    // };
    return (
        <div class="page-contain">
            <div id="main-content" class="main-content">
                <div class="main-slide block-slider nav-change">
                    <div className="container">
                        <Slider {...settings}>
                            <div>
                                <img src={CarouselImage1} class="d-block w-100" alt="Wild Landscape" />
                            </div>
                            <div>
                                <img src={CarouselImage2} class="d-block w-100" alt="Wild Landscape" />
                            </div>
                            <div>
                                <img src={CarouselImage3} class="d-block w-100" alt="Wild Landscape" />
                            </div>
                            <div>
                                <img src={CarouselImage4} class="d-block w-100" alt="Wild Landscape" />
                            </div>
                        </Slider>
                    </div>
                </div>

                <div class="wrap-category xs-margin-top-80px">
                    <div class="container">
                        <div class="biolife-title-box style-02 xs-margin-bottom-33px">
                            <span class="subtitle">Sản phẩm nổi bật</span>
                            <h3 class="main-title">GIẢI PHÁP PHÒNG BỘ MÔN</h3>
                            <p class="desc">Giải pháp phòng bộ môn là công cụ quan trọng giúp tối ưu hóa hiệu suất và đảm bảo an toàn trong quá trình sử dụng các thiết bị và công cụ học tập của học sinh....</p>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={PBM1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Bàn lục giác học sinh</h4>
                                        <span class="cat-number">(Liên hệ)</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={PBM1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Bàn lục giác học sinh</h4>
                                        <span class="cat-number">(Liên hệ)</span>
                                    </a>
                                </div>
                            </div><div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={PBM1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Bàn lục giác học sinh</h4>
                                        <span class="cat-number">(Liên hệ)</span>
                                    </a>
                                </div>
                            </div><div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={PBM1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Bàn lục giác học sinh</h4>
                                        <span class="cat-number">(Liên hệ)</span>
                                    </a>
                                </div>
                            </div><div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={PBM1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Bàn lục giác học sinh</h4>
                                        <span class="cat-number">(Liên hệ)</span>
                                    </a>
                                </div>
                            </div><div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={PBM1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Bàn lục giác học sinh</h4>
                                        <span class="cat-number">(Liên hệ)</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="product-tab z-index-20 sm-margin-top-59px xs-margin-top-20px">
                    <div class="container">
                        <div class="biolife-title-box style-02 xs-margin-bottom-33px">
                            <span class="subtitle">Sản phẩm nổi bật</span>
                            <h3 class="main-title">HỌC LIỆU ĐIỆN TỬ</h3>
                            <p class="desc">Học liệu điện tử cung cấp môi trường tiện lợi, linh hoạt, đa dạng, giúp học sinh tiếp cận kiến thức một cách hiệu quả...</p>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-3">
                                <div class="product-item">
                                    <div class="contain-product layout-default">
                                        <div class="product-thumb">
                                            <a href="#" class="link-to-product">
                                                <img src={HLDT1} alt="Vegetables" width="270" height="270" class="product-thumnail" />
                                            </a>
                                            <a class="lookup btn_call_quickview" href="#"><i class="biolife-icon icon-search"></i></a>
                                        </div>
                                        <div class="info">
                                            <b class="categories">Học liệu điện tử</b>
                                            <h4 class="product-title"><a href="#" class="pr-name">Môn Địa Lý Lớp 10</a></h4>
                                            <div class="slide-down-box">
                                                <p class="message">Tất cả sản phẩm đều được đảm bảo chất lượng. Đáp ứng các yêu cầu về hiệu suất, độ bền và an toàn</p>
                                                <div class="buttons">
                                                    <a href="#" class="btn wishlist-btn"><i class="fa fa-heart"
                                                        aria-hidden="true"></i></a>
                                                    <a href="#" class="btn add-to-cart-btn"><i
                                                        class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                    <a href="#" class="btn compare-btn"><i class="fa fa-random"
                                                        aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-3">
                                <div class="product-item">
                                    <div class="contain-product layout-default">
                                        <div class="product-thumb">
                                            <a href="#" class="link-to-product">
                                                <img src={HLDT2} alt="Vegetables"
                                                    width="270" height="270" class="product-thumnail" />
                                            </a>
                                            <a class="lookup btn_call_quickview" href="#"><i class="biolife-icon icon-search"></i></a>
                                        </div>
                                        <div class="info">
                                            <b class="categories">Học liệu điện tử</b>
                                            <h4 class="product-title"><a href="#" class="pr-name">Môn Địa Lý Lớp 10</a></h4>
                                            <div class="slide-down-box">
                                                <p class="message">Tất cả sản phẩm đều được đảm bảo chất lượng. Đáp ứng các yêu cầu về hiệu suất, độ bền và an toàn</p>
                                                <div class="buttons">
                                                    <a href="#" class="btn wishlist-btn"><i class="fa fa-heart"
                                                        aria-hidden="true"></i></a>
                                                    <a href="#" class="btn add-to-cart-btn"><i
                                                        class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                    <a href="#" class="btn compare-btn"><i class="fa fa-random"
                                                        aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-3">
                                <div class="product-item">
                                    <div class="contain-product layout-default">
                                        <div class="product-thumb">
                                            <a href="#" class="link-to-product">
                                                <img src={HLDT3} alt="Vegetables"
                                                    width="270" height="270" class="product-thumnail" />
                                            </a>
                                            <a class="lookup btn_call_quickview" href="#"><i class="biolife-icon icon-search"></i></a>
                                        </div>
                                        <div class="info">
                                            <b class="categories">Học liệu điện tử</b>
                                            <h4 class="product-title"><a href="#" class="pr-name">Môn Địa Lý Lớp 10</a></h4>
                                            <div class="slide-down-box">
                                                <p class="message">Tất cả sản phẩm đều được đảm bảo chất lượng. Đáp ứng các yêu cầu về hiệu suất, độ bền và an toàn</p>
                                                <div class="buttons">
                                                    <a href="#" class="btn wishlist-btn"><i class="fa fa-heart"
                                                        aria-hidden="true"></i></a>
                                                    <a href="#" class="btn add-to-cart-btn"><i
                                                        class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                    <a href="#" class="btn compare-btn"><i class="fa fa-random"
                                                        aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-3">
                                <div class="product-item">
                                    <div class="contain-product layout-default">
                                        <div class="product-thumb">
                                            <a href="#" class="link-to-product">
                                                <img src={HLDT4} alt="Vegetables"
                                                    width="270" height="270" class="product-thumnail" />
                                            </a>
                                            <a class="lookup btn_call_quickview" href="#"><i class="biolife-icon icon-search"></i></a>
                                        </div>
                                        <div class="info">
                                            <b class="categories">Học liệu điện tử</b>
                                            <h4 class="product-title"><a href="#" class="pr-name">Môn Địa Lý Lớp 10</a></h4>
                                            <div class="slide-down-box">
                                                <p class="message">Tất cả sản phẩm đều được đảm bảo chất lượng. Đáp ứng các yêu cầu về hiệu suất, độ bền và an toàn</p>
                                                <div class="buttons">
                                                    <a href="#" class="btn wishlist-btn"><i class="fa fa-heart"
                                                        aria-hidden="true"></i></a>
                                                    <a href="#" class="btn add-to-cart-btn"><i
                                                        class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                    <a href="#" class="btn compare-btn"><i class="fa fa-random"
                                                        aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                <div class="wrap-category xs-margin-top-80px">
                    <div class="container">
                        <div class="biolife-title-box style-02 xs-margin-bottom-33px">
                            <span class="subtitle">Sản phẩm nổi bật</span>
                            <h3 class="main-title">SÁCH THAM KHẢO</h3>
                            <p class="desc">Sách tham khảo là nguồn tài liệu quý giá, cung cấp thông tin, kiến thức và những hướng dẫn hữu ích...</p>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={SPTNL1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Bé hiểu và quyền trẻ em</h4>
                                        <span class="cat-number">(63.000đ)</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={SPTNL1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Bé hiểu và quyền trẻ em</h4>
                                        <span class="cat-number">(63.000đ)</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={SPTNL1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Bé hiểu và quyền trẻ em</h4>
                                        <span class="cat-number">(63.000đ)</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={SPTNL1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Bé hiểu và quyền trẻ em</h4>
                                        <span class="cat-number">(63.000đ)</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={SPTNL1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Bé hiểu và quyền trẻ em</h4>
                                        <span class="cat-number">(63.000đ)</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={SPTNL1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Bé hiểu và quyền trẻ em</h4>
                                        <span class="cat-number">(63.000đ)</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="wrap-category xs-margin-top-80px">
                    <div class="container">
                        <div class="biolife-title-box style-02 xs-margin-bottom-33px">
                            <span class="subtitle">Sản phẩm nổi bật</span>
                            <h3 class="main-title">THIẾT BỊ CƠ BẢN</h3>
                            <p class="desc">Thiết bị nghe nhìn đóng vai trò quan trọng trong việc mang đến trải nghiệm giải trí, truyền thông và học tập đa dạng...</p>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={TBNN1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Laptop Asus BR100FKA</h4>
                                        <span class="cat-number">(Liên hệ)</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={TBNN1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Laptop Asus BR100FKA</h4>
                                        <span class="cat-number">(Liên hệ)</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={TBNN1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Laptop Asus BR100FKA</h4>
                                        <span class="cat-number">(Liên hệ)</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={TBNN1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Laptop Asus BR100FKA</h4>
                                        <span class="cat-number">(Liên hệ)</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={TBNN1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Laptop Asus BR100FKA</h4>
                                        <span class="cat-number">(Liên hệ)</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={TBNN1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Laptop Asus BR100FKA</h4>
                                        <span class="cat-number">(Liên hệ)</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="wrap-category xs-margin-top-80px">
                    <div class="container">
                        <div class="biolife-title-box style-02 xs-margin-bottom-33px">
                            <span class="subtitle">Sản phẩm nổi bật</span>
                            <h3 class="main-title">THIẾT BỊ NGHE NHÌN</h3>
                            <p class="desc">Thiết bị nghe nhìn đóng vai trò quan trọng trong việc mang đến trải nghiệm giải trí, truyền thông và học tập đa dạng...</p>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={TBNN1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Laptop Asus BR100FKA</h4>
                                        <span class="cat-number">(Liên hệ)</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={TBNN1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Laptop Asus BR100FKA</h4>
                                        <span class="cat-number">(Liên hệ)</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={TBNN2} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Laptop Asus BR100FKA</h4>
                                        <span class="cat-number">(Liên hệ)</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={TBNN1} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Laptop Asus BR100FKA</h4>
                                        <span class="cat-number">(Liên hệ)</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={TBNN4} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Laptop Asus BR100FKA</h4>
                                        <span class="cat-number">(Liên hệ)</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-2">
                                <div class="biolife-cat-box-item">
                                    <div class="cat-thumb">
                                        <a href="#" class="cat-link">
                                            <img src={TBNN2} width="277" height="185" alt="" />
                                        </a>
                                    </div>
                                    <a class="cat-info" href="#">
                                        <h4 class="cat-name">Laptop Asus BR100FKA</h4>
                                        <span class="cat-number">(Liên hệ)</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Home;
