import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { regionFilter } from '../recoil/atoms/regionFilter'

const SearchFilter = () => {

  const [_, setRegionFilter] = useRecoilState(regionFilter)

  return (
    <Container>
       
        <select name='regionFilter' >
          <option value={'1'}>one</option>
          <option value={'2'}>two</option>
        </select>
    </Container>
  )
}

const Container = styled.div`
    width:10rem;
    height: 3rem;
    border: 1px solid black;
    select{
      font-size: 1rem;
      padding-left: 1rem;
      height: 100%;
      width: 100%;
      outline: none;
      border: none;
      /* padding: 1rem; */
    }
`
export default SearchFilter