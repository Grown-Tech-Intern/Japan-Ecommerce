import React from 'react'
import '././style.scss'

function Phone() {
    return (
        <div className='Container-phone'>
            <div className='phone'>
                <div className='steps'>
                    <div className='step_1'>
                        <p className='no-1'>1</p>
                        <p className='auth-phone'>Xác minh số điện thoại</p>
                    </div>

                    <div className='arr'>
                        <div class="arrow"></div>
                        <div class="arrow-1"></div>
                    </div>

                    <div className='step_2'>
                        <p className='no-2'>2</p>
                        <p className='create-pass'>Tạo mật khẩu</p>
                    </div>

                    <div className='arr '>
                        <div class="arrow arr-2"></div>
                        <div class="arrow-1 arr-3"></div>
                    </div>
                                        
                    <div className='step_3'>
                        <div className='check'>
                            <p className='no-3'></p>
                        </div>
                        <p className='complete'>Hoàn thành</p>
                    </div>
                </div>

                <div className='Container-vertification'>
                    <div className="Vertification">
                        <div className='please-import'>
                            <img src='/images/Combined-Shape.png' alt='' />
                            <p>Vui lòng nhập mã xác minh</p>
                        </div>
                        <p className="code">Mã xác minh của bạn sẽ được gửi bằng tin nhắn đến </p>
                        <p className='phone'>(+84) 9*****040</p>

                        <p className='info'>
                            Nếu chưa nhận được, vui lòng chờ trong 60 giây để gửi lại.
                        </p>

                        {/* <button className='auth'>Xác nhận</button> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Phone