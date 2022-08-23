import React from 'react'

const InputFormat = ({titleInput, nameInput, valueInput, placeholderMessage, readOnly, method, dataForm}) => {
 
    const styleInputs = "w-1/2 md:w-3/5 border-0 rounded-lg hover:border-2 hover:font-thin mx-auto ml-2 items-center text-black";
    const styleText = "flex text-sm md:text-lg mt-2";
 
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