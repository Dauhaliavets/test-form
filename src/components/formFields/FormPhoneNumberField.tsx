import React from 'react';
import { useFormContext } from 'react-hook-form';
import InputMask from 'react-input-mask';

import { formValidationRules } from '../../constants/formValidationRules';
import { FormInputs, IFormTextField } from '../../types/feedbackForm.types';

export const FormPhoneNumberField: React.FC<IFormTextField> = ({
  fieldName,
  placeholder,
}) => {
  const {
    register,
    formState: { errors, dirtyFields },
  } = useFormContext<FormInputs>();

  return (
    <div className="form__field">
      <label htmlFor={fieldName} className="field-label">
        Phone
      </label>
      <InputMask
        id={fieldName}
        className="field-input"
        type="text"
        mask="+7(999)999-99-99"
        placeholder={placeholder}
        maskChar=""
        {...register(fieldName, formValidationRules[fieldName])}
      />
      {errors[fieldName] ? (
        <span className="field-error">{errors[fieldName]?.message}</span>
      ) : (
        dirtyFields[fieldName] && (
          <span className="field-success">Phone is filled correctly</span>
        )
      )}
    </div>
  );
};
