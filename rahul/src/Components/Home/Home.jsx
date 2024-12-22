'use client'
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function SplitScreen() {
  return (
    <Stack minH={'60vh'} direction={{ base: 'column', md: 'row' }}>
              <Flex flex={1}>
                <Image rounded={'full'}
                  alt={'Login Image'}
                  objectFit={'cover'}
                  margin={'auto'}
                  src={
                    '../public/images/passportSizePhoto.png'
                  }
                />
              </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Hello, 
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              I am Rahul Verma
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Passionate, to develope greate and interactive digital products, with the help of different kind tech stacks.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              About me
            </Button>
            <Button rounded={'full'}>Projects</Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  )
}