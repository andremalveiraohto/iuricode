import styled from "styled-components";

export const Container = styled.header`

  /** HEADER */
  background: ${(props) => props.theme.header};
  height: 10.5rem;
  padding: 2.56rem 0;
  color: ${(props) => props.theme.fontThird};

  z-index: 1;
  position: fixed;
  width: 100%;

  &.small {
    transition: ease 0.5s;
  }
  &.small, &.fixed{
    height: auto;
    padding: 0.5rem 0;
    & .container {
      flex-direction: row;
    }
    & .search {
      display: flex;
      gap: 0.5rem;
      & label {
        padding: 0;
        & #IconSearch svg {
          width: 1.3rem;
          height: 1.3rem;
        }
        & input {
          font-size: 0.95rem;
        }
      }
      & .fix-header {
        display: flex;
        align-items: center;
      }
    }
    & .header {
      gap: 0.2rem;
      & h1, & h2 {
        height: 100%;
      }
      & h1 {
        align-items: center;
        display: flex;
        font-size: 1.5rem;
        &::after {
          font-size: 0.8rem;
          right: -1.90rem;
        }
      }
    }

  }
  & .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    & .fix-header {
      display: none;
    }
  }
  & .header {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: 400;

    & h1 {
      position: relative;
      &::after {
        content: 'blog';
        position: absolute;
        font-size: 1rem;
        top: 0.1rem;
        right: -2.3rem;
      }
    }
  }

  
`