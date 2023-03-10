interface FromInputs {
  phone: string;
  name: string;
  message: string;
}

interface FeedbackFromProps {
  handleClose: () => void;
}

export type { FeedbackFromProps, FromInputs };
