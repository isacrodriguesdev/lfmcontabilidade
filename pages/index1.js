import React from 'react'
import styled from 'styled-components'
// components
import Header from '../src/components/Header'
import Office from '../src/components/Office'
import Services from '../src/components/Services'
import Conquest from '../src/components/Conquest'
import Contact from '../src/components/Contact'
import Whatsapp from '../src/components/Whatsapp'
import Footer from '../src/components/Footer'
// images

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Office />
      <Conquest />
      <Services />
      <Contact />
      <Whatsapp />
      <Footer />
    </React.Fragment>
  )
}