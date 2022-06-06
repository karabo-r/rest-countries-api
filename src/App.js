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
    isDarkTheme
  }
  return (
    <Container>
      <Header {...propsCollection}></Header>
      <CountriesView></CountriesView>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10vh 90vh;
`
export default App