import { string } from 'yup';

const nameSchema = string().required();
const passwordSchema = string().required().min(6);

export { nameSchema, passwordSchema };
