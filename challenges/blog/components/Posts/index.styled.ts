import styled from "styled-components";

export const ContainerPosts = styled.div`
  position: relative;
  display: grid;
  gap: 3.12rem;

  &.grid {grid-template-columns: repeat(2, 1fr);}

`

export const ContainerPost = styled.div`

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.8rem 1.31rem;
  border-radius: 0.3rem;
  background: ${(props) => props.theme.bgSecond};
  box-shadow: 0px 0px 15px 0px #0000001c;

  & .header {
    display: flex;
    justify-content: space-between;

    & .dathor {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      & .date {
        display: flex;
        align-items: center;
      }
      & .author {
        font-size: 0.8rem;
        letter-spacing: 0.4px;
      }
      & .author:hover {
        text-decoration: underline;
      }
    }

    & .reactions {
      display: flex;
      column-gap: 0.5rem;
    }
  }

  & .dathor, & .description {
    color: ${(props) => props.theme.gray};
  }

  & .main {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;

    & .title:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    & .description {
      line-height: 2rem;
    }

  }



`

export const PostLayout = styled.div`
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & .left {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & .right {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }

`