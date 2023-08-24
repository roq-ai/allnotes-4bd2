import * as yup from 'yup';

export const dataValidationSchema = yup.object().shape({
  text: yup.string().nullable(),
  number: yup.number().integer().nullable(),
  type: yup.string().nullable(),
  status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  business_id: yup.string().nullable().required(),
});
