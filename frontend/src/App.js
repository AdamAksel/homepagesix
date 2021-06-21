import './App.css'
import styled from 'styled-components'
import { GlobalStyle } from './globalstyles'
import { Navbar, Header } from './components'

const StyledApp = styled.div``

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Navbar />
      <Header />
    </StyledApp>
  )
}

export default App
