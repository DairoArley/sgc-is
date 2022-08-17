import React from 'react'
import './sidebar.css'
import { Home, Timeline, TrendingUp, BarChart, DynamicFeed, Report } from "@material-ui/icons";
//import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> Gestionar</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem" active>
                            <Home className='sidebarIcon' />Inicio
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />Analitica
                        </li>
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
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Consultar Tablas</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem" active>
                            <Report className='sidebarIcon' />Materia
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />Estudiante
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' />Curriculo
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> Crear Tablas</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem" active>
                            <Report className='sidebarIcon' />Materia
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />Estudiante
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' />Curriculo
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> Modificar Tablas</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem" active>
                            <Report className='sidebarIcon' />Materia
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />Estudiante
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' />Curriculo
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> Actualizar Tablas</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem" active>
                            <BarChart className='sidebarIcon' />Materia
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />Estudiante
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' />Curriculo
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}
