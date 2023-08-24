import * as yup from 'yup';

export const transactionValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  transaction_type: yup.string().nullable(),
  transaction_status: yup.string().nullable(),
  transaction_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  business_id: yup.string().nullable().required(),
});
