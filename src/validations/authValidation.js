/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */


import * as yup from 'yup';

const authValidation = yup.object().shape({
  email: yup
    .string()
    .required('E-mail not empty!')
    .email('Please enter a valid E-mail'),
  username: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(25, 'Name must be less than 25 characters'),
  password: yup
    .string()
    .required('Password not empty!')
    .min(8, 'Password must be at least 8 characters')
    .max(40, 'Password must be less than 40 characters')
    .test('not-all-digits', 'Пароль не состоит из цифр', function (value) {
      return !/^\d+$/.test(value);
    }),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .min(8, 'Password must be at least 8 characters')
    .max(40, 'Password must be less than 40 characters'),
});

export default authValidation;
