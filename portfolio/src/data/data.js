import { createContext } from 'react'


const pageData = {
    hero: 'Recent grad from the University of North Texas and full-stack developer',
    linkedin: 'https://www.linkedin.com/in/armaandhanoa/',
    github: 'https://github.com/armaan5',
}

const PageContext = createContext(pageData)
console.log(PageContext)
module.exports = PageContext;