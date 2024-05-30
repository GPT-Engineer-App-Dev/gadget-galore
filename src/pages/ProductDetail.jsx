import { Box, Container, Heading, Text, Image, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Sample Product 1", price: "$199.99", description: "Description for Sample Product 1", image: "/images/sample-product1.jpg" },
  { id: 2, name: "Sample Product 2", price: "$299.99", description: "Description for Sample Product 2", image: "/images/sample-product2.jpg" },
  { id: 3, name: "Sample Product 3", price: "$399.99", description: "Description for Sample Product 3", image: "/images/sample-product3.jpg" },
  { id: 4, name: "Sample Product 4", price: "$499.99", description: "Description for Sample Product 4", image: "/images/sample-product4.jpg" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Container maxW="container.xl" p={4}>
        <Heading as="h1" size="xl" mb={6}>
          Product Not Found
        </Heading>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={6}>
        <Image src={product.image} alt={product.name} boxSize="300px" objectFit="cover" />
        <Heading as="h1" size="xl">
          {product.name}
        </Heading>
        <Text fontSize="2xl" color="teal.500">
          {product.price}
        </Text>
        <Text>{product.description}</Text>
      </VStack>
    </Container>
  );
};

export default ProductDetail;