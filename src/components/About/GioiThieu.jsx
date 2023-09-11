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
const GioiThieu = () => {
    return (
        <div class="page-contain blog-page left-sidebar">
            <div class="container">
                <div class="row">
                    <div id="main-content" class="main-content col-lg-9 col-md-8 col-sm-12 col-xs-12">
                        <div class="single-post-contain">
                            <div class="post-head">
                                <h2 class="post-name">Giới thiệu</h2>
                            </div>
                            <div class="post-content">
                                <p><b>Hệ thống GD Group</b> là một trong những đơn vị tiên phong trong lĩnh vực nghiên cứu, thiết kế, sản xuất và cung ứng trang thiết bị dạy học, phục vụ cho giáo dục từ Mầm non đến Giáo dục Phổ thông, Giáo dục Cao đẳng và Đại học. Sản phẩm của chúng tôi rất đa dạng, đầy đủ với nhiều mẫu mã, chủng loại khác nhau, được sản xuất trong nước và quốc tế bao gồm: Thiết bị nội thất văn phòng, nội thất trường học; Trang thiết bị phòng học và thực hành; Trang thiết bị, đồ dùng đồ chơi Mầm non; Sách tham khảo,... Sau gần 10 năm hoạt động, hiện nay các sản phẩm của GD Group đã có mặt trên toàn quốc. Chúng tôi tin tưởng rằng các sản phẩm mang thương hiệu GD Group sẽ góp phần quan trọng vào sự phát triển toàn diện của trẻ em Việt Nam và sự nghiệp đổi mới giáo dục chung của đất nước.</p>
                                <p>Chúng tôi nhận thức rõ vai trò và tầm quan trọng của thiết bị giáo dục, trong những năm qua, lãnh đạo và đội ngũ nhân viên GD Group không ngừng phấn đấu tìm tòi, sáng tạo, cải tiến công nghệ, đầu tư cơ sở hạ tầng nhà máy, hiện đại hoá dây chuyền máy móc, trang thiết bị sản xuất, nhằm đa dạng các mẫu mã, sản phẩm đảm bảo chất lượng, có tính giáo dục, thẩm mỹ cho từng sản phẩm và an toàn tuyệt đối cho người lớn, trẻ em; đảm bảo theo các Thông tư và Nghị định của Bộ giáo dục và Đào tạo.</p>
                                <p><b>Hệ thống GD Group</b> có đội ngũ chuyên gia, các kỹ sư, kỹ thuật viên và nhân viên giàu nhiệt huyết, trách nhiệm với chuyên môn cao, sẵn sàng phục vụ mọi đối tượng khách hàng. Để nâng cao chất lượng sản phẩm, chất lượng phục vụ, chăm sóc và đảm bảo lợi ích cao nhất cho Quý khách hàng, <b>hệ thống GD Group</b> đã vận hành và áp dụng hệ thống quản lý chất lượng theo tiêu chuẩn <b>ISO 9001: 2015;</b> Hệ thống quản lý môi trường theo tiêu chuẩn <b>ISO 14001:2015;</b> Hệ thống quản lý an toàn và sức khoẻ nghề nghiệp <b>ISO 45001:2018;</b> Chứng nhận sản phẩm Gỗ ghép thanh bằng keo phù hợp với tiêu chuẩn kỹ thuật quốc gia <b>TCVN 8575:2010;</b> Chứng nhận về Đồ gỗ nội thất <b>TCVN 5373:2020</b>.</p>
                                <p>Thời gian qua <b>Hệ thống GD Group</b> đã khẳng định được vị thế, lòng tin, sự tín nhiệm và đánh giá cao của các cơ quan chuyên môn, các thầy cô giáo, các bậc phụ huynh và sự yêu thích của học sinh. Cùng với phương châm “Trẻ em hôm nay, thế giới ngày mai” hệ thống chúng tôi sẽ không ngừng sáng tạo, tạo ra các trang thiết bị dạy học hiện đại, hiệu quả và thiết thực, góp phần vào sự nghiệp đổi mới giáo dục nước nhà.</p>
                                <p> Xin chân thành cảm ơn sự quan tâm và tín nhiệm của Quý khách đối với các sản phẩm của <b>Hệ thống GD Group</b>!</p>
                            </div>
                        </div>
                    </div>
                    <aside id="sidebar" class="sidebar blog-sidebar col-lg-3 col-md-4 col-sm-12 col-xs-12">
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
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default GioiThieu;
