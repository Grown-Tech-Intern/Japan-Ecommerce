import React from 'react'
import '././style.scss'

function Menu() {
    return (
        <div className='container_menu'>
            <div className='menu'>
                <div className='menu_items'>
                    <ul className='main-menu'>
                        <li>
                            <i class="fa-solid fa-bars"></i>
                            <a href='#'>Danh Mục</a> 
                                <ul className='sub-menu'> 
                                    <li><a href="#">Tivi</a></li>
                                    <li><a href="#">Tủ lạnh</a></li>
                                    <li><a href="#">Máy lạnh</a></li>
                                    <li><a href="#">Máy giặt</a></li>
                                    <li><a href="#">Quạt điều hòa</a></li>
                                    <li><a href="#">Máy tính</a></li>
                                    <li><a href="#">Điện gia dụng</a></li>
                                    <li><a href="#">Phụ kiện</a></li>
                                </ul> 
                        </li>

                        <li><a href="#">TIVI</a></li>
                        <li><a href="#">TỦ LẠNH</a></li>
                        <li><a href="#">MÁY LẠNH</a></li>
                        <li><a href="#">MÁY GIẶT</a></li>
                        <li><a href="#">QUẠT ĐIỀU HÒA</a></li>
                        <li><a href="#">ĐIỆN GIA DỤNG</a></li>
                        <li><a href="#">MÁY TÍNH</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Menu