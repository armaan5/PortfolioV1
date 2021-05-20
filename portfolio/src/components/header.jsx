/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useColorMode } from 'theme-ui'
import { FaSun, FaMoon } from 'react-icons/fa'

const Header = () => {
    const [colorMode, setColorMode] = useColorMode()
    const handleColorChange = () => { setColorMode(colorMode === 'light' ? 'dark' : 'light') }

    return (
        <header sx={{ variant: 'containers.header' }}>
            <h2>Armaan Dhanoa</h2>
            <div
                onClick={(e) => {
                    setColorMode(colorMode === 'light' ? 'dark' : 'light')
                }}>
                {colorMode === 'light' ? <FaSun size={28}/> : <FaMoon size={28}/>}
            </div>

        </header>
    )
}

export default Header;