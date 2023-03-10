interface FormInputs {
  phone: string;
  name: string;
  message: string;
}

interface FeedbackFromProps {
  handleClose: () => void;
  handleSendRequest: (json: string) => void;
}

interface IFormTextField {
  fieldName: 'name' | 'phone' | 'message';
  placeholder: string;
}

export type { FeedbackFromProps, FormInputs, IFormTextField };
