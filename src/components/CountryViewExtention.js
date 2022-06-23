import React from 'react'
import styled from 'styled-components'


const CountryViewExtention = (props) => {

  return (
    // <div>{props.countryName}</div>
    <Container>
        <CountryFlag/>
        <CountryInformation>
            <h1>{props.countryName}</h1>
            
            <ul>
                <li>name</li>
                <li>name</li>
                <li>name</li>
                <li>name</li>
                <li>name</li>
                <li>name</li>
                <li>name</li>
                <li>name</li>
            </ul>
        </CountryInformation>
    </Container>
  )
}

const Container = styled.div`
    height: 55%;
    width: 95%;
    margin-top: 7rem;
    display: grid;
    grid-template-columns: auto auto;
    /* background-color: red; */
`

const CountryFlag = styled.div`
    /* background-color: rebeccapurple; */
`
const CountryInformation = styled.div`
    background-color: yellow;
`
export default CountryViewExtention