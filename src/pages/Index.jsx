import { Box, Container, Heading, Text, VStack, Button, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box bg="gray.100" p={10} borderRadius="md" textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to E-Shop
        </Heading>
        <Text fontSize="lg" mb={6}>
          Your one-stop shop for the latest electronics.
        </Text>
        <Button as={RouterLink} to="/products" colorScheme="teal" size="lg">
          Shop Now
        </Button>
      </Box>
      <VStack spacing={8} mt={10}>
        <Heading as="h2" size="xl">
          Featured Products
        </Heading>
        <Box display="flex" justifyContent="space-around" flexWrap="wrap">
          <Box bg="white" p={4} borderRadius="md" boxShadow="md" width="300px" textAlign="center">
            <Image src="/images/sample-product1.jpg" alt="Sample Product 1" mb={4} />
            <Text fontSize="lg" fontWeight="bold">
              Sample Product 1
            </Text>
            <Text>$199.99</Text>
          </Box>
          <Box bg="white" p={4} borderRadius="md" boxShadow="md" width="300px" textAlign="center">
            <Image src="/images/sample-product2.jpg" alt="Sample Product 2" mb={4} />
            <Text fontSize="lg" fontWeight="bold">
              Sample Product 2
            </Text>
            <Text>$299.99</Text>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;