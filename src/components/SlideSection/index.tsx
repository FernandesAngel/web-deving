import { Button } from '../Button'
import { Title } from '../Title'
import { WrapperCenter } from '../WrapperCenter'
import * as S from './styles'

export function SlideSection(): JSX.Element {
  return (
    <S.Container>
      <WrapperCenter>
        <S.Content>
          <S.InfoContainer>
            <Title>
              <h3>
                Aprimoramento
                <br /> Constante
              </h3>
            </Title>
            <p>
              Aprimoramento constante: este é o nosso lema profissional.
              Buscamos evoluir nossa tecnologia e atendimento para garantir o
              alto padrão de qualidade aliado ao comprometimento da empresa com
              nossos clientes.
            </p>
            <S.ButtonContainer>
              <Button title="Desejo solicitar um orçamento agora" />
            </S.ButtonContainer>
          </S.InfoContainer>
          <S.ImageContainer>
            <img src="/draw.png" alt="" />
          </S.ImageContainer>
        </S.Content>
      </WrapperCenter>
    </S.Container>
  )
}
