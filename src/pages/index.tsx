import { useCallback, useState } from 'react'
import Head from 'next/head'
import * as S from '../styles/pages/home'
import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
import { ServicesSection } from '../components/ServicesSection'
import { MethodSection } from '../components/MethodSection'
import { Slide } from '../components/Slide'
import { RecentlyMadeSection } from '../components/RecentlyMadeSection'
import { Socials } from '../components/Socials'
import { Footer } from '../components/Footer'
import { ContactUs } from '../components/ContactUs'
import { ContactUsV2 } from '../components/ContactUsV2'
import { SlidesSection } from '../components/SlidesSection'

const Home: React.FC = () => {
  const [showContactUs, setShowContactUs] = useState<
    'contactus' | 'contactusv2'
  >('contactus')

  const handleToggleContact = useCallback(
    (value: 'contactus' | 'contactusv2') => {
      setShowContactUs(value)
    },
    []
  )
  return (
    <S.Container>
      <Head>
        <title>Página Home</title>
      </Head>
      <Header />
      {/* <Menu /> */}
      <ServicesSection />
      <MethodSection />
      <SlidesSection />

      <RecentlyMadeSection />
      <Socials />
      {showContactUs === 'contactus' && (
        <ContactUs onShow={handleToggleContact} show={showContactUs} />
      )}
      {showContactUs === 'contactusv2' && (
        <ContactUsV2 onShow={handleToggleContact} show={showContactUs} />
      )}
      <Footer />
    </S.Container>
  )
}

export default Home
