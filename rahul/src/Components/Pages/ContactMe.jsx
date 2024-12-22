'use client';
import {
  Container,
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  IconButton,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useState} from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const ConnectMe = () => {
  const toast = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    // Basic validation
    if (!name || !email || !subject || !message) {
      toast({
        title: 'Error',
        description: 'All fields are required.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Success',
          description: data.message,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast({
          title: 'Error',
          description: data.message || 'Failed to send message.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while sending the message.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxW="3xl" py={10}>
      <Heading as="h1" mb={4} textAlign="center">
        Get in Touch
      </Heading>
      <Text mb={6} textAlign="center" color={useColorModeValue('gray.600', 'gray.400')}>
        I am open to new opportunities, collaborations, or just a friendly chat.
        Reach out to me through email or connect via social media!
      </Text>

      <Box mt={10} mb={10} textAlign="center">
        <Text mb={8} fontWeight="bold">
          Connect with me on social media:
        </Text>
        <HStack spacing={8} justify="center">
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/rahul-verma-tech24/"
            icon={<FaLinkedin />}
            size="lg"
            colorScheme="linkedin"
            aria-label="LinkedIn"
            target="_blank"
          />
          <IconButton
            as="a"
            href="https://github.com/Rahulverma0706"
            icon={<FaGithub />}
            size="lg"
            colorScheme="gray"
            aria-label="GitHub"
            target="_blank"
          />
          <IconButton
            as="a"
            href="https://x.com/RahulVe42674160"
            icon={<FaTwitter />}
            size="lg"
            colorScheme="twitter"
            aria-label="Twitter"
            target="_blank"
          />
        </HStack>
      </Box>

      <Box bg={useColorModeValue('gray.50', 'gray.800')} p={6} rounded="md" shadow="md">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              size="lg"
              bg={useColorModeValue('white', 'gray.700')}
            />
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              size="lg"
              bg={useColorModeValue('white', 'gray.700')}
            />
            <Input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              size="lg"
              bg={useColorModeValue('white', 'gray.700')}
            />
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              size="lg"
              bg={useColorModeValue('white', 'gray.700')}
            />
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              width="full"
              isLoading={isSubmitting}
            >
              Send Message
            </Button>
          </VStack>
        </form>
      </Box>

      <Text mt={10} textAlign="center" color={useColorModeValue('gray.500', 'gray.600')}>
        Thank you for visiting my portfolio! © 2025
      </Text>
    </Container>
  );
};

export default ConnectMe;
