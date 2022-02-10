import { Input } from '../Input'
import { WrapperCenter } from '../WrapperCenter'
import * as S from './styles'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'
import { GroupCheckbox } from '../GroupCheckbox'
import { contactUsData } from './contactUsData'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { budgetSchema } from '../../utils/yup'
import { useCallback, useEffect, useState } from 'react'
import { currencyMask, phoneMask, formatNumber } from '../../utils/mask'
import { distanceDate, minDateInput, MONTHS } from '../../utils/constants'
import { ContactUsProps } from './interfaces'
export function ContactUs({ onShow, show }: ContactUsProps): JSX.Element {
  const [messageBudget, setMessageBudget] = useState({
    introduction: 'Boa tarde equipe Deving',
    textApp:
      'Venho por meio desta solicitar um orçamento para o desenvolvimento de um aplicativo funcional em ',
    app: 'Desktop, Android e IOS.',
    textBudgetOne: 'O orçamento designado para esse projeto no momento é de ',
    budget: 'R$70.000',
    textBudgetTwo: ' com o prazo dentro dos próximos ',
    deadlineMonth: 'X meses, ',
    deadlineDate: 'por volta de 13 de Abril.',

    noMore: 'Sem mais,',
    end: 'Atenciosamente',
    name: 'Fulaninho',
    phone: '(00) 00000-0000',
    email: 'teste@email.com'
  })

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(budgetSchema)
  })

  const { name, phone, email, tech, budget, deadline } = watch()

  useEffect(() => {
    const newName = name || 'Seu nome'
    const newPhone = phone || '(00) 00000-0000'
    const newEmail = email || 'seuemail@email.com'
    const newTech =
      tech !== undefined && tech.length > 0 ? tech.join(', ') : '..'
    const newBudget = formatNumber(budget) || 'R$0,00 '

    let newDeadline = 'por volta de ...'
    let newDeadlineMonth = 'X meses, '
    if (deadline !== undefined) {
      const [year, month, day] = deadline.split('-')
      const distance = distanceDate(deadline)
      newDeadlineMonth = distance ? `${distance}, ` : 'X meses, '
      newDeadline =
        month !== undefined && day !== undefined
          ? `por volta de ${day} de ${MONTHS[month]} de ${year}.`
          : 'por volta de ...'
    }
    setMessageBudget(prevState => {
      return {
        ...prevState,
        name: newName,
        phone: newPhone,
        email: newEmail,
        app: `${newTech}.`,
        budget: newBudget,
        deadlineDate: newDeadline,
        deadlineMonth: newDeadlineMonth
      }
    })
  }, [name, phone, email, tech, budget, deadline])

  const handleSubmitForm = useCallback(async data => {
    // console.log('data', data)
  }, [])

  return (
    <S.Container id="contactus">
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
            <S.Line>
              <S.ContainerInput>
                <Input
                  label="Budget"
                  error={errors.budget?.message}
                  {...register('budget')}
                  value={currencyMask(budget)}
                />
              </S.ContainerInput>
              <S.ContainerInput>
                <Input
                  label="Prazo Desejado"
                  error={errors.deadline?.message}
                  {...register('deadline')}
                  type="date"
                  min={minDateInput()}
                />
              </S.ContainerInput>
            </S.Line>
            <GroupCheckbox
              items={contactUsData}
              control={control}
              name="tech"
              error={errors.tech?.message}
            />
            <Input
              label="Outras Observações"
              error={errors.observation?.message}
              {...register('observation')}
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
                <p>{`${messageBudget.textApp} ${messageBudget.app}`}</p>
                <p>
                  {`${messageBudget.textBudgetOne} ${messageBudget.budget} ${messageBudget.textBudgetTwo} ${messageBudget.deadlineMonth} ${messageBudget.deadlineDate}`}
                </p>
                <p>{messageBudget.noMore}</p>
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
