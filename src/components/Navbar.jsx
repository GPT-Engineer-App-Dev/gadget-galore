import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" p={4} color="white">
      <Flex maxW="1200px" mx="auto" align="center">
        <Text fontSize="xl" fontWeight="bold">
          E-Shop
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" p={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/products" p={2}>
            Products
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;