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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`
const Title = styled.h1`
    font-size: 1.6rem;
`

export default Header