import './FeedbackForm.css';

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

import { formValidationRules } from '../constants/formValidationRules';
import { FeedbackFromProps, FromInputs } from './feedbackForm.types';

export const FeedbackForm: React.FC<FeedbackFromProps> = ({ handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      phone: '',
      name: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FromInputs> = (fields) => {
    if (isValid) {
      const updatedPhone = fields.phone.replaceAll(/[()-]/g, '');
      console.log('fields: ', { ...fields, phone: updatedPhone });
    }
  };
  console.log('errors: ', errors);

  return (
    <div className="modal">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <button className="form__button button-close" onClick={handleClose}>
          Close
        </button>

        <InputMask
          type="text"
          mask="+7(999)999-99-99"
          maskPlaceholder="+7(XXX)XXX-XX-XX"
          maskChar=""
          {...register('phone', formValidationRules.phone)}
        />
        <span>{errors.phone && errors.phone.message}</span>

        <input
          type="text"
          placeholder="Name"
          {...register('name', formValidationRules.name)}
        />
        <span>{errors.name && errors.name.message}</span>

        <input
          type="text"
          placeholder="Message"
          {...register('message', formValidationRules.message)}
        />
        <span>{errors.message && errors.message.message}</span>

        <button type="submit" className="form__button button-submit">
          Submit
        </button>
      </form>
    </div>
  );
};
