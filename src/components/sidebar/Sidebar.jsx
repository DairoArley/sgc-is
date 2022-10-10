import React from 'react'
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import BarChartIcon from '@mui/icons-material/BarChart';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

import {
    NavLink
  } from "react-router-dom";
//import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> Gestionar</h3>
                    <ul className="sidebarList">
                        <NavLink to={'/'}>
                        <li className="sidebarListItem" active>
                            <HomeIcon className='sidebarIcon' />Inicio
                        </li>
                        </NavLink>

                        <NavLink to={'/mallaCurricular'}>
                        <li className="sidebarListItem">
                            <TimelineIcon className='sidebarIcon' />Curriculum
                        </li>
                        </NavLink>

                        <NavLink to={'/person'}>
                        <li className="sidebarListItem">
                            <BarChartIcon className='sidebarIcon' />Personas
                        </li>
                        </NavLink>
                        
                        <li className="sidebarListItem" >
                            <DynamicFeedIcon className='sidebarIcon' />Personas 
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
