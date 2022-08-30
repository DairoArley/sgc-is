import React from 'react'

const InputFormat = ({titleInput, nameInput, valueInput, placeholderMessage, readOnly, method, dataForm, wi}) => {
 
    const styleInputs =`w-1/2 md:w-${wi} border-0 rounded-lg mx-auto ml-2 text-sm items-center text-black`;
    const styleText = "flex text-sm md:text-lg mt-8";
 
    return (
    <span className={styleText}>
        {titleInput}
    <input
      name={nameInput}
      className={styleInputs}
      value={valueInput}
      placeholder={valueInput === undefined ? placeholderMessage : ""}
      readOnly={readOnly}
      onChange={(e) => method({ ...dataForm, nameInput: e.target.valueInput })}
    />
  </span>
  )
}

export default InputFormat