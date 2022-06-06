import React from 'react'
import styled from 'styled-components'
import ThemeToggle from './ThemeToggle'
const Header = (props) => {

  return (
    <Container>
        <Title>Where in the world?</Title>
        <ThemeToggle 
          changeTheme={props.changeTheme}
          isDarkTheme={props.isDarkTheme}
          /> 
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding-left: 8rem;
    padding-right: 8rem;
`
const Title = styled.h1`
    font-size: 1.6rem;
`

export default Header