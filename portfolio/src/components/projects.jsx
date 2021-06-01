/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Image } from 'theme-ui'
import mLight from '../../public/mlight.jpg'

const Projects = () => {
    return (
        <div sx={{ mt: '2em', display: 'flex', flexDirection: 'column', mb: '2em' }}>
            <h2>Projects</h2>
            <div 
                sx={{ variant: 'containers.project' }}
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://www.mysticlight.net';
                }}
            >
                <Image src={mLight} sx={{ variant: 'containers.image' }} />
                <div sx={{ ml: '2em', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <div>
                        <h3>Mystic Light Transport</h3>
                        <p>
                            Landing page for a freight company
                    </p>
                    </div>
                    <p sx={{ color: 'primary', fontWeight: 'bold' }}>NextJS   Chakra-UI</p>
                </div>
            </div>
        </div>
    )
}

export default Projects;