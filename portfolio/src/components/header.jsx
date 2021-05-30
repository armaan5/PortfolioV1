/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useColorMode } from 'theme-ui'
import { FaSun, FaMoon } from 'react-icons/fa'

const Header = () => {
    const [colorMode, setColorMode] = useColorMode()

    return (
        <header sx={{
            variant: 'containers.header', ':hover': {
                cursor: 'pointer',
                color: 'primary',
            }
        }}>
            <div
                onClick={(e) => {
                    setColorMode(colorMode === 'light' ? 'dark' : 'light')
                }}>
                {colorMode === 'light' ? <FaSun size={28} /> : <FaMoon size={28} />}
            </div>

        </header>
    )
}

export default Header;