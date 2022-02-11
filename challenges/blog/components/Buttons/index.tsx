import Tippy from "@tippyjs/react"
import { ReactNode, useState } from "react"
import styled from "styled-components"
import Image from 'next/image'
import { BsGithub } from "react-icons/bs"

type ButtonProps = {
  children?: ReactNode
  content?: string | JSX.Element;
  tippy?: string | JSX.Element;
  size?: number;
  onClick?: () => any;
  className?: string;
}

const Button = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem;
    border-radius: 0.3rem;
    transition: ease 0.2s;
    cursor: pointer;
    height: fit-content;
    & svg {
      width:${props => props.size ? props.size+'px' : '18px'};
      height:${props => props.size ? props.size+'px' : '18px'};
    }
    :hover {
      background: #8076f72d;
    }

    &.selected {
      background: #8076f72d;
    }
`
export const ButtonTippy = (props:ButtonProps) => {
  const onClick = () => {
    props.onClick && props.onClick()
  }

  return(
    <Tippy 
      content={props.tippy} 
      theme="dark" 
      animation="scale-subtle"
 
    >
      <Button 
        size={props.size}
        onClick={onClick}
        className={props.className}
      >
        {props.content}
      </Button>
    </Tippy>)
}



const UserLoginButton = styled.button`
  border-radius: 25rem;
  background: ${props => props.theme.bgSecond};
  padding: 0.2rem 0.2rem 0.2rem 0.8rem;
  cursor: pointer;
  transition: ease 0.2s;
  height: 2.2rem;
  &:hover {
    box-shadow: 0px 0px 0px 1.5px ${props => props.theme.gray}
  }
  & .user {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    & span {
      font-size: 0.95rem;
      color: ${props => props.theme.fontSecond}
    }
    & .image{
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      width: 1.8rem;
      height: 1.8rem;
      & svg {
        width: 1.4rem;
        height: 1.4rem;
        color: ${props => props.theme.fontSecond}
      }
    }
  }

`
export const UserLogin = () => {
  const [session, setSession] = useState(false)
  return(<>
    <Tippy 
      trigger={'manual'}
      content={session ? 'Settings' : ''} 
      theme='dark'
    >
      <UserLoginButton>
        <div className="user">
          <span>{session ? 'André Malveira' : 'Login With Github'}</span>
          <div className="image">
            {session ? 
            <Image width={28.8} height={28.8} src={'https://avatars.githubusercontent.com/u/40311230?v=4'}/>
            : <BsGithub/>}
          </div>
        </div>
      </UserLoginButton>
    </Tippy>
  </>)
}