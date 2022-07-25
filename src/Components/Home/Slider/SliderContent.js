import React from 'react'

function SliderContent({ activeIndex, imageSlider }) {
    return (
        <section>
            {imageSlider.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? "slides active" : "inactive" }
                >
                    <img  className='slide-image' src={slide.urls} alt="" />
                </div>

            ))}
        </section>
    )
}

export default SliderContent