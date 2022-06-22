import React, { useEffect } from 'react'
import styled from 'styled-components'
import CountryCard from './CountryCard'
import SearchInput from './SearchInput'
import { useRecoilState } from 'recoil'
import { countryData } from '../recoil/atoms/countryData'
import SearchFilter from './SearchFilter'

const CountriesView = () => {

  const [data, setData] = useRecoilState(countryData)

  function fetchData(){
    fetch("https://restcountries.com/v3.1/all")
    .then(response=>response.json())
    .then(newData=>{
      // setData([])
      setData({
        data : newData
      })
      console.log(data);
    })
  }

  useEffect(()=>{
    fetchData()
  }, [])

 

  return (
   <Container>
    <SearchContainer>
       <SearchInput/>
       <SearchFilter/>
    </SearchContainer>
     <CardContainer>
       <CountryCard/>
       <CountryCard/>
       <CountryCard/>
       <CountryCard/>
       <CountryCard/>
       <CountryCard/>
       <CountryCard/>
       <CountryCard/>
      </CardContainer>
   </Container>
  )
  }

const Container = styled.div`

  margin-top: 1.1rem;
  padding-left: 5rem;
  padding-right: 5rem;

`
const CardContainer = styled.div`
  /* background-color: rebeccapurple; */
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