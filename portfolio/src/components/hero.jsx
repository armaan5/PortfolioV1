/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Image } from 'theme-ui'
import avatar from '../../public/me.jpg'

const Hero = () => {
    return (
            <div sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                <Image src={avatar} sx={{height: '250px', borderRadius: '4px'}}/>
                <div>
                    <div sx={{display: 'flex', flexDirection: 'row'}}>
                        <h2 sx={{color: 'primary'}}>Hello</h2>
                        <h2>, I'm Armaan</h2>
                    </div>
                    <h3>Recent grad from the University of North Texas, and aspiring full-stack developer</h3>
                </div>
        </div>
    )
}

export default Hero