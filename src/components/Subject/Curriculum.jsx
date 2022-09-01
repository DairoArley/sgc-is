import SubjectInformation from './SubjectInformation'
import { useParams } from 'react-router-dom';

const Curriculum = ({role}) => {
    
  const { id } = useParams();


    return (
    <div className='mx-auto sm:w-2/4  md:w-full border-r-amber-200 border-2 font-sans'>
        <br />
        {role==='Admin' && <SubjectInformation idSubjectSelected = {id} readOnly= 'false'/>}
        {role==='student' && <SubjectInformation idSubjectSelected = {id} readOnly='true'/>}
    </div>
  )
}

export default Curriculum