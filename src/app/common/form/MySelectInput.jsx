import React from 'react';
import { FormField, Label, Select } from 'semantic-ui-react';
import { useField } from 'formik';

const MySelectInput = ({ label, ...props }) => {
  const [field, meta, helpres] = useField(props);

  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <Select
        clearable
        value={field.value || null}
        onChange={(e, d) => helpres.setValue(d.value)}
        onBlur={() => helpres.setTouched(true)}
        {...props}
      />
      {meta.touched && meta.error ? (
        <Label basic color='red'>
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
};

export default MySelectInput;
