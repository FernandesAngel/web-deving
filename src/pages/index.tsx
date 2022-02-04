import { useState } from 'react'
import Head from 'next/head'
import * as S from '../styles/pages/home'
import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
import { ServicesSection } from '../components/ServicesSection'
import { MethodSection } from '../components/MethodSection'
import { SlideSection } from '../components/SlideSection'
import { RecentlyMadeSection } from '../components/RecentlyMadeSection'
import { Socials } from '../components/Socials'
import { Footer } from '../components/Footer'
import { ContactUs } from '../components/ContactUs'

const Home: React.FC = () => {
  const [teste] = useState('Setup do Projeto')
  return (
    <S.Container>
      <Head>
        <title>Página Home</title>
      </Head>
      <Header />
      <Menu />
      <ServicesSection />
      <MethodSection />
      <SlideSection />
      <RecentlyMadeSection />
      <Socials />
      <ContactUs />
      <Footer />
    </S.Container>
  )
}

export default Home
