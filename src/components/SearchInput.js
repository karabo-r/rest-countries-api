import React, { useRef } from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { countrySearchAtom } from '../recoil/atoms/countryInputAtom'

const SearchInput = () => {

  const countryInputRef = useRef(null)

  const [_, SetSearchCountry] = useRecoilState(countrySearchAtom)

  function handleInput(){
    const value = countryInputRef.current.value
    if (value) SetSearchCountry(value) 
  }

  return (
    <Container>
        <SearchIcon/>
        <Input 
        ref={countryInputRef}
        onChange={handleInput}
        placeholder='Search for a country...'/>
    </Container>
  )
}

const Container = styled.div`
    width: 27rem;
    height: 3.4rem;
    border-radius: 3px;
    display: flex;
    align-items: center;
    /* border: 1px solid black; */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

`
const SearchIcon = styled.div`
    background: ${'URL("images/search.svg")'};
    height: 1.4rem;
    width: 1.4rem;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 1.5rem;
`

const Input = styled.input`
    border: none;
    outline: none;
    margin-left: 1rem;
`
export default SearchInput