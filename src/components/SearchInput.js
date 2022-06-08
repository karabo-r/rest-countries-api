import React from 'react'
import styled from 'styled-components'

const SearchInput = () => {
  return (
    <Container>
        <SearchIcon/>
        <Input placeholder='Search for a country...'/>
    </Container>
  )
}

const Container = styled.div`
    margin-left: 8rem;
    margin-top: 2rem;
    width: 23rem;
    height: 3rem;
    border-radius: 3px;
    display: flex;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

`
const SearchIcon = styled.div`
    background: ${'URL("images/search.svg")'};
    height: 1.5rem;
    width: 1.5rem;
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