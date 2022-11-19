import React from 'react'
import './topbar.css'
import logo from '../../images/logo-litle.png'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <img className='logoudea' src={logo} alt='logo' />
                </div>
                <div className='topRight'>
                    <div className='topbarIconsContainer'>
                        <NotificationsNoneIcon />
                        <span className='topIconBagde'>2</span>
                    </div>
                    <div className='topbarIconsContainer'>
                        <LanguageIcon />
                        <span className='topIconBagde'>2</span>
                    </div>
                    <div className='topbarIconsContainer'>
                        <SettingsIcon />
                    </div>
                    <img src="https://www.compufacilito.com/img/avatar.png" alt="avatar" className="topAvatar" />
                </div>

            </div>
        </div>
    )
}
