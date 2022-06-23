import React, { useState } from 'react'
import styled from 'styled-components'
import CountryCard from './CountryCard'
import CountryViewExtention from './CountryViewExtention'
import SearchInput from './SearchInput'


const CountriesView = () => {

  const [countryExtend, setCountryExtend] = useState({
    state: false,
    country: ""
  })

  function ViewCountryExtend(y){
    setCountryExtend({
      state: true,
      country: y
    })
  }


  const testStore = [
    {
      key: 1,
      countryName: 'south africa'
    },
    {
      key: 2,
      countryName: 'germany'
    },
    {
      key: 3,
      countryName: 'france'
    },
    {
      key: 4,
      countryName: 'england'
    }
  ]

  const ProcessedCard = testStore.map(x=>{
    return <CountryCard 
    {...x}
    extend={()=>ViewCountryExtend(x.countryName)}
    />
  })

const countryName = countryExtend.country

const propsCollection = {
  countryName
}

return (
   <Container>
    {countryExtend.state 
    ? <CountryViewExtention {...propsCollection}/>
    : <>
        <SearchContainer>
          <SearchInput/>
        </SearchContainer>
        <CardContainer>
          {ProcessedCard}  
        </CardContainer>
    </>
     }
   </Container>
  )
  }

const Container = styled.div`

  margin-top: 1.1rem;
  padding-left: 5rem;
  padding-right: 5rem;

`
const CardContainer = styled.div`
  height: 100%;
  display: grid;
  justify-content: space-between;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto auto;
  
`
const SearchContainer = styled.div`
height: 7rem;
  display: flex;
  justify-content: space-between; 
  align-items: center;
`
export default CountriesView

