import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import IconButton from '@mui/material/IconButton';
import {
  NavLink
} from "react-router-dom";

export function Subject({ name, cod, credits}) {

const print = () => {
    console.log(name, cod, credits);
}

    return (
      <div className='w-44 mx-auto border-2 font-sans rounded-lg text-textColor text-center m-2'>
        <div className='flex flex-row'>
            <p className='text-lg font-bold'>{name}</p> 
            <NavLink to={'/Curriculum'}>
            <IconButton aria-label="Example">
                    <FontAwesomeIcon icon={faEllipsisV} />
                </IconButton>
            </NavLink>  
        </div>
            <p className='pt-2'>{cod}</p>
            <p>{credits}</p>
      </div>
    );
  }
  