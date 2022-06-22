import React from 'react'
import styled from 'styled-components'

const ThemeToggle = (props) => {
  

  return (
    <Container onClick={props.changeTheme}>
      <DarkModeIcon isDarkTheme={props.isDarkTheme}/> 
        <h1>Dark Mode</h1>
    </Container>
  )
}

const Container = styled.div`
  /* font-size: 1.3rem; */
  /* padding: 0; */
  display: flex;
  /* width:10rem; */
  align-items: center;
  cursor: pointer;
  height: 100%;
  /* background-color: red; */

  h1{
    font-size: medium;
    margin: 0;
    /* background-color: rebeccapurple; */
  }
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
    /* font-size: 12rem; */
    /* font-size: small; */
  `

export default ThemeToggle