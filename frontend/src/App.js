import './App.css'
import styled from 'styled-components'
import { GlobalStyle } from './globalstyles'
import { Navbar } from './components'

const StyledApp = styled.div``

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Navbar />
    </StyledApp>
  )
}

export default App
