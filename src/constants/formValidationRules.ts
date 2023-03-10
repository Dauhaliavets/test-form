export const formValidationRules = {
  phone: {
    required: { value: true, message: 'Phone is required' },
    pattern: {
      value: /\+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}/i,
      message: 'You should enter phone number as on template',
    },
  },
  name: {
    required: { value: true, message: 'Name is required' },
    pattern: {
      value: /^[a-zA-Z0-9\s]+$/i,
      message: "Invalid name. Don't use special symbols",
    },
  },
  message: {
    required: { value: true, message: 'Message is required' },
    pattern: {
      value: /^[a-zA-Z0-9\s]+$/i,
      message: "Invalid message. Don't use special symbols",
    },
  },
};
