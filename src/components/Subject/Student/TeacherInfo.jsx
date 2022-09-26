import React from 'react'

export const TeacherInfo = () => {

    const teachers = [
        {
          fullName: "Hernando Silva",
          dependency: "Ingenieria de Sistemas",
          studyLevel: "Maestria",
          modality: "Presencial",
          unit: "2",
          hours: "4",
          dates: "10/12/2021",
        },
        {
            fullName: "Carlos Mario Sierra Duque",
            dependency: "Ingenieria de Sistemas",
            studyLevel: "Maestria",
            modality: "Presencial",
            unit: "4",
            hours: "4",
            dates: "10/12/2022",
          },
      ];

  return (
    <div>
        <table className='table-auto border-collapse w-full text-center'>
            <thead>
                <tr className='border-2 text-textColor '>
                    <th>Nombre completo</th>
                    <th>Dependencia</th>
                    <th>Nivel de estudio</th>
                    <th>Modalidad</th>
                    <th>Unidad</th>
                    <th>Horas</th>
                    <th>Fechas</th>
                </tr>
            </thead>
            <tbody className='border-2 rounded-lg'>
                {teachers.map((teacher) => (
                    <tr>
                        <td>{teacher.fullName}</td>
                        <td>{teacher.dependency}</td>
                        <td>{teacher.studyLevel}</td>
                        <td>{teacher.modality}</td>
                        <td>{teacher.unit}</td>
                        <td>{teacher.hours}</td>
                        <td>{teacher.dates}</td>
                    </tr>
                ))}
              </tbody>
        </table>
    </div>
  )
}
