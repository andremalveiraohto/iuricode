import styled from "styled-components";



export const InputSearchLabel = styled.label`


  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 0.3rem;
  padding: 0.8rem 1.31rem;
  border-radius: 0.3rem;
  background-color: #ffffff1a;

  &.small {
    padding: 0;
    width: 100%;
    & #IconSearch svg {
      width: 1.3rem;
      height: 1.3rem;
    }
    & input {
      font-size: 0.95rem;
    }
  }

  & #IconSearch {
    cursor: pointer;
    transition: ease 0.2s;
    padding: 0.3rem;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    & svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
  & #IconSearch:hover {
    background-color: #ffffff1a;
  }

  & input {
    box-shadow: none;
    color: var(--white-200);
    font-size: 1.1rem;
    font-weight: 300;
  }
  & input::placeholder {  
    color: #f9f9f9a6;
    font-weight: 300;
  }

`