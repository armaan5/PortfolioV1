/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

import Header from '../src/components/header'
import Hero from '../src/components/hero'
import Skills from '../src/components/skills'
import Projects from '../src/components/projects'

const Index = () => {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <Header />
      <Hero />
      <Skills/>
      <Projects/>
    </div>
  )
}


export default Index

