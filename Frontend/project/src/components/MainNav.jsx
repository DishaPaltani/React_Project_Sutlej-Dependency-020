import { Box, Flex, Input, Icon, Text, Grid, GridItem, Button, Select } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("");

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://react-project-sutlej-dependency-020-3.onrender.com/catalog?q=${searchQuery}`);
      const data = await response.json();
      console.log("Search Results:", data);
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (order) => {
    setSortOrder(order);
    if (order === "highToLow") {
      setSearchResults([...searchResults].sort((a, b) => b.price - a.price));
    } else if (order === "lowToHigh") {
      setSearchResults([...searchResults].sort((a, b) => a.price - b.price));
    }
  };

  const handleAddToCart = (productId) => {
    // Implement your logic to add the product to the cart
    console.log(`Product with ID ${productId} added to cart`);
  };

  return (
    <Flex>
      <Box flex="1" padding={4}>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          paddingY={4}
          boxShadow="md"
          bg="white"
        >
          <Flex align="center">
            <Box>
              <Icon as={AiOutlineSearch} color="gray.500" />
            </Box>
            <Input
              placeholder="Search..."
              ml={2}
              variant="outline"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </Flex>
        </Flex>

        {loading && <Text>Loading...</Text>}
        {searchResults.length > 0 && (
          <Flex>
            <Box
              width="200px"
              padding={4}
              borderRight="1px solid"
              borderColor="gray.200"
            >
              <Select
                placeholder="Sort by price"
                marginBottom={4}
                onChange={(e) => handleSort(e.target.value)}
                value={sortOrder}
              >
                <option value="highToLow">Price: High to Low</option>
                <option value="lowToHigh">Price: Low to High</option>
              </Select>
            </Box>

            <Grid
              templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
              gap={4}
              padding={4}
              marginTop={4}
            >
              {searchResults.map((result, index) => (
                <GridItem key={index} border="1px solid" borderColor="gray.200" borderRadius="md" padding={4}>
                  <img src={result.image_url} alt={result.title} />
                  <Text fontWeight="bold" mt={2}>{result.title}</Text>
                  <Text fontSize="sm" color="gray.600" noOfLines={2} isTruncated>{result.description}</Text>
                  <Text fontSize="lg" mt={2}>Price: ${result.price}</Text>
                  <Button colorScheme="blue" mt={4} onClick={() => handleAddToCart(result.id)}>Add to Cart</Button>
                </GridItem>
              ))}
            </Grid>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
