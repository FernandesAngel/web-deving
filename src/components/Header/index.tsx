import { WrapperCenter } from '../WrapperCenter'
import LogoDeving from '../../assets/logoDeving.svg'
import * as S from './styles'
import Link from 'next/link'
import { Button } from '../Button'

export function Header(): JSX.Element {
  return (
    <S.ContainerHeader>
      <WrapperCenter>
        <S.Content>
          <p>
            Desenvolvimento de <br /> Apps especializados em saúde
          </p>
          <h1>
            <span>Somos a</span> Deving
          </h1>
          <p className="subtitleText">
            Como desenvolvedora o trabalho da Deving é entregar ferramentas
            digitais. Seja ela um site, <br /> um app ou um sistema integrado a
            sua operação presencial.
          </p>

          <S.ContainerButton>
            <Button bg="secondary" title="Saiba Mais" />
          </S.ContainerButton>

          <p className="quoteText">
            Ou <br /> solicite seu
            <Link href="/">
              <a>orçamento</a>
            </Link>
          </p>
        </S.Content>
      </WrapperCenter>
      <S.ContainerLogo>
        <img src="/logo.png" alt="Deving" />
      </S.ContainerLogo>
    </S.ContainerHeader>
  )
}
