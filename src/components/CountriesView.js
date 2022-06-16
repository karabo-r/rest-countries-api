import React from 'react'
import styled from 'styled-components'
import CountryCard from './CountryCard'
import SearchInput from './SearchInput'
import { useRecoilState } from 'recoil'
import { countryData } from './recoil/atoms/countryData'

const CountriesView = () => {

  const [data, setData] = useRecoilState(countryData)

  function fetchData(){
    fetch("https://restcountries.com/v3.1/all")
    .then(response=>response.json())
    .then(newData=>{
      setData([])
      setData(data.push(newData))
      console.log(data);
    })
  }

  return (
   <Container>
     <SearchInput/>
     <CardContainer>
        <CountryCard/>
      </CardContainer>
   </Container>
  )
  }

const Container = styled.div`
`
const CardContainer = styled.div`
  padding-left: 8rem;
  padding-right: 8rem;
  padding-top:2rem ;
  display: flex;
  
`

export default CountriesView