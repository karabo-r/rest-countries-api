import React from 'react'
import styled from 'styled-components'

const ThemeToggle = (props) => {
  

  return (
    <Container onClick={props.changeTheme}>
      <DarkModeIcon isDarkTheme={props.isDarkTheme}/> 
      Dark Mode
    </Container>
  )
}

const Container = styled.div`
  font-size: 1.3rem;
  display: flex;
  width:10rem;
  align-items: center;
  cursor: pointer;
  height: 100%;
`

const DarkModeIcon = styled.div`
    margin-right: 10px;
    background: ${props => props.isDarkTheme 
    ? `${"URL('images/DarkModeFilled.svg')"}` 
    : `${"URL('images/DarkModeUnFilled.svg')"}`};
    height: 1.5rem;
    width: 1.5rem;
    background-repeat: no-repeat;
    background-size: cover;
  `

export default ThemeToggle