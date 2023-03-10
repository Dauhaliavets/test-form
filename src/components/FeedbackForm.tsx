import './FeedbackForm.css';

import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { FeedbackFromProps, FormInputs } from '../types/feedbackForm.types';
import { transformPhone } from '../utils/transformPhone';
import { FormPhoneNumberField } from './formFields/FormPhoneNumberField';
import { FormTextField } from './formFields/FormTextField';

export const FeedbackForm: React.FC<FeedbackFromProps> = ({
  handleClose,
  handleSendRequest,
}) => {
  const methods = useForm<FormInputs>({
    defaultValues: {
      phone: '',
      name: '',
      message: '',
    },
    mode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { isValid, isSubmitted },
  } = methods;

  const onSubmit: SubmitHandler<FormInputs> = (fields) => {
    if (isValid) {
      const transformedPhone = transformPhone(fields.phone);
      const json = JSON.stringify({ ...fields, phone: transformedPhone });
      handleSendRequest(json);
    }
  };

  return (
    <div className="modal">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="form__header">
            <h3 className="form__header header-title">Feedback Form</h3>
            <button className="form__button button-close" onClick={handleClose}></button>
          </div>
          <FormPhoneNumberField fieldName={'phone'} placeholder={'+7(XXX)XXX-XX-XX'} />
          <FormTextField fieldName={'name'} placeholder={'Name'} />
          <FormTextField fieldName={'message'} placeholder={'Message'} />
          <button
            type="submit"
            className="form__button button-submit"
            disabled={!isValid}
          >
            Submit
          </button>
          {isSubmitted && <span className="field-success">Submit Successful</span>}
        </form>
      </FormProvider>
    </div>
  );
};
