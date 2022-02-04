import Link from 'next/link'
import { AppTopic } from '../AppTopic'
import { Title } from '../Title'
import { WrapperCenter } from '../WrapperCenter'
import { appTopicsData } from './appTopicsData'
import * as S from './styles'

export function RecentlyMadeSection(): JSX.Element {
  return (
    <S.Container>
      <WrapperCenter>
        <Title>
          <h4>Feitos Recentes</h4>
        </Title>
        <S.TopicsContainer>
          {appTopicsData.map(topic => (
            <AppTopic
              key={topic.id}
              title={topic.title}
              type={topic.type}
              description={topic.description}
            />
          ))}

          <S.MoreContainer>
            <S.Line />
            <Link href="/">
              <a>Ver Mais</a>
            </Link>
            <S.Line />
          </S.MoreContainer>
        </S.TopicsContainer>
        <S.Depo>
          <S.DepoTitle>
            <h5>Depoimentos</h5>
            <p>
              Você pode saber mais sobre nosso trabalho com quem já tem a
              experiência de trabalhar junto conosco.
            </p>
          </S.DepoTitle>
          <S.DepoCard>
            <S.DepoContent>
              “Inserir depoimento de parceiros/ clientes juntamente ao nome e
              empresa ”
            </S.DepoContent>
            <S.DepoIdentification>
              <S.FakeDepoIdentificationContent />
              <S.DepoIdentificationContent>
                <p className="name">- Lucas Rafael</p>
                <p className="company">Odeon Centro de Saúde</p>
              </S.DepoIdentificationContent>
            </S.DepoIdentification>
          </S.DepoCard>
        </S.Depo>
      </WrapperCenter>
    </S.Container>
  )
}
