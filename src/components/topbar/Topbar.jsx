import React from 'react'
import './topbar.css'
import logo from '../../images/logo-litle.png'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <img className='logoudea' src={logo} alt='logo' />
                </div>
                <div className='topRight'>
                    <div className='topbarIconsContainer'>
                        <NotificationsNone />
                        <span className='topIconBagde'>2</span>
                    </div>
                    <div className='topbarIconsContainer'>
                        <Language />
                        <span className='topIconBagde'>2</span>
                    </div>
                    <div className='topbarIconsContainer'>
                        <Settings />
                    </div>
                    <img src="https://www.compufacilito.com/img/avatar.png" alt="avatar" className="topAvatar" />
                </div>

            </div>
        </div>
    )
}
