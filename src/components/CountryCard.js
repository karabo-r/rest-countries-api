import React from 'react'
import styled from 'styled-components'

const CountryCard = (props) => {
  return (
    <Container onClick={props.extend}>
        
        <CountryFlag/>
        <CountryInformation key={props.key}>
          <h1>
            {props.countryName}
          </h1>
          <ul>
            <li>
              Population:
              {props.countryPopulation}
            </li>
            <li>
              Region:
              {props.countryRegion}
            </li>
            <li>
              Capital:
              {props.countryCapital}
            </li>
          </ul>
        </CountryInformation>
    </Container>
  )
}

const Container = styled.div`
    height: 18rem;
    width: 15rem;
    display: grid;
    grid-template-rows: 48% auto ;
    border: 1px solid black;
    border-radius: 8px;
    cursor: pointer;
`
const CountryFlag = styled.div`
background-color: rebeccapurple;
background: ${props=>props.countryFlag};
background-repeat: no-repeat;
background-size: cover;
`
const CountryInformation = styled.div`
  padding: 1.2rem;

  h1{
    font-size: 1.2rem;
    margin-bottom: 16px;
  }

  ul{
    li{
      margin-top: 6px;
    }
  }
`

export default CountryCard