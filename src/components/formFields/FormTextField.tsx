import React from 'react';
import { useFormContext } from 'react-hook-form';

import { formValidationRules } from '../../constants/formValidationRules';
import { FormInputs, IFormTextField } from '../../types/feedbackForm.types';

export const FormTextField: React.FC<IFormTextField> = ({ fieldName, placeholder }) => {
  const {
    register,
    formState: { errors, dirtyFields },
  } = useFormContext<FormInputs>();

  return (
    <div className="form__field">
      <label htmlFor="name" className="field-label">
        {placeholder}
      </label>
      <input
        id={fieldName}
        className="field-input"
        type="text"
        placeholder={placeholder}
        {...register(fieldName, formValidationRules[fieldName])}
      />
      {errors[fieldName] ? (
        <span className="field-error">{errors[fieldName]?.message}</span>
      ) : (
        dirtyFields[fieldName] && (
          <span className="field-success">{placeholder} is filled correctly</span>
        )
      )}
    </div>
  );
};
