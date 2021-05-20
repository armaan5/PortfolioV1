/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Image } from 'theme-ui'
import { useContext } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import avatar from '../../public/me.jpg'
import PageContext from '../data/data'

const Hero = () => {
    const data = useContext(PageContext)
    console.log(PageContext)
    console.log(data)
    return (
        <div sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <Image src={avatar} sx={{ height: '250px', borderRadius: '4px' }} />
            <div>
                <div sx={{ display: 'flex', flexDirection: 'row' }}>
                    <h2 sx={{ color: 'primary' }}>Hello</h2>
                    <h2>, I'm Armaan</h2>
                </div>
                <h3>Recent grad from the University of North Texas and full-stack developer</h3>
                <div sx={{ display: 'flex', flexDirection: 'row', }}>
                    <a href="https://github.com/armaan5" sx={{color: 'inherit'}}>
                        <FaGithub size={35} sx={{mr: '2em'}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/armaandhanoa/" sx={{color: 'inherit'}}>
                        <FaLinkedin size={35}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero