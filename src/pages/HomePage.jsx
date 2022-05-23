import React from 'react';
import "../App.css";
import {

  Container,
  Heading,
  Stack,
  Text,
  Button

} from '@chakra-ui/react';





function HomePage() {



  return (
    <>
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Gaming{' '}
            <Text as={'span'} color={'green.400'}>
              Connect
            </Text>
          </Heading>
          <Text color={'black.500'} maxW={'3xl'}>
            The best place to find players and build groups
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'green'}
              bg={'green.400'}
              _hover={{ bg: 'green.500' }}>
              Find a Game
            </Button>
            <Button rounded={'full'} px={6}>
              Create a Group
            </Button>
          </Stack>
        </Stack>
      </Container>


    </>
  );
}

export default HomePage;
