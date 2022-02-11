import Home from "../components/Home"
import Header from "../components/Header"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [headerSmall, setHeaderSmall] = useState<boolean>(false)
  const [fixHeader, setFixHeader] = useState<boolean>(false)
  
  useEffect(() => {
    if(!fixHeader && localStorage.getItem('fixHIcon') == 'false' ){
      document.addEventListener('scroll', () => {
        if(window.scrollY > 30) 
        {setHeaderSmall(true)} 
        else {setHeaderSmall(false)}
      })   
    } 
  },[fixHeader])
  

  return (<>
    <Header 
      headerSmall={headerSmall}
      fixHeader={(e) => setFixHeader(!e)}
    />
    <Home 
      headerSmall={headerSmall}
      fixHeader={fixHeader}
      className={`${headerSmall ? 'small' : ''} ${fixHeader ? 'fixed' : ''}`}
    />
  </>)
}
