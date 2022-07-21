import React from 'react'
import './style.scss'

const Footer = () => {
  return (
    <div className='Container-2' >
        <div className='Container-2-footer'>
            <div className='Navigate Column'>
                <p>ĐIỀU HƯỚNG</p>
                <ul>
                    <li><a href='#'>Cửa hàng</a></li>
                    <li><a href='#'>Đổi trả</a></li>
                    <li><a href='#'>Giới thiệu</a></li>
                    <li><a href='#'>Tài khoản</a></li>
                </ul>
            </div>

            <div className='Policy Column'>
                <p>CHÍNH SÁCH</p>
                <ul>
                    <li><a href='#'>Chính sách bảo mật</a></li>
                    <li><a href='#'>Chính sách thanh toán</a></li>
                    <li><a href='#'>Điều khoản sử dụng</a></li>
                    <li><a href='#'>Hỗ trợ vận chuyển</a></li>
                </ul>
            </div>

            <div className='Support Column'>
                <p>HỖ TRỢ</p>
                <ul>
                    <li><a href='#'>Hỗ trợ 24/24</a></li>
                    <li><a href='#'>FAQ</a></li>
                    <li><a href='#'>Hướng dẫn</a></li>
                </ul>
            </div>

            <div className='Contact Column'>
                <p>LIÊN HỆ</p>
                <ul>
                    <li><a href='#'>234  Truong Chinh, Da Nang</a></li>
                    <li><a href='#'>(+84)12 345 678</a></li>
                </ul>
                <img src='/images/icon-facebook.png' alt='' className='icon' />
                <img src='/images/icon-twitter.png' alt='' className='icon' />
                <img src='/images/icon-youtube.png' alt='' className='icon' />
                <img src='/images/icon-google.png' alt='' className='icon' />
            </div>

            <div className='Download Column'>
                <p>TẢI ỨNG DỤNG TẠI</p>
                <img src='/images/app_store.png' alt=''  className='down-load'/>
                <img src='/images/google_play.png' alt='' className='down-load'/>
            </div>

        </div>

        <div className='Company'>
            <img src='/images/visa.png' alt='' />
            <img src='/images/master_card.png' alt='' />
            <img src='/images/vector.png' alt='' />
            <p>COMPANY® 2022</p> 
        </div>
    </div>

    
  )
}

export default Footer