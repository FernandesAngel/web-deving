import Link from 'next/link'
import { WrapperCenter } from '../WrapperCenter'
import { FaFacebookF } from 'react-icons/fa'
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin
} from 'react-icons/ai'
import * as S from './styles'

export function Socials(): JSX.Element {
  return (
    <S.Container>
      <WrapperCenter>
        <S.Content>
          <S.TitleContainer>
            <h3>
              Saiba mais em <br /> nossas redes sociais
            </h3>
            <p>Casos de sucesso, soluções inovadoras e informação</p>
          </S.TitleContainer>
          <S.SocialContainer>
            <Link href="/">
              <a>
                <S.Social>
                  <AiFillLinkedin size={26} />
                </S.Social>
              </a>
            </Link>
            <Link href="/">
              <a>
                <S.Social>
                  <FaFacebookF size={22} />
                </S.Social>
              </a>
            </Link>
            <Link href="/">
              <a>
                <S.Social>
                  <AiOutlineInstagram size={26} />
                </S.Social>
              </a>
            </Link>
            <Link href="/">
              <a>
                <S.Social>
                  <AiOutlineTwitter size={26} />
                </S.Social>
              </a>
            </Link>
          </S.SocialContainer>
        </S.Content>
      </WrapperCenter>
    </S.Container>
  )
}
