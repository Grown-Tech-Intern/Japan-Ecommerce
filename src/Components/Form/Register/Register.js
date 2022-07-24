import React from 'react'
import '././style.scss'


function Register() {
    return (
        <div className='Container-Register'>
            <div className='Register'>
                <div></div>
                <form className='Form-Register'>
                    <p className='title'>Đăng ký</p>
                    <div className='Input-email'>
                        <input placeholder='Mail' />
                        <div className="error">
                            Mail không hợp lệ
                        </div>
                    </div>

                    <div className='Button-login '>
                        <button className='btn-sign_in'>Đăng ký</button>
                        <div className='Or'>
                            <div className='line'></div>
                            <p>Hoặc</p>
                            <div className='line'></div>
                        </div>
                    </div>

                    <div className='three-btn'>
                        <button className="btn-google btns">
                            <img src='/images/btn-google.png' alt='' />
                        </button>
                        <button className="btn-apple btns">
                            <img src='/images/btn-apple.png' alt='' />
                        </button>
                        <button className="btn-facebook btns">
                            <img src='/images/btn-fb.png' alt='' />
                        </button>
                    </div>
                    <p className='not-account '>
                        Bằng việc đăng ký, bạn đã đồng ý về
                        <a href='#' className='register privacy'>
                            Điều khoản dịch vụ và Chính sách bảo mật
                        </a>
                    </p>

                    <p className='not-account'>Bạn đã có tài khoản ? <a href='#' className='register'>Đăng nhập</a></p>
                </form>
            </div>
        </div>
    )
}

export default Register