import { useState } from "react";
import styled from "styled-components";

const SearchBar = () => {
    const [query, setQuery] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('SEARCH QUERY: ', query)
        // dispatch search here
        setQuery("")
    }

    return (
        <SearchWrapper>
            <StyledInput value={query} type="text" onChange={e => setQuery(e.target.value)}/>
            <StyledButton onClick={e => handleSubmit(e)}>Search</StyledButton>
        </SearchWrapper>
    )
}

export default SearchBar

const SearchWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const StyledLabel = styled.label`

`

const StyledInput = styled.input`
    margin: 0px;
    padding: 5px;
    margin: 0px 10px 0px 10px;
`
const StyledButton = styled.button`
    
`
