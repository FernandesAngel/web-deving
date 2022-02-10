import { MenuTopic } from '../MenuTopic'
import * as S from './styles'
import Hamburguer from '../../assets/hamburguer.svg'
import { menuData } from './menuData'
import Link from 'next/link'
import { useState } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin
} from 'react-icons/ai'
export function Menu(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container isOpen={isOpen}>
      <S.Menu>
        <S.BtnMenu type="button" onClick={() => setIsOpen(!isOpen)}>
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
              <Link href="/">
                <a>
                  <S.SocialCircle>
                    <AiFillLinkedin size={19} />
                  </S.SocialCircle>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <S.SocialCircle>
                    <FaFacebookF size={14} />
                  </S.SocialCircle>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <S.SocialCircle>
                    <AiOutlineInstagram size={18} />
                  </S.SocialCircle>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <S.SocialCircle>
                    <AiOutlineTwitter size={18} />
                  </S.SocialCircle>
                </a>
              </Link>
            </S.SocialMedia>
          </S.Contacts>
        </S.Content>
      </S.Menu>
    </S.Container>
  )
}
