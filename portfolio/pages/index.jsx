/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

import Header from '../src/components/header'
import Hero from '../src/components/hero'
import Skills from '../src/components/skills'

const Index = () => {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <Header />
      <Hero />
      <Skills/>
    </div>
  )
}


export default Index

