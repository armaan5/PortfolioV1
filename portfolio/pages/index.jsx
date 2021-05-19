/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../src/components/header'
import Hero from '../src/components/hero'

const Index = ( {content} ) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page'}}>
      <Header/>
      <Hero/>
    </div>
  </div> 
)


export default Index

export function getStaticProps() {
  // get data from CMS

  return {
    props: {
      content: {
        title: 'Hey, I\'m Armaan!'
      }
    }
  }
}