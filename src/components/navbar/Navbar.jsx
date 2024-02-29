import React, { useState } from 'react'
import "./navbar.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import { DateRange } from 'react-date-range'
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        })
    };
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate("/hotels", { state: {  date, options } });
      };
    return (
        <div className='navbar-search'>
            <div className="Lottename">
                <label className='label-khachsan'>Khách sạn</label>
                <br />
                <span className='span-khachsan'>Khách sạn LOTTE Hà Nội</span>
            </div>
            <div className="searchdate">
                <label className='label-date1'>Nhận Phòng</label>
                <label className='label-date'>Trả Phòng</label>
                <br />
                <div className="headerSearchItem">
                    <span onClick={() => setOpenDate(!openDate)}
                        className='headerSearchText'>
                        {`${format(date[0].startDate, "EEE,MMM dd")}  to  ${format(
                            date[0].endDate,
                            "EEE,MMM dd"
                        )}`}
                    </span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='date'
                    />}
                </div>

            </div>
            <div className="searchroom">
                <div className="headerSearchItem">
                    <label className='labelroom'>Số Lượng</label>
                    <br />
                    <span
                        onClick={() => setOpenOptions(!openOptions)}
                        className='headerSearchText'>
                        {`${options.adult} Adult · ${options.children} Child · ${options.room} Room`}
                    </span>
                    {openOptions && <div className="options">
                        <div className="optionItem">
                            <span className='optionText'>Người lớn</span>
                            <div className="optionCounter">
                                <button className='optionCounterButton'
                                    disabled={options.adult <= 1}
                                    onClick={() => handleOption("adult", "d")}
                                >-</button>
                                <span className='optionCounterNumber'>
                                    {options.adult}
                                </span>
                                <button className='optionCounterButton'
                                    onClick={() => handleOption("adult", "i")}
                                >+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className='optionText'>Trẻ em</span>
                            <div className="optionCounter">
                                <button className='optionCounterButton'
                                    disabled={options.children <= 0}
                                    onClick={() => handleOption("children", "d")}
                                >-</button>
                                <span className='optionCounterNumber'>
                                    {options.children}
                                </span>
                                <button className='optionCounterButton'
                                    onClick={() => handleOption("children", "i")}
                                >+</button>
                            </div>

                        </div>
                        <div className="optionItem">
                            <span className='optionText'>Room</span>
                            <div className="optionCounter">
                                <button className='optionCounterButton'
                                    disabled={options.room <= 1}
                                    onClick={() => handleOption("room", "d")}
                                >-</button>
                                <span className='optionCounterNumber'>
                                    {options.room}
                                </span>
                                <button className='optionCounterButton'
                                    onClick={() => handleOption("room", "i")}
                                >+</button>
                            </div>

                        </div>
                    </div>}
                </div>
            </div>
            <div className="khuyenmai">
                <div className="contentkhuyenmai">
                    <i class="fa-solid fa-layer-group"></i>
                    <span className='contentkhuyenmai1'>mã khuyến mãi</span>
                </div>
                <div className="timkiem">
                    <button className='btntimkiem' onClick={handleSearch}>Tìm kiếm</button>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar