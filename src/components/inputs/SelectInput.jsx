/* eslint-disable react/require-default-props */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
import { Field, FormikErrors, FormikTouched, useFormikContext } from 'formik';
import React from 'react';
import Select from "react-select";

const SelectInput = ({
  label,
  name,
  value,
  opciones,
  disabled,
  multiple = false,
}) => {
  const { errors, touched, handleBlur, handleChange, setFieldValue } = useFormikContext();

  const onChange = (option) => {
    setFieldValue(
      name,
      multiple
        ? (option).map((item) => item.value)
        : (option).value
    );
  };

  const getValue = () => {
    if (opciones) {
      return multiple
        ? opciones.filter(option => value[name].indexOf(option.value) >= 0)
        : opciones.find(option => option.value === value[name]);
    } else {
      return isMulti ? [] : ("");
    }
  };
  return (
  <div className='flex flex-col w-full'>
    <label htmlFor={name} className="flex flex-col w-full mt-2 px-2">
      <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </span>
      <Select
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      name={name}
      value={getValue()}
      onChange={onChange}
      options={opciones}
      isMulti={multiple}
      isDisabled={disabled}
    />
      {/* <Field
        as="select"
        name={name}
        disabled={disabled}
        onChange={handleChange}
        onBlur={handleBlur}
        isMulti={multiple}
        value={value[name]}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      >
        {opciones.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </Field> */}
    </label>
    {errors[name] && touched[name] ? (
      <span className="text-red text-sm m-0 px-2">{errors[name]}</span>
    ) : null}
  </div>
)};

export default SelectInput;
