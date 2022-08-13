import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import './personaList.css';

const columns = [
    { field: 'id', headerName: 'numeroID', width: 80 },
    { field: 'firstName', headerName: 'Primer nombre', width: 130 },
    { field: 'lastName', headerName: 'Último nombre', width: 130 },
    {
        field: 'fullName',
        headerName: 'Nombre completo',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
];

export default function PersonaList() {
    const url = 'http://localhost:3306/persona/getAll'

    const [personas, setPersonas] = useState()
    const fetchApi = async () => {
        const response = await fetch(url);
        console.log(response.json);
        const responseJSON = await response.json();
        setPersonas(responseJSON)
    }
    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <div>
           
        </div>
    );
}
