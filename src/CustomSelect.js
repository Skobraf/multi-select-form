import { FieldProps } from "formik";
import React, { useCallback } from "react";
import Select from "react-select";

export const CustomSelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false
}) => {
  const onChange = useCallback((option) => {
    form.setFieldValue(
      field.name,
      isMulti
        ? (option ).map((item) => item.value)
        : (option ).value
    );
  });

  const getValue = useCallback( () => {
    if (options) {
      return isMulti
        ? options.filter(option => field.value.indexOf(option.value) >= 0)
        : options.find(option => option.value === field.value);
    } else {
      return isMulti ? [] : '';
    }
  })

  return (
    <Select
      className={className}
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
    />
  );
};

export default CustomSelect;
