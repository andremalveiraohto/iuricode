import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
type FadeInProps = {
  id: number;
  key?: number;
  time?:number;
  eixo?:string;
  init?: number;
  className?:string;
  children?:ReactNode;
}
export const FadeIn = (props:FadeInProps) => {
  const time = (10 * props.id + 2) / 100 + (props.time ?? 0.20)

  const eixo = props.eixo ?? 'y';
  const init = props.init ?? 20;
  return(<>
      <AnimatePresence exitBeforeEnter>
        <motion.div 
          className={props.className}
          animate={{ opacity: 1, [eixo]: 0 }}
          initial={{ opacity: 0, [eixo]: init + (2* props.id) }}
          exit={{ opacity: 0, [eixo]: -20 }}
          transition={{ duration: time }}
        >{props.children}</motion.div>
      </AnimatePresence>
    </>)
}