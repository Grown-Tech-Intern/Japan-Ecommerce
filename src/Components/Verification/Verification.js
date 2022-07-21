import React from 'react'
import './style.scss'

function Verification() {
    return (
        <div className="Container-vertification">
            <div className="Vertification">
                <div className='please-import'>
                    <img src='/images/Combined-Shape.png' alt='' />
                    <p>Vui lòng nhập mã xác minh</p>
                </div>
                <p className="code">Mã xác minh của bạn sẽ được gửi bằng tin nhắn đến </p>
                <p className='phone'>(+84) 9*****040</p>

                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>

                <p className='info'>
                    Nếu chưa nhận được, vui lòng chờ trong 60 giây để gửi lại.
                </p>

                <button className='auth'>Xác nhận</button>
            </div>
        </div>
    )
}

export default Verification