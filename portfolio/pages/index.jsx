/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { createContext } from 'react'

import Header from '../src/components/header'
import Hero from '../src/components/hero'
import PageContext from '../src/data/data'

const Index = () => {
  return (
  <PageContext.Provider>
    <div sx={{variant: 'containers.page'}}>
      <Header/>
      <Hero/>
    </div>
  </PageContext.Provider>
  )
}


export default Index

