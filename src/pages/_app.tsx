import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logo from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'

function App({ Component, pageProps }): JSX.Element {
  globalStyles()

  return (
    <Container>
      <Header>
        <img src={logo.src} alt="logo" width={"50px"} />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

export default App
