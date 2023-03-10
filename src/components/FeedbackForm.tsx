import './FeedbackForm.css';

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

import { formValidationRules } from '../constants/formValidationRules';
import { FeedbackFromProps, FormInputs } from '../types/feedbackForm.types';
import { transformPhone } from '../utils/transformPhone';

export const FeedbackForm: React.FC<FeedbackFromProps> = ({
  handleClose,
  handleSendRequest,
}) => {
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

  const onSubmit: SubmitHandler<FormInputs> = (fields) => {
    if (isValid) {
      const transformedPhone = transformPhone(fields.phone);
      const json = JSON.stringify({ ...fields, phone: transformedPhone });
      handleSendRequest(json);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form__header">
          <h3 className="form__header header-title">Feedback Form</h3>
          <button className="form__button button-close" onClick={handleClose}></button>
        </div>

        <div className="form__field">
          <label htmlFor="phone" className="field-label">
            Phone
          </label>
          <InputMask
            id="phone"
            className="field-input"
            type="text"
            mask="+7(999)999-99-99"
            placeholder="+7(XXX)XXX-XX-XX"
            maskChar=""
            {...register('phone', formValidationRules.phone)}
          />
          <span className="field-error">{errors.phone && errors.phone.message}</span>
        </div>

        <div className="form__field">
          <label htmlFor="name" className="field-label">
            Name
          </label>
          <input
            id="name"
            className="field-input"
            type="text"
            placeholder="Name"
            {...register('name', formValidationRules.name)}
          />
          <span className="field-error">{errors.name && errors.name.message}</span>
        </div>

        <div className="form__field">
          <label htmlFor="message" className="field-label">
            Message
          </label>
          <input
            id="message"
            className="field-input"
            type="text"
            placeholder="Message"
            {...register('message', formValidationRules.message)}
          />
          <span className="field-error">{errors.message && errors.message.message}</span>
        </div>

        <button type="submit" className="form__button button-submit">
          Submit
        </button>
      </form>
    </div>
  );
};
