/* eslint-disable react/require-default-props */
import { Switch } from '@mui/material';
import { FormikErrors, FormikTouched, useFormikContext } from 'formik';
import React from 'react';

interface IInputProps {
  name: string;
  label: string;
  value: any;
  disabled?: boolean;
}

const SwitchInput = ({
  label,
  name,
  value,
  disabled = false,
}: IInputProps) => {
  const { errors, touched, setFieldValue } = useFormikContext();
  return(
  <div className='flex flex-col w-full'>
    <label htmlFor={name} className="flex flex-col w-full mt-2 px-2">
      <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
      <Switch
              name={name}
              disabled={disabled}
              value={value[name] || false}
              checked={value[name]}
              onChange={(event, checked) => {
                setFieldValue(name, checked);
              }}
            />
      
    </label>
    {errors[name as keyof FormikErrors<unknown>] && touched[name as keyof FormikTouched<unknown>] ? (
      <span className="text-red-500 text-sm m-0 px-2">{errors[name as keyof FormikErrors<unknown>]}</span>
    ) : null}
  </div>
)};

export default SwitchInput;
