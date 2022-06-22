import React, { useState } from 'react'
import styled from 'styled-components'
import CountriesView from './components/CountriesView'
import Header from './components/Header'



const App = () => {

  
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  function changeTheme(){
    setIsDarkTheme(prev=>!prev)
    console.log(isDarkTheme);
  }

  const propsCollection= {
    changeTheme,
    isDarkTheme,
  }
  
  return (
    <Container>
      <Header {...propsCollection}/>
      <CountriesView {...propsCollection}/>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  margin: 0;
  height: 100%;
  overflow: hidden;
  grid-template-rows: 8vh 92vh;
`
export default App