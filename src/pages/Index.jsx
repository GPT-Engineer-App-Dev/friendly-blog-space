import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4} px={8}>
        <Flex align="center" justify="space-between">
          <Heading as="h1" size="lg">My Blog</Heading>
          <HStack spacing={4}>
            <Link href="#home" color="white">Home</Link>
            <Link href="#about" color="white">About</Link>
            <Link href="#contact" color="white">Contact</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.md" py={8}>
        <VStack spacing={8} align="start">
          <Box>
            <Heading as="h2" size="xl">Welcome to My Blog</Heading>
            <Text mt={4}>This is a place where I share my thoughts and experiences on various topics. Stay tuned for more updates!</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg">Latest Posts</Heading>
            <VStack spacing={4} mt={4} align="start">
              <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" w="100%">
                <Heading as="h4" size="md">Post Title 1</Heading>
                <Text mt={2}>This is a brief summary of the first post...</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" w="100%">
                <Heading as="h4" size="md">Post Title 2</Heading>
                <Text mt={2}>This is a brief summary of the second post...</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={4} px={8} mt={8}>
        <Flex align="center" justify="space-between">
          <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <FaLinkedin />
            </Link>
            <Link href="https://github.com" isExternal>
              <FaGithub />
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;