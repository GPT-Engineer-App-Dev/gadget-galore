import { Box, Container, Heading, SimpleGrid, Text, Image, Link, Input, Select, VStack, HStack, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Sample Product 1", price: 199.99, image: "/images/sample-product1.jpg", category: "Electronics", brand: "Brand A" },
  { id: 2, name: "Sample Product 2", price: 299.99, image: "/images/sample-product2.jpg", category: "Electronics", brand: "Brand B" },
  { id: 3, name: "Sample Product 3", price: 399.99, image: "/images/sample-product3.jpg", category: "Home Appliances", brand: "Brand A" },
  { id: 4, name: "Sample Product 4", price: 499.99, image: "/images/sample-product4.jpg", category: "Home Appliances", brand: "Brand C" },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    filterProducts(value, category, brand, priceRange);
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(value);
    filterProducts(searchTerm, value, brand, priceRange);
  };

  const handleBrandChange = (event) => {
    const value = event.target.value;
    setBrand(value);
    filterProducts(searchTerm, category, value, priceRange);
  };

  const handlePriceRangeChange = (event) => {
    const value = event.target.value;
    setPriceRange(value);
    filterProducts(searchTerm, category, brand, value);
  };

  const filterProducts = (searchTerm, category, brand, priceRange) => {
    let filtered = sampleProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (brand) {
      filtered = filtered.filter((product) => product.brand === brand);
    }

    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      filtered = filtered.filter((product) => product.price >= min && product.price <= max);
    }

    setFilteredProducts(filtered);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Products
      </Heading>
      <VStack spacing={4} mb={6} align="stretch">
        <Input
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          size="lg"
        />
        <HStack spacing={4}>
          <Select placeholder="Select category" value={category} onChange={handleCategoryChange}>
            <option value="Electronics">Electronics</option>
            <option value="Home Appliances">Home Appliances</option>
          </Select>
          <Select placeholder="Select brand" value={brand} onChange={handleBrandChange}>
            <option value="Brand A">Brand A</option>
            <option value="Brand B">Brand B</option>
            <option value="Brand C">Brand C</option>
          </Select>
          <Select placeholder="Select price range" value={priceRange} onChange={handlePriceRangeChange}>
            <option value="0-200">0 - 200</option>
            <option value="200-400">200 - 400</option>
            <option value="400-600">400 - 600</option>
          </Select>
        </HStack>
      </VStack>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map((product) => (
          <Box key={product.id} bg="white" p={4} borderRadius="md" boxShadow="md" textAlign="center">
            <Image src={product.image} alt={product.name} mb={4} />
            <Text fontSize="lg" fontWeight="bold">
              {product.name}
            </Text>
            <Text>${product.price.toFixed(2)}</Text>
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