import { BiSearch } from "react-icons/bi"
import { InputSearchLabel } from "./index.styled"

type InputSearchProps ={
  className?: string;
}
export const InputSearch = (props:InputSearchProps) => {


  return (<>
    <InputSearchLabel htmlFor="InputSearch" className={props.className}>
      <i id="IconSearch"><BiSearch/></i>
      <input type="text" name="InputSearch" id="InputSearch" placeholder="Pesquisar"/>
    </InputSearchLabel>
  </>)
}