import { WrapperCenter } from '../WrapperCenter'
import * as S from './styles'
import { Button } from '../Button'
import { Menu } from '../Menu'
import Link from 'next/link'
import { scrollTo } from '../../utils/scroll'
import { useCallback } from 'react'
import { useRouter } from 'next/router'
export function Header(): JSX.Element {
  const route = useRouter()

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
            digitais. <br /> Seja ela um site, um app ou um sistema integrado a
            sua operação presencial.
          </p>

          <S.ContainerButton>
            <Button
              bg="secondary"
              title="Saiba Mais"
              onClick={() => route.push('#services')}
            />
          </S.ContainerButton>

          <p className="quoteText">
            Ou <br /> solicite seu
            <Link href="#contactus" passHref>
              <a> orçamento</a>
            </Link>
          </p>
        </S.Content>
      </WrapperCenter>
      <S.ContainerLogo>
        <img src="/logo.png" alt="Deving" />
      </S.ContainerLogo>
      <Menu />
    </S.ContainerHeader>
  )
}
