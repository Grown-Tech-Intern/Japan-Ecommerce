import React from 'react'
import { MenuItems } from './Menuitems'
import '././style.scss'

function Nav() {
    return (
        <div className='container_nav' >
            <div className="nav">
                <div className="nav_items">
                    <ul className='main-menu'>
                    {/* <i class="fa-solid fa-bars"></i> */}
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} >
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>

                </div>
            </div>

           
        </div>
    )
}

export default Nav