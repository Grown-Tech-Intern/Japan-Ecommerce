import React from 'react'
import '././style.scss'

const Login = () => {
  return (
    <div className='Container-Login'>
        <div className='Login'>
           <form className='Form-login'>
              <p className='title'>Đăng nhập</p>
              <div className='Input-email'>
                  <input placeholder='Email/ Tên đăng nhập'  />
                  <div className="error">
                      Vui lòng điền vào ô này
                  </div>
              </div>

              <div className='Input-pass'>
                  <input placeholder='Mật khẩu' /> 
                  <button>
                    <img  src='/images/unmask.png' alt='' />                   
                  </button>
                  <div className="error">
                      Vui lòng điền vào ô này
                  </div>
              </div>

              <div className='Button-login '>
                  <button className='btn-sign_in'>Đăng nhập</button>
                  <a href='#'>Quên mật khẩu</a>                 
                  <div className='Or'>
                      <div className='line'></div>
                         <p>Hoặc</p>
                      <div className='line'></div>
                  </div>               
              </div>

              <div className='three-btn'>
                  <button className="btn-google btns">
                      <img  src='/images/btn-google.png' alt='' /> 
                  </button>
                  <button className="btn-apple btns">
                      <img  src='/images/btn-apple.png' alt='' />
                  </button>
                  <button className="btn-facebook btns">
                      <img  src='/images/btn-fb.png' alt='' />
                  </button>
              </div>
              <p className='not-account'>Bạn chưa có tài khoản ? <a href='/' className='register'>Đăng ký</a></p>
           </form>
        </div>
      
    </div>
  )
}

export default Login