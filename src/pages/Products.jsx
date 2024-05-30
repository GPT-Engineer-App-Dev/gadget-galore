import { Box, Container, Heading, SimpleGrid, Text, Image, Link, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Sample Product 1", price: "$199.99", image: "/images/sample-product1.jpg" },
  { id: 2, name: "Sample Product 2", price: "$299.99", image: "/images/sample-product2.jpg" },
  { id: 3, name: "Sample Product 3", price: "$399.99", image: "/images/sample-product3.jpg" },
  { id: 4, name: "Sample Product 4", price: "$499.99", image: "/images/sample-product4.jpg" },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = sampleProducts.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };
  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Products
      </Heading>
      <Box mb={6}>
        <Input
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          size="lg"
        />
      </Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map((product) => (
          <Box key={product.id} bg="white" p={4} borderRadius="md" boxShadow="md" textAlign="center">
            <Image src={product.image} alt={product.name} mb={4} />
            <Text fontSize="lg" fontWeight="bold">
              {product.name}
            </Text>
            <Text>{product.price}</Text>
            <Link as={RouterLink} to={`/products/${product.id}`} color="teal.500" mt={2} display="block">
              View Details
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Products;