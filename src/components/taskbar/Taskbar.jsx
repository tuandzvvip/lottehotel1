import React, { useState } from 'react';
import "./taskbar.css"

function Taskbar() {
    const [showInfo, setShowInfo] = useState(false);
    const [showRooms, setShowRooms] = useState(false);
    const [showuudai, setShowuudai] = useState(false);
    const [showamthuc, setShowamthuc] = useState(false);
    const [showtiennghi, setShowtiennghi] = useState(false);
    const [showtieccuoi, setShowtieccuoi] = useState(false);

    const handleInfoHover = () => {
        setShowInfo(true);
    }
    const handleInfoLeave = () => {
        setShowInfo(false);
    }
    
    const handleRoomHover = () =>{
        setShowRooms(true);

    }
    const handleRoomLeave = () => {
        setShowRooms(false);
    }
    const handleuudaiHover = () => {
        setShowuudai(true);
    }
    const handleuudaiLeave = () => {
        setShowuudai(false);
    }
    const handleamthucHover = () => {
        setShowamthuc(true);
    }
    const handleamthucLeave = () => {
        setShowamthuc(false);
    }
    const handletiennghiHover = () => {
        setShowtiennghi(true);
    }
    const handletiennghiLeave = () => {
        setShowtiennghi(false);
    }
    const handletieccuoiHover = () => {
        setShowtieccuoi(true);
    }
    const handletieccuoiLeave = () => {
        setShowtieccuoi(false);
    }
    return (
        <div className='taskbar'>
            <div className="navi">
                <ul className='navi-taskbar'>
                    <li className='reservation'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <span className='book-reservation'>BOOK</span>
                    </li>
                    <li className='mobshow'
                        onMouseEnter={handleInfoHover}
                        onMouseLeave={handleInfoLeave}
                    >Thông tin về LOTTE Hotel Hà Nội
                        {showInfo && (
                            <div className="detail-info" 
                            onMouseEnter={handleInfoHover}
                            onMouseLeave={handleInfoLeave}>
                                <div className="panel-wrap">
                                    <div className="panel-align">
                                        <a class="menu-1depth-ttl" href="/hanoi-hotel/vi/information.html" >
                                            Thông tin về<br />LOTTE HOTEL HàNội &gt;
                                        </a>
                                    </div>
                                </div>
                                <div className="panel-align1">
                                    <div className="panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Thông tin về LOTTE Hotel Hà Nội</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/about/news.html" class="menu-2depth f-bold">Tin tức</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/location.html" class="menu-2depth f-bold">Địa điểm của LOTTE Hotel Hà Nội</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="https://www.lottehotel.com/global/en/download-site/download-site-chain.html?propertycode=hanoi-hotel" class="menu-2depth f-bold">Hình ảnh</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/hanoi-tourist-attractions.html" class="menu-2depth f-bold" >Điểm du lịch Hà Nội</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                    <li className='mobshow'
                    onMouseEnter={handleRoomHover}
                    onMouseLeave={handleRoomLeave}
                    >Phòng
                    {showRooms && (
                            <div className="detail-info" 
                            onMouseEnter={handleRoomHover}
                            onMouseLeave={handleRoomLeave}
                            >
                                <div className="panel-wrap">
                                    <div className="panel-align">
                                        <a class="menu-1depth-ttl" href="/hanoi-hotel/vi/information.html" >
                                            Phòng &gt;
                                        </a>
                                    </div>
                                </div>
                                <div className="panel-align1">
                                    <div className="panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Standard</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/about/news.html" class="menu-2depth f-bold">Phòng Deluxe</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/location.html" class="menu-2depth f-bold">Phòng Club</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="https://www.lottehotel.com/global/en/download-site/download-site-chain.html?propertycode=hanoi-hotel" class="menu-2depth f-bold">Phòng Deluxe</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/location.html" class="menu-2depth f-bold">Phòng Junior Suite</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/hanoi-tourist-attractions.html" class="menu-2depth f-bold" >Suite</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/hanoi-tourist-attractions.html" class="menu-2depth f-bold" >Phòng Deluxe Suite</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/hanoi-tourist-attractions.html" class="menu-2depth f-bold" >Phòng Premier Suite</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/hanoi-tourist-attractions.html" class="menu-2depth f-bold" >Phòng President Suite</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        )}</li>
                    <li className='mobshow'
                    onMouseEnter={handleuudaiHover}
                    onMouseLeave={handleuudaiLeave}>Ưu đãi
                    {showuudai && (
                            <div className="detail-info" 
                            onMouseEnter={handleuudaiHover}
                            onMouseLeave={handleuudaiLeave}>
                                <div className="panel-wrap">
                                    <div className="panel-align">
                                        <a class="menu-1depth-ttl" href="/hanoi-hotel/vi/information.html" >
                                            Ưu đãi &gt;
                                        </a>
                                    </div>
                                </div>
                                <div className="panel-align1">
                                    <div className="panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Gói Nghỉ dưỡng & Ưu đãi phòng</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/location.html" class="menu-2depth f-bold">Ưu đãi ẩm thực</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/hanoi-tourist-attractions.html" class="menu-2depth f-bold" >Trải nghiệm</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        )}</li>
                    <li className='mobshow'
                    onMouseEnter={handleamthucHover}
                    onMouseLeave={handleamthucLeave}>Ẩm thực
                    {showamthuc && (
                            <div className="detail-info" 
                            onMouseEnter={handleuudaiHover}
                            onMouseLeave={handleuudaiLeave}>
                                <div className="panel-wrap">
                                    <div className="panel-align">
                                        <a class="menu-1depth-ttl" href="/hanoi-hotel/vi/information.html" >
                                            Ẩm thực &gt;
                                        </a>
                                    </div>
                                </div>
                                <div className="panel-align1">
                                    <div className="panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Nhà hàng</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Grill 63</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Red River</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Tim Ho Wan</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/location.html" class="menu-2depth f-bold">BAR & LOUNGE</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/location.html" class="menu-2depth f-bold">Top of Hanoi</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/location.html" class="menu-2depth f-bold">Pharaoh ' Bar & Upper</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/location.html" class="menu-2depth f-bold">The Lounge Sky</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/hanoi-tourist-attractions.html" class="menu-2depth f-bold" >BAKERY</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/hanoi-tourist-attractions.html" class="menu-2depth f-bold" >Delica Hans</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        )}</li>
                    <li className='mobshow'
                    onMouseEnter={handletiennghiHover}
                    onMouseLeave={handletiennghiLeave}>Tiện nghi
                    {showtiennghi && (
                            <div className="detail-info" 
                            onMouseEnter={handletiennghiHover}
                            onMouseLeave={handletiennghiLeave}>
                                <div className="panel-wrap">
                                    <div className="panel-align">
                                        <a class="menu-1depth-ttl" href="/hanoi-hotel/vi/information.html" >
                                            Tiện Nghi &gt;
                                        </a>
                                    </div>
                                </div>
                                <div className="panel-align1">
                                    <div className="panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Spa & Fitness</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Evian Spa</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Phòng tập thể hình khách sạn</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Bể bơi trong nhà</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Bể bơi ngoài trời</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}</li>
                    <li className='mobshow'
                    onMouseEnter={handletieccuoiHover}
                    onMouseLeave={handletieccuoiLeave}>Tiệc cưới&Hội nghị
                    {showtieccuoi && (
                            <div className="detail-info" 
                            onMouseEnter={handletiennghiHover}
                            onMouseLeave={handletiennghiLeave}>
                                <div className="panel-wrap">
                                    <div className="panel-align">
                                        <a class="menu-1depth-ttl" href="/hanoi-hotel/vi/information.html" >
                                            Tiệc cưới & Hội nghị &gt;
                                        </a>
                                    </div>
                                </div>
                                <div className="panel-align1">
                                    <div className="panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Tiệc cưới tại khách sạn</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Phong cách cưới</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Tư vấn</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Hội nghị tại khách sạn</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Phòng Crystal Ballroom</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Phòng Emerald</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Phòng Charlotte</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}</li>
                </ul>
            </div>
            <div className="taskbar-btn">
                <a href="https://www.lottehotel.com/global/vi/lotte-hotel-rewards.html">
                    <button className='btn-lotte'>LOTTE HOTEL REWARDS</button>
                </a>
            </div>
        </div>
    )
}

export default Taskbar