import { useState } from "react";
import GlobalStyles from "./global-styles";
import styled, { ThemeProvider } from "styled-components";

const BaseTheme = {
  color: '#222',
  background: '#fff',
}
const DarkTheme = {
  color: '#fff',
  background: '#222',
}
const Container = styled.div`
padding:2rem;
color:${(props)=>props.theme.color};
background:${(props)=>props.theme.background};
`

function App() {
  const [baseTheme, setTheme] = useState(true)

  const handleTheme = () => {
    setTheme(!baseTheme)
  }
  return (
    <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
      <GlobalStyles />
      <Container>
        <h1>hello world</h1>
        <button className="btn" onClick={handleTheme}>toggle me</button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
