import React from 'react'
import './style.scss'

const Header = () => {
  return (
    <div className='Container'>
        <div className='Container-header'>
            <img src='/images/logo.png' alt='' /> 
            <p className='title-login'>ĐĂNG NHẬP</p>
            <p><a href='#' className='need-help'>Bạn cần giúp đỡ ?</a></p>
        </div>     
        
    </div>
  )
}

export default Header