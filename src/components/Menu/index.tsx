import { MenuTopic } from '../MenuTopic'
import * as S from './styles'
import Hamburguer from '../../assets/hamburguer.svg'
import { menuData } from './menuData'

const deving = ['Sobre nós', 'Serviços', 'Solicite seu orçamento']
const consultoria = [
  'Entregamos soluções',
  'Como funciona',
  'Agende uma visita'
]
const metodo = ['Clareza na execução', 'Em 4 passos', 'Melhoria Constante']

export function Menu(): JSX.Element {
  return (
    <S.Container>
      <S.Menu>
        <S.BtnMenu type="button">
          <Hamburguer />
        </S.BtnMenu>
        <S.Content>
          <S.ContainerLogo>
            <img src="/logoBlack.png" alt="Deving" />
          </S.ContainerLogo>

          {menuData.map(d => (
            <MenuTopic key={d.id} title={d.title} topics={d.list} />
          ))}

          <S.Contacts>
            <h1>Atendimento</h1>
            <p>+55 (11) 90000-0000</p>
            <p>contato@deving.app.br</p>

            <h2>Acompanhe nas redes</h2>
            <S.SocialMedia>
              <S.SocialCircle></S.SocialCircle>
              <S.SocialCircle></S.SocialCircle>
              <S.SocialCircle></S.SocialCircle>
              <S.SocialCircle></S.SocialCircle>
            </S.SocialMedia>
          </S.Contacts>
        </S.Content>
      </S.Menu>
    </S.Container>
  )
}
