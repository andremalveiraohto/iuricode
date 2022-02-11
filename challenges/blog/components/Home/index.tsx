import Head from "next/head"
import { MaxWidth } from "../Containers"
import { Post, Posts } from "../Posts"
import { Container } from "./index.styled"

type HomeProps = {
  className?: string;
  headerSmall?: boolean;
  fixHeader?: boolean;
}

const Home = (props:HomeProps) => {

  return(<>
    <Head>
      <title>Codelândia - Blog</title>
    </Head>
    <Container className={props.className}>
      <MaxWidth>
        <Posts 
          headerSmall={props.headerSmall}
          fixHeader={props.fixHeader}
        >
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          
        </Posts>
      </MaxWidth>
    </Container>
  </>)
}

export default Home