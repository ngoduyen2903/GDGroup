import React, { useContext } from "react";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../../Context";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header id="header" class="header-area style-01 layout-03">
            <div class="header-top bg-main hidden-xs">
                <div class="container">
                    <div class="top-bar left">
                        <ul class="horizontal-menu">
                            <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i>Gdgroup@company.com</a></li>
                            <li><a href="#">Nhà sách thông minh</a></li>
                        </ul>
                    </div>
                    <div class="top-bar right">
                        <ul class="social-list">
                            <li><a href="#"><i class="fa fa-google" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i></a></li>
                        </ul>
                        <ul class="horizontal-menu">
                            <li><a href="#" class="login-link"><i class="biolife-icon icon-login"></i>Đăng nhập/Đăng ký</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="header-middle biolife-sticky-object ">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-2 col-md-6 col-xs-6">
                            <a href="home-03-green.html" class="biolife-logo"><img src="assets/images/logo-main.png" alt="biolife logo" width="135" height="36" /></a>
                        </div>
                        <div class="col-lg-7 col-md-7 hidden-sm hidden-xs">
                            <div class="primary-menu">
                                <ul class="menu biolife-menu clone-main-menu clone-primary-menu" id="primary-menu"
                                    data-menuname="main menu">
                                    <li class="menu-item"><Link to="/">Trang chủ</Link></li>
                                    <li class="menu-item menu-item-has-children has-child">
                                        {/* <a href="#" class="menu-name" data-title="Product">Giới thiệu</a> */}
                                        <Link to="/about" className="menu-name">Giới thiệu</Link>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><Link to="/about_system" >Hệ thống & Lĩnh vực hoạt động</Link></li>
                                            <li class="menu-item"><Link to="/about_iso">Hệ thống ISO</Link></li>
                                            <li class="menu-item"><Link to="/about_picture">Hình ảnh minh họa</Link></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children has-child">
                                        <a href="#" class="menu-name" data-title="Product">Giải pháp</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><a href="#">Học trực tuyến</a></li>
                                            <li class="menu-item"><a href="#">Họp trực tuyến</a></li>
                                            <li class="menu-item"><a href="#">Phòng học thông minh</a></li>
                                            <li class="menu-item"><a href="#">Phòng ngoại ngữ</a></li>
                                            <li class="menu-item"><a href="#">Thư viện thông minh</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item"><a href="#">Dự án</a></li>
                                    <li class="menu-item menu-item-has-children has-megamenu">
                                        <a href="#" class="menu-name" data-title="Blog">Tin tức</a>
                                        <div class="wrap-megamenu lg-width-800 md-width-750">
                                            <div class="mega-content">
                                                <div class="col-lg-12 col-md-6 col-xs-12 md-margin-top-0 xs-margin-top-25px">
                                                    <div class="block-posts">
                                                        <h4 class="menu-title">Một số tin tức nổi bật</h4>
                                                        <ul class="posts">
                                                            <li>
                                                                <div class="block-post-item">
                                                                    <div class="thumb"><a href="#"><img src="assets/images/Post/Post1.jpg" width="100"
                                                                        height="73" alt="" /></a></div>
                                                                    <div class="left-info">
                                                                        <h4 class="post-name"><a href="#">Vì sao stem lại giúp ích cho sự phát triển toàn diện
                                                                            của trẻ em</a></h4>
                                                                        <span class="p-date">06/06/2023</span>
                                                                        <span class="p-comment">Tin tức</span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="block-post-item">
                                                                    <div class="thumb"><a href="#"><img src="assets/images/Post/Post2.jpg" width="100"
                                                                        height="73" alt="" /></a></div>
                                                                    <div class="left-info">
                                                                        <h4 class="post-name"><a href="#">GD Group trong sự kiện chuyển đổi số trong quản lý,
                                                                            đào tạo chuyên ngành giáo dục TECHMART</a></h4>
                                                                        <span class="p-date">02/06/2023</span>
                                                                        <span class="p-comment">Tin tức</span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="block-post-item">
                                                                    <div class="thumb"><a href="#"><img src="assets/images/Post/Post3.jpg" width="100"
                                                                        height="73" alt="" /></a></div>
                                                                    <div class="left-info">
                                                                        <h4 class="post-name"><a href="#">Các hoạt động của GD Group tại triển lãm thiết bị
                                                                            công nghệ giáo dục Bess</a></h4>
                                                                        <span class="p-date">15/04/2023</span>
                                                                        <span class="p-comment">Tin tức</span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="block-post-item">
                                                                    <div class="thumb"><a href="#"><img src="assets/images/Post/Post1.jpg" width="100"
                                                                        height="73" alt="" /></a></div>
                                                                    <div class="left-info">
                                                                        <h4 class="post-name"><a href="#">Vì sao stem lại giúp ích cho sự phát triển toàn diện
                                                                            của trẻ em</a></h4>
                                                                        <span class="p-date">06/06/2023</span>
                                                                        <span class="p-comment">Tin tức</span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="menu-item menu-item-has-children has-megamenu">
                                        <a href="#" class="menu-name" data-title="Blog">Tuyển dụng</a>
                                        <div class="wrap-megamenu lg-width-800 md-width-750">
                                            <div class="mega-content">
                                                <div class="col-lg-12 col-md-6 col-xs-12 md-margin-top-0 xs-margin-top-25px">
                                                    <div class="block-posts">
                                                        <h4 class="menu-title">Một số tin tuyển dụng gần đây</h4>
                                                        <ul class="posts">
                                                            <li>
                                                                <div class="block-post-item">
                                                                    <div class="thumb"><a href="#"><img src="assets/images/TuyenDung/tuyendung1.jpg"
                                                                        width="100" height="73" alt="" /></a></div>
                                                                    <div class="left-info">
                                                                        <h4 class="post-name"><a href="#">Thông báo tuyển dụng tháng 12</a></h4>
                                                                        <span class="p-date">03/12/2021</span>
                                                                        <span class="p-comment">Tuyển dụng</span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="block-post-item">
                                                                    <div class="thumb"><a href="#"><img src="assets/images/TuyenDung/tuyendung2.jpg"
                                                                        width="100" height="73" alt="" /></a></div>
                                                                    <div class="left-info">
                                                                        <h4 class="post-name"><a href="#">Thông báo tuyển dụng tháng 10 - Chuyên viên chăm sóc
                                                                            khách hàng</a></h4>
                                                                        <span class="p-date">15/10/2021</span>
                                                                        <span class="p-comment">Tuyển dụng</span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="block-post-item">
                                                                    <div class="thumb"><a href="#"><img src="assets/images/TuyenDung/tuyendung3.jpg"
                                                                        width="100" height="73" alt="" /></a></div>
                                                                    <div class="left-info">
                                                                        <h4 class="post-name"><a href="#">Thông báo tuyển dụng tháng 09 - Nhiều vị trí</a>
                                                                        </h4>
                                                                        <span class="p-date">29/09/2021</span>
                                                                        <span class="p-comment">Tuyển dụng</span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="menu-item"><a href="#">Liên hệ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-md-6 col-xs-6">
                            <div class="biolife-cart-info">
                                <div class="mobile-search">
                                    <a href="javascript:void(0)" class="open-searchbox"><i class="biolife-icon icon-search"></i></a>
                                    <div class="mobile-search-content">
                                        <form class="form-search">
                                            <a href="#" class="btn-close"><span class="biolife-icon icon-close-menu"></span></a>
                                            <input type="text" name="s" class="input-text" value="" placeholder="Tìm kiếm sản phẩm..." />
                                            <select name="category">
                                                <option value="-1" selected>Tất cả danh mục</option>
                                                <option value="vegetables">Vegetables</option>
                                                <option value="fresh_berries">Fresh Berries</option>
                                                <option value="ocean_foods">Ocean Foods</option>
                                                <option value="butter_eggs">Butter & Eggs</option>
                                                <option value="fastfood">Fastfood</option>
                                                <option value="fresh_meat">Fresh Meat</option>
                                                <option value="fresh_onion">Fresh Onion</option>
                                                <option value="papaya_crisps">Papaya & Crisps</option>
                                                <option value="oatmeal">Oatmeal</option>
                                            </select>
                                            <button type="submit" class="btn-submit">go</button>
                                        </form>
                                    </div>
                                </div>
                                <div class="wishlist-block hidden-sm hidden-xs">
                                    <a href="#" class="link-to">
                                        <span class="icon-qty-combine">
                                            <i class="icon-heart-bold biolife-icon"></i>
                                            <span class="qty">4</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="minicart-block">
                                    <div class="minicart-contain">
                                        <a href="javascript:void(0)" class="link-to">
                                            <span class="icon-qty-combine">
                                                <i class="icon-cart-mini biolife-icon"></i>
                                                <span class="qty">8</span>
                                            </span>
                                            <span class="title">Giỏ hàng</span>
                                        </a>
                                        <div class="cart-content">
                                            <div class="cart-inner">
                                                <ul class="products">
                                                    <li>
                                                        <div class="minicart-item">
                                                            <div class="thumb">
                                                                <a href="#"><img src="assets/images/SachThamKhao/PhatTrienNangLuc.jpg" width="90"
                                                                    height="90" alt="National Fresh" /></a>
                                                            </div>
                                                            <div class="left-info">
                                                                <div class="product-title"><a href="#" class="product-name">Bé hiểu và quyền trẻ em</a>
                                                                </div>
                                                                <div class="price">
                                                                    <ins><span class="price-amount"><span class="currencySymbol">40.000</span>
                                                                        VND</span></ins>
                                                                    <del><span class="price-amount"><span class="currencySymbol">50.000</span>
                                                                        VND</span></del>
                                                                </div>
                                                                <div class="qty">
                                                                    <label for="cart[id124][qty]">Số lượng:</label>
                                                                    <input type="number" class="input-qty" name="cart[id124][qty]" id="cart[id124][qty]"
                                                                        value="1" disabled />
                                                                </div>
                                                            </div>
                                                            <div class="action">
                                                                <a href="#" class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                                <a href="#" class="remove"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <button className="button i-button">Xem thêm</button>
                                                    <li>
                                                        <div class="minicart-item">
                                                            <div class="thumb">
                                                                <a href="#"><img src="assets/images/SachThamKhao/PhatTrienNangLuc1.jpg" width="90"
                                                                    height="90" alt="National Fresh" /></a>
                                                            </div>
                                                            <div class="left-info">
                                                                <div class="product-title"><a href="#" class="product-name" />Bé hiểu và quyền trẻ em
                                                                </div>
                                                                <div class="price">
                                                                    <ins><span class="price-amount"><span class="currencySymbol">40.000</span>
                                                                        VND</span></ins>
                                                                    <del><span class="price-amount"><span class="currencySymbol">50.000</span>
                                                                        VND</span></del>
                                                                </div>
                                                                <div class="qty">
                                                                    <label for="cart[id124][qty]">Số lượng:</label>
                                                                    <input type="number" class="input-qty" name="cart[id124][qty]" id="cart[id124][qty]"
                                                                        value="1" disabled />
                                                                </div>
                                                            </div>
                                                            <div class="action">
                                                                <a href="#" class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                                <a href="#" class="remove"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="minicart-item">
                                                            <div class="thumb">
                                                                <a href="#"><img src="assets/images/SachThamKhao/PhatTrienNangLuc2.jpg" width="90"
                                                                    height="90" alt="National Fresh" /></a>
                                                            </div>
                                                            <div class="left-info">
                                                                <div class="product-title"><a href="#" class="product-name">Bé hiểu và quyền trẻ em</a>
                                                                </div>
                                                                <div class="price">
                                                                    <ins><span class="price-amount"><span class="currencySymbol">40.000</span>
                                                                        VND</span></ins>
                                                                    <del><span class="price-amount"><span class="currencySymbol">50.000</span>
                                                                        VND</span></del>
                                                                </div>
                                                                <div class="qty">
                                                                    <label for="cart[id124][qty]">Số lượng:</label>
                                                                    <input type="number" class="input-qty" name="cart[id124][qty]" id="cart[id124][qty]"
                                                                        value="1" disabled />
                                                                </div>
                                                            </div>
                                                            <div class="action">
                                                                <a href="#" class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                                <a href="#" class="remove"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="minicart-item">
                                                            <div class="thumb">
                                                                <a href="#"><img src="assets/images/SachThamKhao/PhatTrienNangLuc3.jpg" width="90"
                                                                    height="90" alt="National Fresh" /></a>
                                                            </div>
                                                            <div class="left-info">
                                                                <div class="product-title"><a href="#" class="product-name" />Bé hiểu và quyền trẻ em
                                                                </div>
                                                                <div class="price">
                                                                    <ins><span class="price-amount"><span class="currencySymbol">40.000</span>
                                                                        VND</span></ins>
                                                                    <del><span class="price-amount"><span class="currencySymbol">50.000</span>
                                                                        VND</span></del>
                                                                </div>
                                                                <div class="qty">
                                                                    <label for="cart[id124][qty]">Số lượng:</label>
                                                                    <input type="number" class="input-qty" name="cart[id124][qty]" id="cart[id124][qty]"
                                                                        value="1" disabled />
                                                                </div>
                                                            </div>
                                                            <div class="action">
                                                                <a href="#" class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                                <a href="#" class="remove"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="minicart-item">
                                                            <div class="thumb">
                                                                <a href="#"><img src="assets/images/SachThamKhao/PhatTrienNangLuc4.jpg" width="90"
                                                                    height="90" alt="National Fresh" /></a>
                                                            </div>
                                                            <div class="left-info">
                                                                <div class="product-title"><a href="#" class="product-name" />Bé hiểu và quyền trẻ em
                                                                </div>
                                                                <div class="price">
                                                                    <ins><span class="price-amount"><span class="currencySymbol">40.000</span>
                                                                        VND</span></ins>
                                                                    <del><span class="price-amount"><span class="currencySymbol">50.000</span>
                                                                        VND</span></del>
                                                                </div>
                                                                <div class="qty">
                                                                    <label for="cart[id124][qty]">Số lượng:</label>
                                                                    <input type="number" class="input-qty" name="cart[id124][qty]" id="cart[id124][qty]"
                                                                        value="1" disabled />
                                                                </div>
                                                            </div>
                                                            <div class="action">
                                                                <a href="#" class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                                <a href="#" class="remove"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <p class="btn-control">
                                                    <a href="#" class="btn view-cart">Xem giỏ hàng</a>
                                                    <a href="#" class="btn">Thanh toán</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mobile-menu-toggle">
                                    <a class="btn-toggle" data-object="open-mobile-menu" href="javascript:void(0)">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-bottom hidden-sm hidden-xs">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-4">
                            <div class="vertical-menu vertical-category-block">
                                <div class="block-title">
                                    <span class="menu-icon">
                                        <span class="line-1"></span>
                                        <span class="line-2"></span>
                                        <span class="line-3"></span>
                                    </span>
                                    <span class="menu-title"><Link to="/product_cate">Danh mục sản phẩm</Link></span>
                                    <span class="angle" data-tgleclass="fa fa-caret-down"><i class="fa fa-caret-up" aria-hidden="true"></i></span>
                                </div>
                                <div class="wrap-menu">
                                    <ul class="menu clone-main-menu">
                                        <li class="menu-item menu-item-has-children has-child">
                                            <a href="#" class="menu-name" data-title="Vegetables">SÁCH THAM KHẢO</a>
                                            <ul class="sub-menu">
                                                <li class="menu-item menu-item-has-children has-child"><a href="#" class="menu-name"
                                                    data-title="Eggs & other considerations">SÁCH THAM KHẢO LỚP 1</a>
                                                    <ul class="sub-menu">
                                                        <li class="menu-item"><a href="#">Môn Toán 1</a></li>
                                                        <li class="menu-item"><a href="#">Môn Tự nhiên & Xã hội 1</a></li>
                                                        <li class="menu-item"><a href="#">Môn Trải nghiệm và Hướng nghiệp 1</a></li>
                                                        <li class="menu-item"><a href="#">Môn Ngoại ngữ 1</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item menu-item-has-children has-child"><a href="#" class="menu-name"
                                                    data-title="Eggs & other considerations">SÁCH THAM KHẢO LỚP 2</a>
                                                    <ul class="sub-menu">
                                                        <li class="menu-item"><a href="#">Môn Toán 1</a></li>
                                                        <li class="menu-item"><a href="#">Môn Tự nhiên & Xã hội 1</a></li>
                                                        <li class="menu-item"><a href="#">Môn Trải nghiệm và Hướng nghiệm 1</a></li>
                                                        <li class="menu-item"><a href="#">Môn Ngoại ngữ 1</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item menu-item-has-children has-child"><a href="#" class="menu-name"
                                                    data-title="Eggs & other considerations">SÁCH THAM KHẢO LỚP 3</a>
                                                    <ul class="sub-menu">
                                                        <li class="menu-item"><a href="#">Môn Tiếng Việt 1</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item"><a href="#">SÁCH THAM KHẢO LỚP 4</a></li>
                                                <li class="menu-item"><a href="#">SÁCH THAM KHẢO LỚP 5</a></li>
                                                <li class="menu-item menu-item-has-children has-child"><a href="#" class="menu-name"
                                                    data-title="Eggs & other considerations">SÁCH THAM KHẢO LỚP 6</a>
                                                    <ul class="sub-menu">
                                                        <li class="menu-item"><a href="#">Môn Toán 1</a></li>
                                                        <li class="menu-item"><a href="#">Môn Tự nhiên & Xã hội 1</a></li>
                                                        <li class="menu-item"><a href="#">Môn Trải nghiệm và Hướng nghiệm 1</a></li>
                                                        <li class="menu-item"><a href="#">Môn Ngoại ngữ 1</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item menu-item-has-children has-child"><a href="#" class="menu-name"
                                                    data-title="Eggs & other considerations">SÁCH THAM KHẢO LỚP 7</a>
                                                    <ul class="sub-menu">
                                                        <li class="menu-item"><a href="#">Môn Toán 1</a></li>
                                                        <li class="menu-item"><a href="#">Môn Tự nhiên & Xã hội 1</a></li>
                                                        <li class="menu-item"><a href="#">Môn Trải nghiệm và Hướng nghiệm 1</a></li>
                                                        <li class="menu-item"><a href="#">Môn Ngoại ngữ 1</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item"><a href="#">SÁCH THAM KHẢO LỚP 8</a></li>
                                                <li class="menu-item"><a href="#">SÁCH THAM KHẢO LỚP 9</a></li>
                                                <li class="menu-item menu-item-has-children has-child">
                                                    <a href="#" class="menu-name">SÁCH THAM KHẢO LỚP 10</a>
                                                    <ul class="sub-menu">
                                                        <li class="menu-item"><a href="#">Môn Toán 1</a></li>
                                                        <li class="menu-item"><a href="#">Môn Tự nhiên & Xã hội 1</a></li>
                                                        <li class="menu-item"><a href="#">Môn Trải nghiệm và Hướng nghiệm 1</a></li>
                                                        <li class="menu-item"><a href="#">Môn Ngoại ngữ 1</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item"><a href="#">SÁCH THAM KHẢO LỚP 11</a></li>
                                                <li class="menu-item"><a href="#">SÁCH THAM KHẢO LỚP 12</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item menu-item-has-children has-child">
                                            <a href="#" class="menu-name" data-title="Butter & Eggs">THIẾT BỊ CƠ BẢN</a>
                                            <ul class="sub-menu">
                                                <li class="menu-item"><a href="#">Bàn</a></li>
                                                <li class="menu-item"><a href="#">Bàn ghế học sinh</a></li>
                                                <li class="menu-item"><a href="#">Bàn ghế giáo viên</a></li>
                                                <li class="menu-item"><a href="#">Tủ - Kệ - Giá</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item menu-item-has-children has-child">
                                            <a href="#" class="menu-name" data-title="Butter & Eggs">THIẾT BỊ TỐI THIỂU MẦM NON</a>
                                            <ul class="sub-menu">
                                                <li class="menu-item"><a href="#">Bàn</a></li>
                                                <li class="menu-item"><a href="#">Bàn ghế học sinh</a></li>
                                                <li class="menu-item"><a href="#">Bàn ghế giáo viên</a></li>
                                                <li class="menu-item"><a href="#">Tủ - Kệ - Giá</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item menu-item-has-children has-megamenu">
                                            <a href="#" class="menu-name">THIẾT BỊ TỐI THIỂU TIỂU HỌC</a>
                                            <div class="wrap-megamenu lg-width-900 md-width-640 background-mega-02">
                                                <div class="mega-content">
                                                    <div class="row">
                                                        <div class="col-lg-3 col-md-4 sm-col-12 md-margin-bottom-83 xs-margin-bottom-25">
                                                            <div class="wrap-custom-menu vertical-menu">
                                                                <h4 class="menu-title">Lớp 1</h4>
                                                                <ul class="menu">
                                                                    <li><a href="#">Tranh ảnh</a></li>
                                                                    <li><a href="#">Thiết bị dạy học</a></li>
                                                                    <li><a href="#">Thiết bị dùng chung</a></li>

                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="col-lg-3 col-md-4 sm-col-12 lg-padding-left-23 xs-margin-bottom-36px md-margin-bottom-0">
                                                            <div class="wrap-custom-menu vertical-menu">
                                                                <h4 class="menu-title">Lớp 2</h4>
                                                                <ul class="menu">
                                                                    <li><a href="#">Tranh ảnh</a></li>
                                                                    <li><a href="#">Thiết bị dạy học</a></li>
                                                                    <li><a href="#">Thiết bị dùng chung</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-5 col-md-4 col-sm-12 lg-padding-left-57 md-margin-bottom-30">
                                                            <div class="biolife-brand vertical md-boder-left-30">
                                                                <h4 class="menu-title">Hình ảnh minh họa</h4>
                                                                <ul class="brands">
                                                                    <li><a href="#"><img src="assets/images/SachThamKhao/PhatTrienNangLuc.jpg" width="167"
                                                                        height="74" alt="organic" /></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="menu-item menu-item-has-children has-megamenu">
                                            <a href="#" class="menu-name" data-title="Fresh Berries">THIẾT BỊ TỐI THIỂU THCS</a>
                                            <div class="wrap-megamenu lg-width-900 md-width-640 background-mega-02">
                                                <div class="mega-content">
                                                    <div class="row">
                                                        <div class="col-lg-3 col-md-4 sm-col-12 md-margin-bottom-83 xs-margin-bottom-25">
                                                            <div class="wrap-custom-menu vertical-menu">
                                                                <h4 class="menu-title">Lớp 6</h4>
                                                                <ul class="menu">
                                                                    <li><a href="#">Tranh ảnh</a></li>
                                                                    <li><a href="#">Thiết bị dạy học</a></li>
                                                                    <li><a href="#">Thiết bị dùng chung</a></li>

                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-5 col-md-4 col-sm-12 lg-padding-left-57 md-margin-bottom-30">
                                                            <div class="biolife-brand vertical md-boder-left-30">
                                                                <h4 class="menu-title">Hình ảnh minh họa</h4>
                                                                <ul class="brands">
                                                                    <li><a href="#"><img src="assets/images/SachThamKhao/PhatTrienNangLuc.jpg" width="167"
                                                                        height="74" alt="organic" /></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="menu-item"><a href="#" class="menu-name">THIẾT BỊ TỐI THIỂU THPT</a></li>
                                        <li class="menu-item"><a href="#" class="menu-name">THIẾT BỊ TỐI BÁN TRÚ</a></li>
                                        <li class="menu-item"><a href="#" class="menu-name">TB ỨNG DỤNG CÔNG NGHỆ 4.0</a></li>
                                        <li class="menu-item menu-item-has-children has-child">
                                            <a href="#" class="menu-name" data-title="Butter & Eggs">THIẾT BỊ CƠ BẢN</a>
                                            <ul class="sub-menu">
                                                <li class="menu-item"><a href="#">Bàn</a></li>
                                                <li class="menu-item"><a href="#">Bàn ghế học sinh</a></li>
                                                <li class="menu-item"><a href="#">Bàn ghế giáo viên</a></li>
                                                <li class="menu-item"><a href="#">Tủ - Kệ - Giá</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item menu-item-has-children has-child">
                                            <a href="#" class="menu-name" data-title="Butter & Eggs">THIẾT BỊ CƠ BẢN</a>
                                            <ul class="sub-menu">
                                                <li class="menu-item"><a href="#">Bàn</a></li>
                                                <li class="menu-item"><a href="#">Bàn ghế học sinh</a></li>
                                                <li class="menu-item"><a href="#">Bàn ghế giáo viên</a></li>
                                                <li class="menu-item"><a href="#">Tủ - Kệ - Giá</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-8 padding-top-2px">
                            <div class="header-search-bar layout-01">
                                <form action="#" class="form-search" name="desktop-seacrh" method="get">
                                    <input type="text" name="s" class="input-text" value="" placeholder="Tìm kiếm sản phẩm..." />
                                    <select name="category">
                                        <option value="-1" selected>Tất cả danh mục</option>
                                        <option value="vegetables">Sách tham khảo</option>
                                        <option value="fresh_berries">Thiết bị cơ bản</option>
                                        <option value="ocean_foods">Thiết bị tối thiểu mầm non</option>
                                        <option value="butter_eggs">Thiết bị tối thiểu tiểu học</option>
                                        <option value="fastfood">Thiết bị tối thiểu THCS</option>
                                        <option value="fresh_meat">Thiết bị tối thiểu THPT</option>
                                        <option value="fresh_onion">Thiết bị phòng bộ môn</option>
                                        <option value="papaya_crisps">Thiết bị phòng chức năng</option>
                                        <option value="oatmeal">Thiết bị bán trú</option>
                                        <option>Thiết bị ứng dụng công nghệ 4.0</option>
                                        <option>Bộ học liệu điện tử</option>
                                        <option>Thiết bị đóng bộ</option>
                                    </select>
                                    <button type="submit" class="btn-submit"><i class="biolife-icon icon-search"></i></button>
                                </form>
                            </div>
                            <div class="live-info">
                                <p class="telephone"><i class="fa fa-phone" aria-hidden="true"></i><b class="phone-number">0939865544</b>
                                </p>
                                <p class="working-time">Mon-Fri: 8:00am-5:15pm; Sat: 8:00am-12:00am</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
