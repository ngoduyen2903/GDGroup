import React from "react";
import Toggle from "../Toggle/Toggle";
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
import P1 from "../../img/Product/P2.jpg"
import { PiBookOpenTextThin } from "react-icons/pi";
import { Outlet, Link } from "react-router-dom";

const Categories = () => {
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
        <div>
            <div class="container">
                <nav class="biolife-nav">
                    <ul>
                        <li class="nav-item"><a href="index-2.html" class="permal-link">Trang chủ</a></li>
                        <li class="nav-item"><a href="#" class="permal-link">Danh sách sản phẩm</a></li>
                        <li class="nav-item"><span class="current-page">Sách tham khảo</span></li>
                    </ul>
                </nav>
            </div>
            <div class="page-contain category-page no-sidebar">
                <div class="container">
                    <div class="row">
                        <div id="main-content" class="main-content col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="product-category grid-style">
                                <div class="row">
                                    <div class="products-list">
                                        <div class="product-item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="contain-product layout-default">
                                                <div class="product-thumb">
                                                    <a href="#" class="link-to-product">
                                                        <img src={P1} alt="dd" width="270" height="270" class="product-thumnail" />
                                                    </a>
                                                </div>
                                                <div class="info">
                                                    <b class="categories">Sách tham khảo</b>
                                                    <h4 class="product-title"><Link to="/product_detail">Toán - Em tìm hiểu về độ dài: Xăng-ti-mét</Link></h4>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol"></span>38.000đ</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol"></span>48.000đ</span></del>
                                                    </div>
                                                    <div class="shipping-info">
                                                        <p class="for-today">Nhà xuất bản thanh niên</p>
                                                    </div>
                                                    <div class="slide-down-box">
                                                        <p class="message">Chúng tôi cam kết rằng mỗi quyển sách được xuất bản đã qua kiểm duyệt chặt chẽ về nội dung</p>
                                                        <div class="buttons">
                                                            <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                            <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                            <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="contain-product layout-default">
                                                <div class="product-thumb">
                                                    <a href="#" class="link-to-product">
                                                        <img src={P1} alt="dd" width="270" height="270" class="product-thumnail" />
                                                    </a>
                                                </div>
                                                <div class="info">
                                                    <b class="categories">Sách tham khảo</b>
                                                    <h4 class="product-title"><a href="#" class="pr-name">Toán-Em tìm hiểu về độ dài:Xăng-ti-mét</a></h4>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol"></span>38.000đ</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol"></span>48.000đ</span></del>
                                                    </div>
                                                    <div class="shipping-info">
                                                        <p class="for-today">Nhà xuất bản thanh niên</p>
                                                    </div>
                                                    <div class="slide-down-box">
                                                        <p class="message">Chúng tôi cam kết rằng mỗi quyển sách được xuất bản đã qua kiểm duyệt chặt chẽ về nội dung</p>
                                                        <div class="buttons">
                                                            <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                            <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                            <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="contain-product layout-default">
                                                <div class="product-thumb">
                                                    <a href="#" class="link-to-product">
                                                        <img src={P1} alt="dd" width="270" height="270" class="product-thumnail" />
                                                    </a>
                                                </div>
                                                <div class="info">
                                                    <b class="categories">Sách tham khảo</b>
                                                    <h4 class="product-title"><a href="#" class="pr-name">Toán-Em tìm hiểu về độ dài:Xăng-ti-mét</a></h4>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol"></span>38.000đ</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol"></span>48.000đ</span></del>
                                                    </div>
                                                    <div class="shipping-info">
                                                        <p class="for-today">Nhà xuất bản thanh niên</p>
                                                    </div>
                                                    <div class="slide-down-box">
                                                        <p class="message">Chúng tôi cam kết rằng mỗi quyển sách được xuất bản đã qua kiểm duyệt chặt chẽ về nội dung</p>
                                                        <div class="buttons">
                                                            <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                            <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                            <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="contain-product layout-default">
                                                <div class="product-thumb">
                                                    <a href="#" class="link-to-product">
                                                        <img src={P1} alt="dd" width="270" height="270" class="product-thumnail" />
                                                    </a>
                                                </div>
                                                <div class="info">
                                                    <b class="categories">Sách tham khảo</b>
                                                    <h4 class="product-title"><a href="#" class="pr-name">Toán-Em tìm hiểu về độ dài:Xăng-ti-mét</a></h4>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol"></span>38.000đ</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol"></span>48.000đ</span></del>
                                                    </div>
                                                    <div class="shipping-info">
                                                        <p class="for-today">Nhà xuất bản thanh niên</p>
                                                    </div>
                                                    <div class="slide-down-box">
                                                        <p class="message">Chúng tôi cam kết rằng mỗi quyển sách được xuất bản đã qua kiểm duyệt chặt chẽ về nội dung</p>
                                                        <div class="buttons">
                                                            <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                            <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                            <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="contain-product layout-default">
                                                <div class="product-thumb">
                                                    <a href="#" class="link-to-product">
                                                        <img src={P1} alt="dd" width="270" height="270" class="product-thumnail" />
                                                    </a>
                                                </div>
                                                <div class="info">
                                                    <b class="categories">Sách tham khảo</b>
                                                    <h4 class="product-title"><a href="#" class="pr-name">Toán-Em tìm hiểu về độ dài:Xăng-ti-mét</a></h4>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol"></span>38.000đ</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol"></span>48.000đ</span></del>
                                                    </div>
                                                    <div class="shipping-info">
                                                        <p class="for-today">Nhà xuất bản thanh niên</p>
                                                    </div>
                                                    <div class="slide-down-box">
                                                        <p class="message">Chúng tôi cam kết rằng mỗi quyển sách được xuất bản đã qua kiểm duyệt chặt chẽ về nội dung</p>
                                                        <div class="buttons">
                                                            <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                            <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                            <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="contain-product layout-default">
                                                <div class="product-thumb">
                                                    <a href="#" class="link-to-product">
                                                        <img src={P1} alt="dd" width="270" height="270" class="product-thumnail" />
                                                    </a>
                                                </div>
                                                <div class="info">
                                                    <b class="categories">Sách tham khảo</b>
                                                    <h4 class="product-title"><a href="#" class="pr-name">Toán-Em tìm hiểu về độ dài:Xăng-ti-mét</a></h4>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol"></span>38.000đ</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol"></span>48.000đ</span></del>
                                                    </div>
                                                    <div class="shipping-info">
                                                        <p class="for-today">Nhà xuất bản thanh niên</p>
                                                    </div>
                                                    <div class="slide-down-box">
                                                        <p class="message">Chúng tôi cam kết rằng mỗi quyển sách được xuất bản đã qua kiểm duyệt chặt chẽ về nội dung</p>
                                                        <div class="buttons">
                                                            <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                            <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                            <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="contain-product layout-default">
                                                <div class="product-thumb">
                                                    <a href="#" class="link-to-product">
                                                        <img src={P1} alt="dd" width="270" height="270" class="product-thumnail" />
                                                    </a>
                                                </div>
                                                <div class="info">
                                                    <b class="categories">Sách tham khảo</b>
                                                    <h4 class="product-title"><a href="#" class="pr-name">Toán-Em tìm hiểu về độ dài:Xăng-ti-mét</a></h4>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol"></span>38.000đ</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol"></span>48.000đ</span></del>
                                                    </div>
                                                    <div class="shipping-info">
                                                        <p class="for-today">Nhà xuất bản thanh niên</p>
                                                    </div>
                                                    <div class="slide-down-box">
                                                        <p class="message">Chúng tôi cam kết rằng mỗi quyển sách được xuất bản đã qua kiểm duyệt chặt chẽ về nội dung</p>
                                                        <div class="buttons">
                                                            <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                            <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                            <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="contain-product layout-default">
                                                <div class="product-thumb">
                                                    <a href="#" class="link-to-product">
                                                        <img src={P1} alt="dd" width="270" height="270" class="product-thumnail" />
                                                    </a>
                                                </div>
                                                <div class="info">
                                                    <b class="categories">Sách tham khảo</b>
                                                    <h4 class="product-title"><a href="#" class="pr-name">Toán-Em tìm hiểu về độ dài:Xăng-ti-mét</a></h4>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol"></span>38.000đ</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol"></span>48.000đ</span></del>
                                                    </div>
                                                    <div class="shipping-info">
                                                        <p class="for-today">Nhà xuất bản thanh niên</p>
                                                    </div>
                                                    <div class="slide-down-box">
                                                        <p class="message">Chúng tôi cam kết rằng mỗi quyển sách được xuất bản đã qua kiểm duyệt chặt chẽ về nội dung</p>
                                                        <div class="buttons">
                                                            <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                            <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                            <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="contain-product layout-default">
                                                <div class="product-thumb">
                                                    <a href="#" class="link-to-product">
                                                        <img src={P1} alt="dd" width="270" height="270" class="product-thumnail" />
                                                    </a>
                                                </div>
                                                <div class="info">
                                                    <b class="categories">Sách tham khảo</b>
                                                    <h4 class="product-title"><a href="#" class="pr-name">Toán-Em tìm hiểu về độ dài:Xăng-ti-mét</a></h4>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol"></span>38.000đ</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol"></span>48.000đ</span></del>
                                                    </div>
                                                    <div class="shipping-info">
                                                        <p class="for-today">Nhà xuất bản thanh niên</p>
                                                    </div>
                                                    <div class="slide-down-box">
                                                        <p class="message">Chúng tôi cam kết rằng mỗi quyển sách được xuất bản đã qua kiểm duyệt chặt chẽ về nội dung</p>
                                                        <div class="buttons">
                                                            <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                            <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                            <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="contain-product layout-default">
                                                <div class="product-thumb">
                                                    <a href="#" class="link-to-product">
                                                        <img src={P1} alt="dd" width="270" height="270" class="product-thumnail" />
                                                    </a>
                                                </div>
                                                <div class="info">
                                                    <b class="categories">Sách tham khảo</b>
                                                    <h4 class="product-title"><a href="#" class="pr-name">Toán-Em tìm hiểu về độ dài:Xăng-ti-mét</a></h4>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol"></span>38.000đ</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol"></span>48.000đ</span></del>
                                                    </div>
                                                    <div class="shipping-info">
                                                        <p class="for-today">Nhà xuất bản thanh niên</p>
                                                    </div>
                                                    <div class="slide-down-box">
                                                        <p class="message">Chúng tôi cam kết rằng mỗi quyển sách được xuất bản đã qua kiểm duyệt chặt chẽ về nội dung</p>
                                                        <div class="buttons">
                                                            <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                            <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                            <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="contain-product layout-default">
                                                <div class="product-thumb">
                                                    <a href="#" class="link-to-product">
                                                        <img src={P1} alt="dd" width="270" height="270" class="product-thumnail" />
                                                    </a>
                                                </div>
                                                <div class="info">
                                                    <b class="categories">Sách tham khảo</b>
                                                    <h4 class="product-title"><a href="#" class="pr-name">Toán-Em tìm hiểu về độ dài:Xăng-ti-mét</a></h4>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol"></span>38.000đ</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol"></span>48.000đ</span></del>
                                                    </div>
                                                    <div class="shipping-info">
                                                        <p class="for-today">Nhà xuất bản thanh niên</p>
                                                    </div>
                                                    <div class="slide-down-box">
                                                        <p class="message">Chúng tôi cam kết rằng mỗi quyển sách được xuất bản đã qua kiểm duyệt chặt chẽ về nội dung</p>
                                                        <div class="buttons">
                                                            <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                            <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                            <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="contain-product layout-default">
                                                <div class="product-thumb">
                                                    <a href="#" class="link-to-product">
                                                        <img src={P1} alt="dd" width="270" height="270" class="product-thumnail" />
                                                    </a>
                                                </div>
                                                <div class="info">
                                                    <b class="categories">Sách tham khảo</b>
                                                    <h4 class="product-title"><a href="#" class="pr-name">Toán-Em tìm hiểu về độ dài:Xăng-ti-mét</a></h4>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol"></span>38.000đ</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol"></span>48.000đ</span></del>
                                                    </div>
                                                    <div class="shipping-info">
                                                        <p class="for-today">Nhà xuất bản thanh niên</p>
                                                    </div>
                                                    <div class="slide-down-box">
                                                        <p class="message">Chúng tôi cam kết rằng mỗi quyển sách được xuất bản đã qua kiểm duyệt chặt chẽ về nội dung</p>
                                                        <div class="buttons">
                                                            <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                            <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                            <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="product-item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="contain-product layout-default">
                                                <div class="product-thumb">
                                                    <a href="#" class="link-to-product">
                                                        <img src={P1} alt="dd" width="270" height="270" class="product-thumnail" />
                                                    </a>
                                                </div>
                                                <div class="info">
                                                    <b class="categories">Sách tham khảo</b>
                                                    <h4 class="product-title"><a href="#" class="pr-name">Toán-Em tìm hiểu về độ dài:Xăng-ti-mét</a></h4>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol"></span>38.000đ</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol"></span>48.000đ</span></del>
                                                    </div>
                                                    <div class="shipping-info">
                                                        <p class="for-today">Nhà xuất bản thanh niên</p>
                                                    </div>
                                                    <div class="slide-down-box">
                                                        <p class="message">Chúng tôi cam kết rằng mỗi quyển sách được xuất bản đã qua kiểm duyệt chặt chẽ về nội dung</p>
                                                        <div class="buttons">
                                                            <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                            <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                            <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="contain-product layout-default">
                                                <div class="product-thumb">
                                                    <a href="#" class="link-to-product">
                                                        <img src={P1} alt="dd" width="270" height="270" class="product-thumnail" />
                                                    </a>
                                                </div>
                                                <div class="info">
                                                    <b class="categories">Sách tham khảo</b>
                                                    <h4 class="product-title"><a href="#" class="pr-name">Toán-Em tìm hiểu về độ dài:Xăng-ti-mét</a></h4>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol"></span>38.000đ</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol"></span>48.000đ</span></del>
                                                    </div>
                                                    <div class="shipping-info">
                                                        <p class="for-today">Nhà xuất bản thanh niên</p>
                                                    </div>
                                                    <div class="slide-down-box">
                                                        <p class="message">Chúng tôi cam kết rằng mỗi quyển sách được xuất bản đã qua kiểm duyệt chặt chẽ về nội dung</p>
                                                        <div class="buttons">
                                                            <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                            <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                            <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="contain-product layout-default">
                                                <div class="product-thumb">
                                                    <a href="#" class="link-to-product">
                                                        <img src={P1} alt="dd" width="270" height="270" class="product-thumnail" />
                                                    </a>
                                                </div>
                                                <div class="info">
                                                    <b class="categories">Sách tham khảo</b>
                                                    <h4 class="product-title"><a href="#" class="pr-name">Toán-Em tìm hiểu về độ dài:Xăng-ti-mét</a></h4>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol"></span>38.000đ</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol"></span>48.000đ</span></del>
                                                    </div>
                                                    <div class="shipping-info">
                                                        <p class="for-today">Nhà xuất bản thanh niên</p>
                                                    </div>
                                                    <div class="slide-down-box">
                                                        <p class="message">Chúng tôi cam kết rằng mỗi quyển sách được xuất bản đã qua kiểm duyệt chặt chẽ về nội dung</p>
                                                        <div class="buttons">
                                                            <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                            <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                            <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="contain-product layout-default">
                                                <div class="product-thumb">
                                                    <a href="#" class="link-to-product">
                                                        <img src={P1} alt="dd" width="270" height="270" class="product-thumnail" />
                                                    </a>
                                                </div>
                                                <div class="info">
                                                    <b class="categories">Sách tham khảo</b>
                                                    <h4 class="product-title"><a href="#" class="pr-name">Toán-Em tìm hiểu về độ dài:Xăng-ti-mét</a></h4>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol"></span>38.000đ</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol"></span>48.000đ</span></del>
                                                    </div>
                                                    <div class="shipping-info">
                                                        <p class="for-today">Nhà xuất bản thanh niên</p>
                                                    </div>
                                                    <div class="slide-down-box">
                                                        <p class="message">Chúng tôi cam kết rằng mỗi quyển sách được xuất bản đã qua kiểm duyệt chặt chẽ về nội dung</p>
                                                        <div class="buttons">
                                                            <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                            <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                            <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="biolife-panigations-block">
                                    <ul class="panigation-contain">
                                        <li><span class="current-page">1</span></li>
                                        <li><a href="#" class="link-page">2</a></li>
                                        <li><a href="#" class="link-page">3</a></li>
                                        <li><span class="sep">....</span></li>
                                        <li><a href="#" class="link-page">20</a></li>
                                        <li><a href="#" class="link-page next"><i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
