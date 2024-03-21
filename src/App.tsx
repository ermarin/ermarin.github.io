import { Badge, Box, Button, ScaleFade, Grid, Text, useDisclosure } from '@chakra-ui/react';
import ToggleMode from './components/ToggleMode';

function App() {
  const mySkills:string[] = [
    'HTML5', 'CSS3', 'Javascript', 'ES6', 'ReactJs', 'React Hooks', 'React Native', 'Node.js',
    'Fetch API', 'react-hook-form', 'react-datepicker', 'JSX', 'ChakraUI', 'styled-components',
    'Redux', 'redux-saga', 'Expo & EAS', 'EXPRESSJS', 'MONGODB', 'GIT', 'BOOTSTRAP', 'LESS', 'SASS',
    'D3.JS', 'SQLITE'
  ];
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Grid m={3} display={'flex'} justifyContent={'flex-end'}>
        <ToggleMode />
      </Grid>
      <Grid templateColumns={'repeat(1, 1fr)'} paddingInline={10} marginBottom={20}>
        <Box display={'flex'} alignItems={'center'}>
          <Text m={5} fontWeight={800} fontSize={'6xl'}>Hello World!!!</Text>
          <Button size={'xs'} onClick={onToggle}>Click Me...</Button>
        </Box>
        <ScaleFade in={isOpen} initialScale={0.5}>
          <Text fontSize={'5xl'}>My Name is Erick Marin...</Text>
          <Text fontSize={'3xl'}>I'm frontEnd Developer with more than 10+ years of experiencie using technologies such as HTML5, CSS3 and Javascript.</Text>
          <Box display={'flex'} alignItems={'center'} width={'100%'} overflow='hidden'>
            <Box>
              {mySkills?.map((item, key) => {
                return (
                  <Badge
                    key={key}
                    colorScheme={'teal'}
                    p={2}
                    m={2}
                    borderRadius='full'
                  >
                    {item}
                  </Badge>
                )
              })}
            </Box>
          </Box>
        </ScaleFade>
      </Grid>
    </>
  )
}

export default App
