import { Box, Flex, Input, Icon } from "@chakra-ui/react";
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      paddingX={8}
      paddingY={4}
      boxShadow="md"
      bg="white"
    >
      <Flex align="center">
        <Box>
          <Icon as={AiOutlineSearch} color="gray.500" />
        </Box>
        <Input placeholder="Search..." ml={2} variant="outline" />
      </Flex>

      <Box>
        {/* Your logo component here */}
        {/* Example: <img src="logo.png" alt="Logo" /> */}
      </Box>

      <Flex align="center">
        <Box mr={4}>
          <Icon as={AiOutlineShoppingCart} color="gray.500" boxSize={6} />
        </Box>
        <Box>
          <Icon as={AiOutlineUser} color="gray.500" boxSize={6} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
