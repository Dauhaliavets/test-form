interface FormInputs {
  phone: string;
  name: string;
  message: string;
}

interface FeedbackFromProps {
  handleClose: () => void;
  handleSendRequest: (json: string) => void;
}

export type { FeedbackFromProps, FormInputs };
