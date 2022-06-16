import React from 'react'
import styled from 'styled-components'

const CountryCard = () => {
  return (
    <Container>
        <CountryImage>
          Image
        </CountryImage>
        <CountryInformation>
          Information
        </CountryInformation>
    </Container>
  )
}

const Container = styled.div`
    height: 20rem;
    width: 16rem;
    display: grid;
    border: 1px solid black;
`
const CountryImage = styled.div`
`
const CountryInformation = styled.div``

export default CountryCard