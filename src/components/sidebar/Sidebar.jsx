import React from 'react'
import './sidebar.css'
import { Home, Timeline, TrendingUp, BarChart, DynamicFeed, Report } from "@material-ui/icons";
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
                            <Home className='sidebarIcon' />Inicio
                        </li>
                        </NavLink>
                        <NavLink to={'/mallaCurricular'}>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />Curriculum
                        </li>
                        </NavLink>
                        <li className="sidebarListItem">
                            <BarChart className='sidebarIcon' />Ingresos
                        </li>
                        <li className="sidebarListItem">
                            <Report className='sidebarIcon' />Reportes
                        </li>
                        <li className="sidebarListItem" >
                            <DynamicFeed className='sidebarIcon' />Personas 
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
