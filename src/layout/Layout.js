import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({ children }) => {
  return (
    <Container>
      <a href="#main-content" className="skip-link">Pular para o conteudo</a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </Container>
  )
}
