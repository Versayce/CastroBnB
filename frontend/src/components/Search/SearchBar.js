import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getSpotsWithSearchQuery } from "../../store/spots";

const SearchBar = () => {
    const dispatch = useDispatch()
    const [query, setQuery] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('SEARCH QUERY: ', query)
        // dispatch search here
        await dispatch(getSpotsWithSearchQuery(query))
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

const StyledInput = styled.input`
    margin: 0px;
    padding: 5px;
    margin: 0px 10px 0px 10px;
`
const StyledButton = styled.button`
    margin-top: 0px;
    border: none;
    padding: 5px 8px 5px 8px;
    border-radius: 3px;
    background-color: rgb(63, 63, 63);
    color: white;
    font-size: 12pt;
    position: relative;
    overflow: hidden;
    justify-content: center;
    &:hover {
        background-color: rgb(227, 28, 95);
        cursor: pointer;
    }
`
