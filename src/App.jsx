import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Button from './ui/Button'
import Input from './ui/Input'
import Heading from './ui/Heading'

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading type='h1'>The Cabin</Heading>
        <Button onClick={() => alert('checkin')}>Check in</Button>
        <Input type='number' placeholder='Number of guests' />
      </StyledApp>
    </>
  )
}

export default App
