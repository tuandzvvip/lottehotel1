import React from 'react'
import "./header.css"

function Header() {
  return (
    <div className="topofHead">
        <div className="inner">
            <h1>
                <a className='logo' href="https://www.lottehotel.com/hanoi-hotel/vi.html">
                    <img src="https://www.lottehotel.com/content/dam/lottehotel/components/common/structure/header/gnb_logo_hotels.png" alt="Lotte Hotel logo"  className='logoimg'/>
                </a>
            </h1>
            <div className="s598-quick">
                <div className="quicklist">
                    <a href="/global/vi.html" className='s121'>   
                        <img src="https://www.lottehotel.com/content/dam/lottehotel/components/common/structure/header/tmp_global.png" />                
                        <span>Toàn cầu</span>                      
                    </a>
                    <a className='s121' href="https://www.lottehotel.com/global/vi/hotel-finder.html">
                        <span>Tìm kiếm khách sạn</span>
                    </a>
                    <a className='s121' href="https://www.lottehotel.com/global/vi/reservation/view-reservation.html">
                        <span>Đặt phòng</span>
                    </a>
                    <a className='s121' href="https://www.lottehotel.com/global/vi/member/login.html">
                        <span>Đăng nhập</span>
                    </a>
                    <a className='s121' href="https://www.lottehotel.com/global/vi/member/sign-up.html">
                        <span>Đăng ký</span>
                    </a>
                    <a href="#language" className='s122'>
                        <span>Tiếng Việt ^</span>
                    </a>
                    <a href="#language" className='s122'>
                        <span>VND ^</span>
                    </a>
                </div>
                <div className="quicksite">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header