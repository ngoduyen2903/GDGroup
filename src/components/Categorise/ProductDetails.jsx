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
import P1 from "../../img/Product/P2.jpg"
import { PiBookOpenTextThin } from "react-icons/pi";
const ProductDetails = () => {
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
                        <li class="nav-item"><a href="#" class="permal-link">Danh mục sản phẩm</a></li>
                        <li class="nav-item"><span class="current-page">Sản phẩm chi tiết</span></li>
                    </ul>
                </nav>
            </div>
            <div class="page-contain single-product">
                <div class="container">
                    <div id="main-content" class="main-content">
                        <div class="sumary-product single-layout">
                            <div class="media">
                                <ul class="biolife-carousel slider-for">
                                    <li><img src={P1} alt="" width="500" height="500" /></li>
                                    <li><img src={P1} alt="" width="500" height="500" /></li>
                                    <li><img src={P1} alt="" width="500" height="500" /></li>
                                    <li><img src={P1} alt="" width="500" height="500" /></li>
                                    <li><img src={P1} alt="" width="500" height="500" /></li>
                                </ul>
                                <ul class="biolife-carousel slider-nav" data-slick='{"arrows":false,"dots":false,"centerMode":false,"focusOnSelect":true,"slidesMargin":10,"slidesToShow":4,"slidesToScroll":1,"asNavFor":".slider-for"}'>
                                    <li><img src={P1} alt="" width="88" height="88" /></li>
                                    <li><img src={P1} alt="" width="88" height="88" /></li>
                                    <li><img src={P1} alt="" width="88" height="88" /></li>
                                    <li><img src={P1} alt="" width="88" height="88" /></li>
                                    <li><img src={P1} alt="" width="88" height="88" /></li>
                                </ul>
                            </div>
                            <div class="product-attribute">
                                <h3 class="title">TOÁN - Em tìm hiểu về: ĐỘ DÀI. XĂNG-TI-MÉT</h3>
                                <div class="rating">
                                    <p class="star-rating"><span class="width-80percent"></span></p>
                                    <span class="review-count">(04 Reviews)</span>
                                    <span class="qa-text">Q&amp;A</span>
                                    <b class="category">By: Natural food</b>
                                </div>
                                <span class="sku">Sku: #76584HH</span>
                                <p class="excerpt">Dạy học theo hướng phát triển năng lực học sinh là yêu cầu bắt buộc khi áp dụng chương trình giáo dục phổ thông theo Thông tư số 32/2018/TT-BGDĐT ngày 26 tháng 12 năm 2018 của Bộ Giáo dục và Đào tạo. Trong đó, môn Toán là môn chủ đạo phát triển năng lực tính toán cho học sinh. Chương trình môn Toán đã xác định 05 năng lực thành phần của năng lực Toán học, đó là: Năng lực tư duy và lập luận toán học; năng lực mô hình hoá toán học; năng lực giải quyết vấn đề toán học; năng lực giao tiếp toán học; năng lực sử dụng công cụ, phương tiện học toán. Vì vậy, sau khi tìm tòi, khám phá và lĩnh hội các kiến thức mới, học sinh cần áp dụng các kiến thức này vào việc thực hiện các bài tập, nhất là các bài tập mang tính thực tiễn, nhằm phát triển năng lực Toán học của bản thân.</p>
                                <p class="excerpt">Với tinh thần đó, nhóm tác giả mong muốn Bộ sách không chỉ giúp các em học sinh nhận thấy Toán học gần gũi, thú vị và rất cần thiết cho cuộc sống của chính các em, mà còn là phương tiện hữu ích, hỗ trợ phụ huynh trong việc giúp đỡ con em mình rèn luyện các bài tập để phát triển năng lực Toán học. Đặc biệt, chúng tôi hy vọng Bộ sách sẽ hỗ trợ đắc lực cho giáo viên trong việc thiết kế và sử dụng các câu hỏi, bài tập theo các mức độ quy định, giúp giáo viên có thể biên soạn đề kiểm tra định kỳ theo hướng phát triển năng lực học sinh.</p>

                                <div class="price">
                                    <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                </div>
                                <div class="shipping-info">
                                    <p class="shipping-day">3-Day Shipping</p>
                                    <p class="for-today">Pree Pickup Today</p>
                                </div>
                            </div>
                            <div class="action-form">
                                <div class="quantity-box">
                                    <span class="title">Số lượng:</span>
                                    <div class="qty-input">
                                        <input type="text" name="qty12554" value="1" data-max_value="20" data-min_value="1" data-step="1" />
                                        <a href="#" class="qty-btn btn-up"><i class="fa fa-caret-up" aria-hidden="true"></i></a>
                                        <a href="#" class="qty-btn btn-down"><i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                <div class="buttons">
                                    <a href="#" class="btn add-to-cart-btn">Thêm vào giỏ hàng</a>
                                    <p class="pull-row">
                                        <a href="#" class="btn wishlist-btn">wishlist</a>
                                        <a href="#" class="btn compare-btn">compare</a>
                                    </p>
                                </div>
                                <div class="location-shipping-to">
                                    <span class="title">Ship to:</span>
                                    <select name="shipping_to" class="country">
                                        <option value="-1">Select Country</option>
                                        <option value="america">America</option>
                                        <option value="france">France</option>
                                        <option value="germany">Germany</option>
                                        <option value="japan">Japan</option>
                                    </select>
                                </div>
                                <div class="social-media">
                                    <ul class="social-list">
                                        <li><a href="#" class="social-link"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#" class="social-link"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#" class="social-link"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                        <li><a href="#" class="social-link"><i class="fa fa-share-alt" aria-hidden="true"></i></a></li>
                                        <li><a href="#" class="social-link"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                                <div class="acepted-payment-methods">
                                    <ul class="payment-methods">
                                        <li><img src="assets/images/card1.jpg" alt="" width="51" height="36" /></li>
                                        <li><img src="assets/images/card2.jpg" alt="" width="51" height="36" /></li>
                                        <li><img src="assets/images/card3.jpg" alt="" width="51" height="36" /></li>
                                        <li><img src="assets/images/card4.jpg" alt="" width="51" height="36" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="product-tabs single-layout biolife-tab-contain">
                            <div class="tab-head">
                                <ul class="tabs">
                                    <li class="tab-element active"><a href="#tab_1st" class="tab-link">Products Descriptions</a></li>
                                    <li class="tab-element" ><a href="#tab_2nd" class="tab-link">Addtional information</a></li>
                                    <li class="tab-element" ><a href="#tab_3rd" class="tab-link">Shipping & Delivery</a></li>
                                    <li class="tab-element" ><a href="#tab_4th" class="tab-link">Customer Reviews <sup>(3)</sup></a></li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div id="tab_1st" class="tab-contain desc-tab active">
                                    <p class="desc">Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit.
                                        Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.</p>
                                    <div class="desc-expand">
                                        <span class="title">Organic Fresh Fruit</span>
                                        <ul class="list">
                                            <li>100% real fruit ingredients</li>
                                            <li>100 fresh fruit bags individually wrapped</li>
                                            <li>Blending Eastern & Western traditions, naturally</li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="tab_2nd" class="tab-contain addtional-info-tab">
                                    <table class="tbl_attributes">
                                        <tbody>
                                            <tr>
                                                <th>Color</th>
                                                <td><p>Black, Blue, Purple, Red, Yellow</p></td>
                                            </tr>
                                            <tr>
                                                <th>Size</th>
                                                <td><p>S, M, L</p></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="tab_3rd" class="tab-contain shipping-delivery-tab">
                                    <div class="accodition-tab biolife-accodition">
                                        <ul class="tabs">
                                            <li class="tab-item">
                                                <span class="title btn-expand">How long will it take to receive my order?</span>
                                                <div class="content">
                                                    <p>Orders placed before 3pm eastern time will normally be processed and shipped by the following business day. For orders received after 3pm, they will generally be processed and shipped on the second business day. For example if you place your order after 3pm on Monday the order will ship on Wednesday. Business days do not include Saturday and Sunday and all Holidays. Please allow additional processing time if you order is placed on a weekend or holiday. Once an order is processed, speed of delivery will be determined as follows based on the shipping mode selected:</p>
                                                    <div class="desc-expand">
                                                        <span class="title">Shipping mode</span>
                                                        <ul class="list">
                                                            <li>Standard (in transit 3-5 business days)</li>
                                                            <li>Priority (in transit 2-3 business days)</li>
                                                            <li>Express (in transit 1-2 business days)</li>
                                                            <li>Gift Card Orders are shipped via USPS First Class Mail. First Class mail will be delivered within 8 business days</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="tab-item">
                                                <span class="title btn-expand">How is the shipping cost calculated?</span>
                                                <div class="content">
                                                    <p>You will pay a shipping rate based on the weight and size of the order. Large or heavy items may include an oversized handling fee. Total shipping fees are shown in your shopping cart. Please refer to the following shipping table:</p>
                                                    <p>Note: Shipping weight calculated in cart may differ from weights listed on product pages due to size and actual weight of the item.</p>
                                                </div>
                                            </li>
                                            <li class="tab-item">
                                                <span class="title btn-expand">Why Didn’t My Order Qualify for FREE shipping?</span>
                                                <div class="content">
                                                    <p>We do not deliver to P.O. boxes or military (APO, FPO, PSC) boxes. We deliver to all 50 states plus Puerto Rico. Certain items may be excluded for delivery to Puerto Rico. This will be indicated on the product page.</p>
                                                </div>
                                            </li>
                                            <li class="tab-item">
                                                <span class="title btn-expand">Shipping Restrictions?</span>
                                                <div class="content">
                                                    <p>We do not deliver to P.O. boxes or military (APO, FPO, PSC) boxes. We deliver to all 50 states plus Puerto Rico. Certain items may be excluded for delivery to Puerto Rico. This will be indicated on the product page.</p>
                                                </div>
                                            </li>
                                            <li class="tab-item">
                                                <span class="title btn-expand">Undeliverable Packages?</span>
                                                <div class="content">
                                                    <p>Occasionally packages are returned to us as undeliverable by the carrier. When the carrier returns an undeliverable package to us, we will cancel the order and refund the purchase price less the shipping charges. Here are a few reasons packages may be returned to us as undeliverable:</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="tab_4th" class="tab-contain review-tab">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                                                <div class="rating-info">
                                                    <p class="index"><strong class="rating">4.4</strong>out of 5</p>
                                                    <div class="rating"><p class="star-rating"><span class="width-80percent"></span></p></div>
                                                    <p class="see-all">See all 68 reviews</p>
                                                    <ul class="options">
                                                        <li>
                                                            <div class="detail-for">
                                                                <span class="option-name">5stars</span>
                                                                <span class="progres">
                                                                    <span class="line-100percent"><span class="percent width-90percent"></span></span>
                                                                </span>
                                                                <span class="number">90</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="detail-for">
                                                                <span class="option-name">4stars</span>
                                                                <span class="progres">
                                                                    <span class="line-100percent"><span class="percent width-30percent"></span></span>
                                                                </span>
                                                                <span class="number">30</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="detail-for">
                                                                <span class="option-name">3stars</span>
                                                                <span class="progres">
                                                                    <span class="line-100percent"><span class="percent width-40percent"></span></span>
                                                                </span>
                                                                <span class="number">40</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="detail-for">
                                                                <span class="option-name">2stars</span>
                                                                <span class="progres">
                                                                    <span class="line-100percent"><span class="percent width-20percent"></span></span>
                                                                </span>
                                                                <span class="number">20</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="detail-for">
                                                                <span class="option-name">1star</span>
                                                                <span class="progres">
                                                                    <span class="line-100percent"><span class="percent width-10percent"></span></span>
                                                                </span>
                                                                <span class="number">10</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-lg-7 col-md-7 col-sm-6 col-xs-12">
                                                <div class="review-form-wrapper">
                                                    <span class="title">Submit your review</span>
                                                    <form action="#" name="frm-review" method="post">
                                                        <div class="comment-form-rating">
                                                            <label>1. Your rating of this products:</label>
                                                            <p class="stars">
                                                                <span>
                                                                    <a class="btn-rating" data-value="star-1" href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a>
                                                                    <a class="btn-rating" data-value="star-2" href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a>
                                                                    <a class="btn-rating" data-value="star-3" href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a>
                                                                    <a class="btn-rating" data-value="star-4" href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a>
                                                                    <a class="btn-rating" data-value="star-5" href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <p class="form-row wide-half">
                                                            <input type="text" name="name" value="" placeholder="Your name" />
                                                        </p>
                                                        <p class="form-row wide-half">
                                                            <input type="email" name="email" value="" placeholder="Email address" />
                                                        </p>
                                                        <p class="form-row">
                                                            <textarea name="comment" id="txt-comment" cols="30" rows="10" placeholder="Write your review here..."></textarea>
                                                        </p>
                                                        <p class="form-row">
                                                            <button type="submit" name="submit">submit review</button>
                                                        </p>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="comments">
                                            <ol class="commentlist">
                                                <li class="review">
                                                    <div class="comment-container">
                                                        <div class="row">
                                                            <div class="comment-content col-lg-8 col-md-9 col-sm-8 col-xs-12">
                                                                <p class="comment-in"><span class="post-name">Quality is our way of life</span><span class="post-date">01/04/2018</span></p>
                                                                <div class="rating"><p class="star-rating"><span class="width-80percent"></span></p></div>
                                                                <p class="author">by: <b>Shop organic</b></p>
                                                                <p class="comment-text">There are few things in life that please people more than the succulence of quality fresh fruit and vegetables.  At Fresh Fruits we work to deliver the world’s freshest, choicest, and juiciest produce to discerning customers across the UAE and GCC.</p>
                                                            </div>
                                                            <div class="comment-review-form col-lg-3 col-lg-offset-1 col-md-3 col-sm-4 col-xs-12">
                                                                <span class="title">Was this review helpful?</span>
                                                                <ul class="actions">
                                                                    <li><a href="#" class="btn-act like" data-type="like"><i class="fa fa-thumbs-up" aria-hidden="true"></i>Yes (100)</a></li>
                                                                    <li><a href="#" class="btn-act hate" data-type="dislike"><i class="fa fa-thumbs-down" aria-hidden="true"></i>No (20)</a></li>
                                                                    <li><a href="#" class="btn-act report" data-type="dislike"><i class="fa fa-flag" aria-hidden="true"></i>Report</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="review">
                                                    <div class="comment-container">
                                                        <div class="row">
                                                            <div class="comment-content col-lg-8 col-md-9 col-sm-8 col-xs-12">
                                                                <p class="comment-in"><span class="post-name">Quality is our way of life</span><span class="post-date">01/04/2018</span></p>
                                                                <div class="rating"><p class="star-rating"><span class="width-80percent"></span></p></div>
                                                                <p class="author">by: <b>Shop organic</b></p>
                                                                <p class="comment-text">There are few things in life that please people more than the succulence of quality fresh fruit and vegetables.  At Fresh Fruits we work to deliver the world’s freshest, choicest, and juiciest produce to discerning customers across the UAE and GCC.</p>
                                                            </div>
                                                            <div class="comment-review-form col-lg-3 col-lg-offset-1 col-md-3 col-sm-4 col-xs-12">
                                                                <span class="title">Was this review helpful?</span>
                                                                <ul class="actions">
                                                                    <li><a href="#" class="btn-act like" data-type="like"><i class="fa fa-thumbs-up" aria-hidden="true"></i>Yes (100)</a></li>
                                                                    <li><a href="#" class="btn-act hate" data-type="dislike"><i class="fa fa-thumbs-down" aria-hidden="true"></i>No (20)</a></li>
                                                                    <li><a href="#" class="btn-act report" data-type="dislike"><i class="fa fa-flag" aria-hidden="true"></i>Report</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="review">
                                                    <div class="comment-container">
                                                        <div class="row">
                                                            <div class="comment-content col-lg-8 col-md-9 col-sm-8 col-xs-12">
                                                                <p class="comment-in"><span class="post-name">Quality is our way of life</span><span class="post-date">01/04/2018</span></p>
                                                                <div class="rating"><p class="star-rating"><span class="width-80percent"></span></p></div>
                                                                <p class="author">by: <b>Shop organic</b></p>
                                                                <p class="comment-text">There are few things in life that please people more than the succulence of quality fresh fruit and vegetables.  At Fresh Fruits we work to deliver the world’s freshest, choicest, and juiciest produce to discerning customers across the UAE and GCC.</p>
                                                            </div>
                                                            <div class="comment-review-form col-lg-3 col-lg-offset-1 col-md-3 col-sm-4 col-xs-12">
                                                                <span class="title">Was this review helpful?</span>
                                                                <ul class="actions">
                                                                    <li><a href="#" class="btn-act like" data-type="like"><i class="fa fa-thumbs-up" aria-hidden="true"></i>Yes (100)</a></li>
                                                                    <li><a href="#" class="btn-act hate" data-type="dislike"><i class="fa fa-thumbs-down" aria-hidden="true"></i>No (20)</a></li>
                                                                    <li><a href="#" class="btn-act report" data-type="dislike"><i class="fa fa-flag" aria-hidden="true"></i>Report</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                            <div class="biolife-panigations-block version-2">
                                                <ul class="panigation-contain">
                                                    <li><span class="current-page">1</span></li>
                                                    <li><a href="#" class="link-page">2</a></li>
                                                    <li><a href="#" class="link-page">3</a></li>
                                                    <li><span class="sep">....</span></li>
                                                    <li><a href="#" class="link-page">20</a></li>
                                                    <li><a href="#" class="link-page next"><i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                                                </ul>
                                                <div class="result-count">
                                                    <p class="txt-count"><b>1-5</b> of <b>126</b> reviews</p>
                                                    <a href="#" class="link-to">See all<i class="fa fa-caret-right" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="product-related-box single-layout">
                            <div class="biolife-title-box lg-margin-bottom-26px-im">
                                <span class="biolife-icon icon-organic"></span>
                                <span class="subtitle">All the best item for You</span>
                                <h3 class="main-title">Related Products</h3>
                            </div>
                            <ul class="products-list biolife-carousel nav-center-02 nav-none-on-mobile" data-slick='{"rows":1,"arrows":true,"dots":false,"infinite":false,"speed":400,"slidesMargin":0,"slidesToShow":5, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 4}},{"breakpoint":992, "settings":{ "slidesToShow": 3, "slidesMargin":20 }},{"breakpoint":768, "settings":{ "slidesToShow": 2, "slidesMargin":10}}]}'>

                                <li class="product-item">
                                    <div class="contain-product layout-default">
                                        <div class="product-thumb">
                                            <a href="#" class="link-to-product">
                                                <img src={P1} alt="dd" width="270" height="270" class="product-thumnail" />
                                            </a>
                                        </div>
                                        <div class="info">
                                            <b class="categories">Fresh Fruit</b>
                                            <h4 class="product-title"><a href="#" class="pr-name">National Fresh Fruit</a></h4>
                                            <div class="price">
                                                <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                                <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div class="slide-down-box">
                                                <p class="message">All products are carefully selected to ensure food safety.</p>
                                                <div class="buttons">
                                                    <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                    <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>Thêm vào giỏ hàng</a>
                                                    <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="product-item">
                                    <div class="contain-product layout-default">
                                        <div class="product-thumb">
                                            <a href="#" class="link-to-product">
                                                <img src="assets/images/products/p-14.jpg" alt="dd" width="270" height="270" class="product-thumnail" />
                                            </a>
                                        </div>
                                        <div class="info">
                                            <b class="categories">Fresh Fruit</b>
                                            <h4 class="product-title"><a href="#" class="pr-name">National Fresh Fruit</a></h4>
                                            <div class="price">
                                                <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                                <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div class="slide-down-box">
                                                <p class="message">All products are carefully selected to ensure food safety.</p>
                                                <div class="buttons">
                                                    <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                    <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart</a>
                                                    <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="product-item">
                                    <div class="contain-product layout-default">
                                        <div class="product-thumb">
                                            <a href="#" class="link-to-product">
                                                <img src="assets/images/products/p-15.jpg" alt="dd" width="270" height="270" class="product-thumnail" />
                                            </a>
                                        </div>
                                        <div class="info">
                                            <b class="categories">Fresh Fruit</b>
                                            <h4 class="product-title"><a href="#" class="pr-name">National Fresh Fruit</a></h4>
                                            <div class="price">
                                                <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                                <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div class="slide-down-box">
                                                <p class="message">All products are carefully selected to ensure food safety.</p>
                                                <div class="buttons">
                                                    <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                    <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart</a>
                                                    <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="product-item">
                                    <div class="contain-product layout-default">
                                        <div class="product-thumb">
                                            <a href="#" class="link-to-product">
                                                <img src="assets/images/products/p-10.jpg" alt="dd" width="270" height="270" class="product-thumnail" />
                                            </a>
                                        </div>
                                        <div class="info">
                                            <b class="categories">Fresh Fruit</b>
                                            <h4 class="product-title"><a href="#" class="pr-name">National Fresh Fruit</a></h4>
                                            <div class="price">
                                                <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                                <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div class="slide-down-box">
                                                <p class="message">All products are carefully selected to ensure food safety.</p>
                                                <div class="buttons">
                                                    <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                    <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart</a>
                                                    <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="product-item">
                                    <div class="contain-product layout-default">
                                        <div class="product-thumb">
                                            <a href="#" class="link-to-product">
                                                <img src="assets/images/products/p-08.jpg" alt="dd" width="270" height="270" class="product-thumnail" />
                                            </a>
                                        </div>
                                        <div class="info">
                                            <b class="categories">Fresh Fruit</b>
                                            <h4 class="product-title"><a href="#" class="pr-name">National Fresh Fruit</a></h4>
                                            <div class="price">
                                                <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                                <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div class="slide-down-box">
                                                <p class="message">All products are carefully selected to ensure food safety.</p>
                                                <div class="buttons">
                                                    <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                    <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart</a>
                                                    <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="product-item">
                                    <div class="contain-product layout-default">
                                        <div class="product-thumb">
                                            <a href="#" class="link-to-product">
                                                <img src="assets/images/products/p-21.jpg" alt="dd" width="270" height="270" class="product-thumnail" />
                                            </a>
                                        </div>
                                        <div class="info">
                                            <b class="categories">Fresh Fruit</b>
                                            <h4 class="product-title"><a href="#" class="pr-name">National Fresh Fruit</a></h4>
                                            <div class="price">
                                                <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                                <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div class="slide-down-box">
                                                <p class="message">All products are carefully selected to ensure food safety.</p>
                                                <div class="buttons">
                                                    <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                    <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart</a>
                                                    <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="product-item">
                                    <div class="contain-product layout-default">
                                        <div class="product-thumb">
                                            <a href="#" class="link-to-product">
                                                <img src="assets/images/products/p-18.jpg" alt="dd" width="270" height="270" class="product-thumnail" />
                                            </a>
                                        </div>
                                        <div class="info">
                                            <b class="categories">Fresh Fruit</b>
                                            <h4 class="product-title"><a href="#" class="pr-name">National Fresh Fruit</a></h4>
                                            <div class="price">
                                                <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                                <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div class="slide-down-box">
                                                <p class="message">All products are carefully selected to ensure food safety.</p>
                                                <div class="buttons">
                                                    <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                                    <a href="#" class="btn add-to-cart-btn"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart</a>
                                                    <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
