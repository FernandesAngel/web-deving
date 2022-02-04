import Link from 'next/link'
import { ServiceCard } from '../ServiceCard'
import { Title } from '../Title'
import { WrapperCenter } from '../WrapperCenter'
import { servicesData } from './servicesData'
import * as S from './styles'

export function ServicesSection(): JSX.Element {
  return (
    <S.Container>
      <WrapperCenter>
        <S.TitleWrapper>
          <Title>
            <h2>
              Nossos serviços
              <br /> mais solicitados
            </h2>
          </Title>
          <p>
            Não identificou a solução desejada na seleção a baixo?
            <br />
            <Link href="/">
              <a> Consulte-nos! </a>
            </Link>
            A Deving tem a disposição um time de profissionais especialmente
            capacitados para lhe ajudar a encontrar a solução ideal para seu
            hospital, clinica ou consultório.
          </p>
        </S.TitleWrapper>

        {servicesData.map(s => (
          <ServiceCard
            key={s.id}
            image={s.image}
            title={s.title}
            subtitle={s.subtitle}
          />
        ))}
      </WrapperCenter>
    </S.Container>
  )
}
