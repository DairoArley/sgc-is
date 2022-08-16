import SubjectInformation from './SubjectInformation'

const Curriculum = ({role}) => {
    

    return (
    <div className='mx-auto sm:w-2/4  md:w-full border-r-amber-200 border-2 font-sans'>
        <br />
        {role==='Admin' && <SubjectInformation/>}
        {role==='student' && <SubjectInformation readOnly='true'/>}
    </div>
  )
}

export default Curriculum