export const formValidationRules = {
  phone: {
    required: 'Phone is required',
    pattern: {
      value: /\+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}/i,
      message: 'You should enter phone number as on template',
    },
  },
  name: {
    required: 'Name is required',
    pattern: {
      value: /^[a-zA-Zа-яА-Я0-9\s]+$/i,
      message: "Invalid name. Don't use special symbols",
    },
  },
  message: {
    required: 'Message is required',
    pattern: {
      value: /^[a-zA-Zа-яА-Я0-9\s]+$/i,
      message: "Invalid message. Don't use special symbols",
    },
  },
};
