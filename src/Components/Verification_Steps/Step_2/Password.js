import React from 'react'
import '././style.scss'

function Password() {
    return (
        <div className='Container-password'>
            <div className='password'>
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

                <div className='Set_up-pass'>
                    <div className='set-up'>
                        <div className='please-import'>
                            <img src='/images/Combined-Shape.png' alt='' />
                            <p>Thiết lập mật khẩu</p>
                        </div>
                        <p className='final'>Bước cuối !<span>Thiết lập mật khẩu để hoàn tất viêc đăng ký.</span></p>

                        <div className='Input-pass'>
                            <input placeholder='Mật khẩu' />
                            <button>
                                <img src='/images/unmask.png' alt='' />
                            </button>
                        </div>

                        <p className='require'>Ít nhất một ký tự viết thường.</p>
                        <p className='require'>Ít nhất một ký tự viết hoa.</p>
                        <p className='require'>8 - 16 ký tự.</p>
                        <p className='require'>Chỉ các chữ cái, số mới có thể được sử dụng.</p>
                        <button className='btn-sign_in'>Đăng ký</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Password