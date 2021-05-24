/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Image } from 'theme-ui'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import avatar from '../../public/me.jpg'
import pageData from '../data/data'

const Hero = () => {
    console.log(pageData)
    return (
        <div sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <Image src={avatar} sx={{ height: '250px', width: 'auto', borderRadius: '4px' }} />
            <div>
                <div sx={{ display: 'flex', flexDirection: 'row' }}>
                    <h2 sx={{ color: 'primary' }}>Hello</h2>
                    <h2>, I'm Armaan</h2>
                </div>
                <h3>{pageData.hero}</h3>
                <div sx={{ display: 'flex', flexDirection: 'row', }}>
                    <a href={pageData.github} sx={{color: 'inherit'}}>
                        <FaGithub size={35} sx={{mr: '2em'}}/>
                    </a>
                    <a href={pageData.linkedin} sx={{color: 'inherit'}}>
                        <FaLinkedin size={35}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero