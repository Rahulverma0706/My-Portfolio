'use client';
import { SiReactrouter, SiChakraui } from 'react-icons/si';
import { FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import PropTypes from 'prop-types';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactIcon } from '@chakra-ui/icons';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

Feature.propTypes = {
  text: PropTypes.string.isRequired,
  iconBg: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

const SplitWithImage = () => {
  return (
    <Container maxW={'6xl'} py={12}>
      {/* H&M Section */}
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            H & M
          </Text>
          <Heading>Fashion & Branding</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Developed a responsive e-commerce website by cloning H&M’s online store. The project focused on front-end design, implementing features like product display, navigation, and a shopping cart. Utilized HTML, CSS, and JavaScript for dynamic content and user interaction, ensuring a smooth and user-friendly experience across devices.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
              icon={<Icon as={ReactIcon} color={'blue.100'} w={5} h={5} />}
              iconBg={useColorModeValue('blue.500', 'red.900')}
              text={'React JS'}
            />
            <Feature
              icon={<Icon as={FaHtml5} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'HTML & CSS'}
            />
            <Feature
              icon={<Icon as={SiReactrouter} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'React-Router-Dom'}
            />
          </Stack>
        </Stack>
        <Flex
          borderRadius="md"
          overflow="hidden"
          boxShadow="lg"
          transition="transform 0.3s, box-shadow 0.3s"
          _hover={{
            transform: 'scale(1.05)',
            boxShadow: '2xl',
          }}
          align="center"
          justify="center">
          <Image
            alt={'feature image'}
            src={'/images/H&MCloneSS.png'}
            objectFit={'contain'}
            width="100%"
            height="100%"
          />
        </Flex>
      </SimpleGrid>

      {/* Big-Basket Section */}
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} mt={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Big-Basket
          </Text>
          <Heading>Grocery and Beverages</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Developed a fully responsive e-commerce website replicating Big Basket platform. The project emphasizes user-friendly design, implementing features like category browsing, a shopping cart, and secure checkout. Leveraged React.js and Chakra UI for front-end development and ensured seamless functionality across all devices.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
              icon={<Icon as={ReactIcon} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'React JS'}
            />
            <Feature
              icon={<Icon as={SiChakraui} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Chakra UI'}
            />
            <Feature
              icon={<Icon as={FaCss3Alt} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'CSS'}
            />
          </Stack>
        </Stack>
        <Flex
          borderRadius="md"
          overflow="hidden"
          boxShadow="lg"
          transition="transform 0.3s, box-shadow 0.3s"
          _hover={{
            transform: 'scale(1.05)',
            boxShadow: '2xl',
          }}
          align="center"
          justify="center">
          <Image
            alt={'feature image'}
            src={'/images/bigBasketCloneSS.png'}
            objectFit={'contain'}
            width="100%"
            height="100%"
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default SplitWithImage;
