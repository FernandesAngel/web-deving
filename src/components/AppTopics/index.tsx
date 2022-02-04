import * as S from './styles'

export function AppTopic(): JSX.Element {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Mark />
        <h6>VitalSkin</h6>
      </S.TitleContainer>
      <S.Description>
        Aplicativo com foco em capturar imagem de lesões de pele para a
        inteligência artificial classificar as lesões de pele 4 classes.
      </S.Description>
      <S.Platform>Disponível para Android e IOS</S.Platform>
    </S.Container>
  )
}
