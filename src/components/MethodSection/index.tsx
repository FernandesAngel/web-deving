import { Button } from '../Button'
import { MethodCard } from '../MethodCard'
import { Title } from '../Title'
import { WrapperCenter } from '../WrapperCenter'
import * as S from './styles'

export function MethodSection(): JSX.Element {
  return (
    <S.Container id="methods">
      <WrapperCenter>
        <S.TitleContainer>
          <Title>
            <h3>Método</h3>
          </Title>
          <S.Description>
            <p>
              Nossas experiências testes e estudos nos permitiram identificar e
              formatar nosso próprio método de organização e ação que nos
              permite identificar as questões e oportunidade de cada projeto de
              maneira clara. Dividimos o processo em 4 Fases:
            </p>
            {/* <S.ContainerButton>
              <Button title="Saiba Mais sobre nosso método" />
            </S.ContainerButton> */}
          </S.Description>
        </S.TitleContainer>
        <S.MethodContainer>
          <S.Content>
            <MethodCard
              image="/briefing.png"
              title="Briefing"
              description="Essa fase parte desse momento até a compreensão por completa do projeto, documentamos tudo e juntos checamos todas as demandas identificadas nesse levantamento."
            />
            <MethodCard
              image="/modeling.png"
              title="Modelagem"
              description="Ao compilar as informações da etapa anterior seguimos imediatamente para o processo de produção. Iniciando na produção de layout, à prototipagem e desenvolvimento final. Durante os pontos de atençaõ dessa etapa você será comunicado e faremos as apresentações de progressão."
            />
          </S.Content>
          <S.Content>
            <MethodCard
              image="/launch.png"
              title="Lançamento"
              description="O lançamento vai além de disponibilizar o app/ferramenta. Previamente realizamos a pesquisa e testes de stress a fim de identificamos a plataforma, servidor e até mesmo a data ideal para o lançamento. Para ter o maior aproveitamento de resultado e evite possíveis complicações."
            />
            <MethodCard
              image="/monitoring.png"
              title="Monitoramento"
              description="O lançamento é visto como um fim, quando na verdade pode ser apenas o início. Buscamos aprimorar e identificar novas possibilidades e funcionalidades que resultem em mais desempenho através de monitoramento e atualização frequente."
            />
          </S.Content>
        </S.MethodContainer>
      </WrapperCenter>
    </S.Container>
  )
}
