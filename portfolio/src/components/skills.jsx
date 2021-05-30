/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FaReact, FaNodeJs, FaCss3, FaSwift, FaJava, FaAws } from 'react-icons/fa'

const Skills = () => {
    return(
        <div sx={{mt: '2em', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h2 sx={{ mb: '2em'}}>Languages/Tools</h2>
            <div sx={{variant: 'containers.skills'}}>
                <FaReact size={40}/>
                <FaNodeJs size={40}/>
                <FaCss3 size={40}/>
                <FaSwift size={40}/>
                <FaJava size={40}/>
                <FaAws size={40}/>
            </div>
        </div>
    )
}

export default Skills;