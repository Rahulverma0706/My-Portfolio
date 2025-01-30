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
  Link,
  Box
} from '@chakra-ui/react';
import { ReactIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionIcon = motion(Icon);

const Feature = ({ text, icon, iconBg }) => (
  <Stack direction={'row'} align={'center'}>
    <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
      {icon}
    </Flex>
    <Text fontWeight={600}>{text}</Text>
  </Stack>
);

Feature.propTypes = {
  text: PropTypes.string.isRequired,
  iconBg: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

const ProjectCard = ({ title, description, features, imageSrc, link }) => (
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
        rounded={'md'}
      >
        {title}
      </Text>
      <Heading>{title}</Heading>
      <Text color={'gray.500'} fontSize={'lg'}>
        {description}
      </Text>
      <Stack spacing={4} divider={<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />}>
        {features.map((feature, index) => (
          <Feature key={index} icon={feature.icon} iconBg={feature.iconBg} text={feature.text} />
        ))}
      </Stack>
    </Stack>

    <Flex
      position="relative"
      borderRadius="md"
      overflow="hidden"
      boxShadow="lg"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: '2xl',
      }}
      align="center"
      justify="center"
    >
      <Link href={link} isExternal>
        {/* External Link Icon positioned at the top-right corner */}
        <MotionIcon
          as={ExternalLinkIcon}
          position="absolute"
          top={2}
          right={2}
          boxSize={8}
          color="blue.500"
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.3, rotate: 15, color: "red.500" }}
        />
        <Image alt="feature image" src={imageSrc} objectFit="contain" width="100%" height="100%" />
      </Link>
    </Flex>
  </SimpleGrid>
);

const SplitWithImage = () => {
  return (
    <Container maxW={'6xl'} py={12}>
      <ProjectCard
        title="H & M"
        description="Developed a responsive e-commerce website by cloning H&M’s online store. The project focused on front-end design, implementing features like product display, navigation, and a shopping cart."
        features={[
          { icon: <Icon as={ReactIcon} color={'blue.100'} w={5} h={5} />, iconBg: useColorModeValue('blue.500', 'red.900'), text: 'React JS' },
          { icon: <Icon as={FaHtml5} color={'green.500'} w={5} h={5} />, iconBg: useColorModeValue('green.100', 'green.900'), text: 'HTML & CSS' },
          { icon: <Icon as={SiReactrouter} color={'purple.500'} w={5} h={5} />, iconBg: useColorModeValue('purple.100', 'purple.900'), text: 'React-Router-Dom' },
        ]}
        imageSrc="/images/H&MCloneSS.png"
        link="https://rahul-verma-hm.vercel.app/"
      />

      <ProjectCard
        title="Big-Basket"
        description="Developed a fully responsive e-commerce website replicating Big Basket platform. The project emphasizes user-friendly design, implementing features like category browsing, a shopping cart, and secure checkout."
        features={[
          { icon: <Icon as={ReactIcon} color={'yellow.500'} w={5} h={5} />, iconBg: useColorModeValue('yellow.100', 'yellow.900'), text: 'React JS' },
          { icon: <Icon as={SiChakraui} color={'green.500'} w={5} h={5} />, iconBg: useColorModeValue('green.100', 'green.900'), text: 'Chakra UI' },
          { icon: <Icon as={FaCss3Alt} color={'purple.500'} w={5} h={5} />, iconBg: useColorModeValue('purple.100', 'purple.900'), text: 'CSS' },
        ]}
        imageSrc="/images/bigBasketCloneSS.png"
        link="https://big-basket-clone-azure.vercel.app/"
      />
    </Container>
  );
};

export default SplitWithImage;
