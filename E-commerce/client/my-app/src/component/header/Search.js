import { InputBase,styled } from '@mui/material'
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const SearchConpainer= styled(Box)`
background:#fff;
width:38%;
border-radius:2px;
margin-left: 10px;
display:flex
`
const Inputsearch = styled(InputBase)`
paddin-left:20px;
width:100%;
font-size:unset;
`
const SearchIconApper = styled(Box)`
color:blue;
padding:5px;
display:flex
`
const Search = () => {
  return (
    <>
      
      <SearchConpainer>
      <Inputsearch
        placeholder='Search for products, brands and more'
      />
      <SearchIconApper>
      <SearchIcon/>
      </SearchIconApper>
      
      </SearchConpainer>
    </>
  )
}

export default Search
