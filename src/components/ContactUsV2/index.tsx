import { Input } from '../Input'
import { WrapperCenter } from '../WrapperCenter'
import * as S from './styles'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'
import { TextArea } from '../TextArea'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { messageSchema } from '../../utils/yup'
import { useCallback, useEffect, useState } from 'react'
import { phoneMask } from '../../utils/mask'
import { ContactUsV2Props } from './interfaces'
export function ContactUsV2({ onShow, show }: ContactUsV2Props): JSX.Element {
  const [messageBudget, setMessageBudget] = useState({
    introduction: 'Boa tarde equipe Deving',
    message:
      'Tenho interesse em saber mais sobre o processo de consultoria. Meu consultório tem excelentes profissionais porém temos tido dificuldades com a organização e administração do negócio. Como sua consultoria pode nos ajudar?',
    end: 'Atenciosamente',
    name: 'Fulaninho',
    phone: '(00) 00000-0000',
    email: 'teste@email.com'
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(messageSchema)
  })

  const { name, phone, email, message } = watch()

  useEffect(() => {
    const newName = name || 'Seu nome'
    const newPhone = phone || '(00) 00000-0000'
    const newEmail = email || 'seuemail@email.com'
    const newMessage = message

    setMessageBudget(prevState => {
      return {
        ...prevState,
        name: newName,
        phone: newPhone,
        email: newEmail,
        message: newMessage
      }
    })
  }, [name, phone, email, message])

  const handleSubmitForm = useCallback(async data => {
    // console.log('data', data)
  }, [])

  return (
    <S.Container id="contactusv2">
      <WrapperCenter>
        <S.Form onSubmit={handleSubmit(handleSubmitForm)}>
          <S.ContentForm>
            <S.BoxTitleButton>
              <h2>Fale Conosco</h2>
              <S.BoxButton>
                <S.Button
                  isMargin={false}
                  active={show === 'contactus'}
                  onClick={() => onShow('contactus')}>
                  <HiOutlineClipboardList size={20} />
                </S.Button>
                <S.Button
                  isMargin
                  active={show === 'contactusv2'}
                  onClick={() => onShow('contactusv2')}>
                  <AiOutlineMail size={19} />
                </S.Button>
              </S.BoxButton>
            </S.BoxTitleButton>
            <Input
              label="Nome"
              error={errors.name?.message}
              {...register('name')}
            />
            <S.Line>
              <S.ContainerInput>
                <Input
                  label="Telefone"
                  error={errors.phone?.message}
                  {...register('phone')}
                  value={phoneMask(phone)}
                  maxLength={15}
                />
              </S.ContainerInput>
              <S.ContainerInput>
                <Input
                  label="E-mail"
                  error={errors.email?.message}
                  {...register('email')}
                />
              </S.ContainerInput>
            </S.Line>
            <TextArea
              label="Mensagem"
              error={errors.message?.message}
              {...register('message')}
            />
          </S.ContentForm>
          <S.Info>
            <S.InfoHeader>
              <S.Mark className="danger" />
              <S.Mark className="warning" />
              <S.Mark className="success" />
            </S.InfoHeader>
            <S.InfoContainer>
              <S.InfoContent>
                <p>{messageBudget.introduction}</p>
                <p>{`${messageBudget.message}`}</p>

                <p>{messageBudget.end}</p>
              </S.InfoContent>
              <S.InfoContentButton>
                <S.Contact>
                  <p>{messageBudget.name}</p>
                  <p>{messageBudget.phone}</p>
                  <p>{messageBudget.email}</p>
                </S.Contact>
                <button type="submit">Enviar</button>
              </S.InfoContentButton>
            </S.InfoContainer>
          </S.Info>
        </S.Form>
      </WrapperCenter>
    </S.Container>
  )
}
