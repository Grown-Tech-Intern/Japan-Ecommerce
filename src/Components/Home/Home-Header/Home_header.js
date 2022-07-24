import React from 'react'
import '././style.scss'

function Home_header() {
  return (
    <div className="container_home-header">
        <div className='home-header'>
            <img src='/images/logo.png' alt='' className='logo-home' />

            <div className='search_bar'>
                <input className='input_search' placeholder='Tìm kiếm...' />
                <div className='icon-search'>
                    <img src='/images/search.svg' alt='' />
                </div>
            </div>

            <div className='logo_name'>
                <div className='logo_vn'>
                    <img src='/images/logo_vn.png' alt='' />
                </div>
                <p>Việt Nam</p>
                <img src='/images/arrow_down.svg' alt='' />
            </div>

            <div className='two_logo'>
                <img src='/images/heart.svg' alt='' />
                <img src='/images/cart.svg' alt='' />
            </div>

            <div className='two_button'>
                <a href='#'>ĐĂNG KÝ / </a> 
                <a href='#'>ĐĂNG NHẬP</a>
            </div>

        </div>

    </div>
  )
}

export default Home_header