/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FaReact, FaNodeJs, FaCss3, FaSwift, FaJava, FaAws } from 'react-icons/fa'

const Skills = () => {
    return(
        <div sx={{mt: '2em', display: 'flex', flexDirection: 'column'}}>
            <h2 sx={{ mb: '2em'}}>Languages/Tools</h2>
            <div sx={{variant: 'containers.skills'}}>
                <div sx={{ variant: 'containers.skill' }}>
                    <FaReact size={40}/>
                    <p>
                        React
                    </p>
                </div>
                <div sx={{ variant: 'containers.skill' }}>
                    <FaNodeJs size={40}/>
                    <p>
                        NodeJS
                    </p>
                </div> <div sx={{ variant: 'containers.skill' }}>
                    <FaCss3 size={40}/>
                    <p>
                        CSS3
                    </p>
                </div> <div sx={{ variant: 'containers.skill' }}>
                    <FaSwift size={40}/>
                    <p>
                        Swift
                    </p>
                </div> <div sx={{ variant: 'containers.skill' }}>
                    <FaJava size={40}/>
                    <p>
                        Java
                    </p>
                </div> <div sx={{ variant: 'containers.skill' }}>
                    <FaAws size={40}/>
                    <p>
                        AWS
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Skills;