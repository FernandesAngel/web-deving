import * as yup from 'yup'

export const budgetSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  phone: yup.string().required('Telefone obrigatório'),
  email: yup
    .string()
    .required('Email obrigatório')
    .email('Digite um e-mail válido'),
  budget: yup.string().required('Valor obrigatório'),
  deadline: yup.string().required('Valor obrigatório'),
  observation: yup.string(),
  tech: yup
    .array()
    .min(1, 'Selecione ao menos uma tecnologia')
    .required('Selecione pelo menos uma tecnologia')
})
export const messageSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  phone: yup.string().required('Telefone obrigatório'),
  email: yup
    .string()
    .required('Email obrigatório')
    .email('Digite um e-mail válido'),
  message: yup.string().required('Mensagem obrigatória')
})
