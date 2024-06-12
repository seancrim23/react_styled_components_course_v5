import {DefaultButton} from './components/Buttons';
import styled from 'styled-components/macro';

function App() {
  return (
    <div style={{padding:"2rem"}}>
      <DefaultButton>click me</DefaultButton>
      <DefaultButton large>click me</DefaultButton>
    </div>
  )
}

export default App;
