import React from 'react'
import '././style.scss'

function Slider() {
  return (
    <div className='container_slider'>
        <div className='slider'>
            <div className='img-slider'>
                <img src='/images/bnrr-01.svg' alt='' />
            </div>

            <div className='circle'>
                <img src='/images/circle.svg' alt='' />
                <img src='/images/circle.svg' alt='' />
                <img src='/images/circle.svg' alt='' />
                <img src='/images/circle.svg' alt='' />
            </div>
        </div>
    </div>
  )
}

export default Slider