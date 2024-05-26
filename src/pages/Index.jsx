import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" padding={4}>
        <Box>
          <Heading size="md">My Blog</Heading>
        </Box>
        <Spacer />
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" color="white">Home</Link>
          <Link as={RouterLink} to="/about" color="white">About</Link>
          <Link as={RouterLink} to="/contact" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content Area */}
      <Container maxW="container.md" mt={10}>
        <Button as={RouterLink} to="/add-post" colorScheme="blue" mb={4}>
          Add New Post
        </Button>
        <VStack spacing={8}>
          {posts.map((post, index) => (
            <Box as="article" p={5} shadow="md" borderWidth="1px" key={index}>
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
            </Box>
          ))}
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={10}>
        <Container maxW="container.md">
          <Flex justify="space-between" align="center">
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
        </Container>
      </Box>
    </Box>
  );
};

export default Index;