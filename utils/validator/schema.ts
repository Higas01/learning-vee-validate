import { string, object } from 'yup';

const schema = object({
  name: string().required('Campo nome precisa ser preenchido'),
  password: string()
    .required('Campo senha precisa ser preenchido')
    .min(6, 'Campo senha precisa ter no mínimo 6 caracteres'),
});

export default schema;
