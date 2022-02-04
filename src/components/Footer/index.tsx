import Link from 'next/link'
import { WrapperCenter } from '../WrapperCenter'
import * as S from './styles'

export function Footer(): JSX.Element {
  return (
    <S.Container>
      <S.ContentTop>
        <WrapperCenter>
          <S.Content>
            <S.Title>
              <h5>
                Fique por <br /> dentro!
              </h5>
              <p>
                Deving desenvolvedora de apps e ferramentas digitais faz <br />{' '}
                parte do Grupo inGlobal,{' '}
                <Link href="https://inglobal.com.br/">
                  <a target="_blank">clique aqui e saiba mais.</a>
                </Link>
              </p>
            </S.Title>
            <S.ImageContainer>
              <img src="/inglobal.png" alt="Inglobal" />
            </S.ImageContainer>
          </S.Content>
        </WrapperCenter>
      </S.ContentTop>
      <S.ContentBottom>
        <WrapperCenter>
          <S.Content>
            <p>
              Copyright | Todos direitos reservados ao Grupo inGlobal™ | 2022
            </p>
            <Link href="https://inglobal.com.br/">
              <a target="_blank">inglobal.com.br</a>
            </Link>
          </S.Content>
        </WrapperCenter>
      </S.ContentBottom>
    </S.Container>
  )
}
