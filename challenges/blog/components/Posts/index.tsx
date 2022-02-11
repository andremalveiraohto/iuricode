import { PostsProp, PostsProps } from "./@type"
import { ContainerPosts, ContainerPost, PostLayout } from "./index.styled"

import { BsGrid } from 'react-icons/bs'
import { FaRegHeart, FaHeart, FaRegBookmark, FaBookmark } from 'react-icons/fa'

import { ButtonTippy } from "../Buttons"
import { useEffect, useState } from "react"
import { RowGap } from "../icons"
import { Color } from "../@blog-ui/colors"
import { InputSearch } from "../Inputs"

export const Posts = (props:PostsProps) => {
  const [postsLayout, setPostsLayout] = useState<'grid' | 'row'>('row')

  const DefinePostsLayout = (layout:any) => {
    if(layout != 'null'){
      setPostsLayout(layout)
      localStorage.setItem('postsLayout', layout)
    }
  } 

  useEffect(() => {
    DefinePostsLayout(localStorage.getItem('postsLayout'))
  },[])

  return (<>
    <PostLayout>
      <div className="left">
      {
        props.fixHeader ||
        !props.fixHeader && 
        props.headerSmall 
        ? <InputSearch className='small'/> : ''
      }
      </div>
      <div className="right">
        <ButtonTippy 
          onClick={() => DefinePostsLayout('grid')} 
          tippy="Grid" 
          content={<BsGrid/>} 
          size={24}
          className={postsLayout == 'grid' ? 'selected' : ''}
        />
        <ButtonTippy 
          onClick={() => DefinePostsLayout('row')} 
          tippy="Rows" 
          content={<RowGap/>} 
          size={24}
          className={postsLayout == 'row' ? 'selected' : ''}
        />
      </div>
    </PostLayout>
    <ContainerPosts className={postsLayout}>
      {props.children}
    </ContainerPosts>
  </>)
}


export const Post = (props:PostsProp) => {
  const [isLiked, setIsLiked]= useState<boolean>(false)
  const [isSaved, setIsSaved]= useState<boolean>(false)

  return (<>
    <ContainerPost>
      <div className="header">
        <div className="dathor">
          <div className="date">10 de fev, 2022</div>
          <a href="#"><div className="author">andremalveira</div></a>
        </div>

        <div className="reactions">
          <ButtonTippy 
            tippy={isLiked ? 'Liked' : "Like"} 
            content={isLiked ? <FaHeart color={Color.red}/> : <FaRegHeart/>}
            onClick={() => setIsLiked(!isLiked)}
          />
          <ButtonTippy 
            tippy={isSaved ? 'Saved' : "Save"} 
            content={isSaved ? <FaBookmark/> : <FaRegBookmark/>}
            onClick={() => setIsSaved(!isSaved)}
          />
        </div>
      </div>
      <div className="main">
        <a href="#"><h2 className="title">Tim Berners-Lee vai leiloar código-fonte da web</h2></a>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.</p>
      </div>
    </ContainerPost>
  </>)
}