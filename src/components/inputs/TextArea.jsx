import { Field, useFormikContext } from "formik";
import React from "react";

const TextArea = ({
  label,
  name,
  value,
  placeholder,
  type,
  disabled,
}) => {
  const { errors, touched, handleBlur, handleChange } = useFormikContext();
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="flex flex-col w-full mt-2 px-2">
      <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
        <Field
          as="textarea"
          id={name}
          name={name}
          disabled={disabled}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          value={value[name]}
          type={type}
          autoComplete="off"
          className="bg-gray-50 text-justify border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white h-24"
        />
      </label>
      {errors[name] && touched[name] ? (
        <span className="text-red text-sm m-0 px-2">{errors[name]}</span>
      ) : null}
    </div>
  );
};

export default TextArea;