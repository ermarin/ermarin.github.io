import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ToggleMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button
        size='xs'
        leftIcon={ colorMode === 'light' ? <MoonIcon /> : <SunIcon /> }
        onClick={toggleColorMode}
      >
        { colorMode === 'light' ? 'Dark' : 'Light' }
      </Button>
    </header>
  )
}

export default ToggleMode;
