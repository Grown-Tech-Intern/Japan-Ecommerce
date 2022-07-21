import React from 'react'
import '././style.scss'

function Finish() {
  return (
    <div className='Container-finish'>
      <div className='finish'>
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

          <div className='successful_register'>
              <div className='successful'>
                  <p className='notification'>Đăng ký thành công !</p>
                  <div className='check'>
                      <p className='no-3'></p>
                  </div>
                  <p className='complete_account'>Bạn đã tạo thành công tài khoản.</p>
                  <p className='five_seconds'>Bạn sẽ được chuyển hướng đến trang chủ trong <span>5 giây</span></p>
                  <button className='btn-return'>Quay lại trang chủ</button>
              </div>
          </div>

      </div>
    </div>
  )
}

export default Finish