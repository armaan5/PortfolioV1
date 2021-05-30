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
        <div sx={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', '@media screen and (max-width: 1000px)': {
                flexDirection: 'column'
            }
        }}>
            <Image src={avatar} sx={{
                variant: 'containers.image', '@media screen and (max-width: 1000px)': {
                    objectFit: 'contain'
                }
            }} />
            <div>
                <div sx={{ display: 'flex', flexDirection: 'row' }}>
                    <h2 sx={{ color: 'primary' }}>Hello</h2>
                    <h2>, I'm Armaan</h2>
                </div>
                <h3>{pageData.hero}</h3>
                <div sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <a href={pageData.github} sx={{
                        color: 'inherit', ':hover': {
                            color: 'primary',
                        }
                    }}>
                        <FaGithub size={35} />
                    </a>
                    <a href={pageData.linkedin} sx={{
                        color: 'inherit', ':hover': {
                            color: 'primary',
                        }
                    }}>
                        <FaLinkedin size={35} />
                    </a>
                    <a href="mailto:dhanoa.armaan@outlook.com" sx={{
                        color: 'inherit', ':hover': {
                            color: 'primary',
                        }
                    }}>
                        dhanoa.armaan@outlook.com
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero