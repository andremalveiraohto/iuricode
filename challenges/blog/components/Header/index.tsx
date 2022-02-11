import { MaxWidth } from "../Containers"
import { Container } from "./index.styled"
import { ButtonTippy, UserLogin } from "../Buttons"
import { BsUnlock, BsFillLockFill } from "react-icons/bs"
import { useEffect, useState } from "react"
import { InputSearch } from "../Inputs"


type HeaderProps = {
  className?: string;
  headerSmall: boolean;
  fixHeader?: (e:boolean) => any;
}
const Header = (props:HeaderProps) => {
  const [fixHIcon, setFixHIcon] = useState<boolean>(false)
  
  const FixHeader = (fixHIcon:boolean) => {
    setFixHIcon(!fixHIcon)
    localStorage.setItem('fixHIcon', `${!fixHIcon}`)
    props.fixHeader && props.fixHeader(fixHIcon)
  }
  useEffect(() => {
    if(localStorage.getItem('fixHIcon') != 'null' &&
       localStorage.getItem('fixHIcon') == 'true' ){
      FixHeader(false)
    }
  },[])

  console.log('fixHIcon', fixHIcon)
  console.log('headerSmall', props.headerSmall)

  return(<>
    <Container className={`${props.headerSmall ? 'small' : ''} ${fixHIcon ? 'fixed' : ''}`}>
      <MaxWidth className="container">
        <div className="header">
          <h1>Codelândia</h1>
          {
          !fixHIcon && 
          !props.headerSmall 
          ? <UserLogin/> : ''}
        </div>
        <div className="search">
          {
          !fixHIcon && 
          !props.headerSmall 
          ? <InputSearch/> : ''}
         
          <div className="fix-header">
            <ButtonTippy 
              onClick={() => FixHeader(fixHIcon)} 
              tippy={fixHIcon ? 'Pined' : "Pin Header"} 
              content={fixHIcon ? <BsFillLockFill/> : <BsUnlock/>} 
              size={18}
            />
          </div>
          {
            fixHIcon ||
            !fixHIcon && 
            props.headerSmall 
            ? <UserLogin/> : ''
          }
          </div>
       
      </MaxWidth>
    </Container>
  </>)
}

export default Header