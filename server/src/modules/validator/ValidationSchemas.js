'use strict';

const userSchema = {
  email: { type: 'email', optional: false, empty: false },
  fullname: {
    type: 'string', optional: false, empty: false, min: 3
  },
  username: {
    type: 'string', optional: false, empty: false, min: 3
  },
  phone_numbers: {
    type: 'array',
    items: {
      type: "string",
      pattern: /^[+][0-9]+$/,
    },
    optional: false,
    min: 1
  }
};

module.exports = { userSchema };