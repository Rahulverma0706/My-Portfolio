'use client'
import {
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
export default function SplitScreen() {
  return (
    <Stack h={'40vh'} direction={{ base: 'column', md: 'row' }} position="relative">
      {/* Video Background */}
      
      <Flex className="video-background">
        <video
          src="https://cdn.pixabay.com/video/2023/05/17/163491-827845629.mp4"
          autoPlay
          muted
          loop
          
          width="100%"
          height="40%"
        />
      </Flex>

      {/* Content */}
      <Flex flex={1}  marginLeft={'5%'} p={8}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '10%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'white',
                zIndex: -1,
              }}
            >
              Hello,
            </Text>
            <br />
            <Text color={'white'} as={'span'} fontSize={'100px'} >
              I'm Rahul Verma
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            "Passionate about creating innovative and interactive digital experiences, leveraging diverse tech stacks to build impactful solutions."
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            {/* Add any buttons or content here */}
          </Stack>
        </Stack>
      </Flex>

      {/* Image Section */}
      {/* <Flex flex={1} justify={'center'} align={'center'}>
        <Image
          // rounded={'full'}
          alt={'Passport Image'}
          objectFit={'cover'}
          margin={'70px'}
          src={'images/DeveloperSitHomePage.svg'}
        />
      </Flex> */}
    </Stack>
  )
}
