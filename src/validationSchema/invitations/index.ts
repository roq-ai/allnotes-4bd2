import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  invited_email: yup.string().required(),
  status: yup.string().required(),
  role: yup.string().nullable(),
  invitation_code: yup.string().nullable(),
  business_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
