import React from 'react';
import { Box, Flex, Icon, Link } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="#fecc25" py="4">
      <Flex justify="center" align="center">
        <Link href="#" mx="4">
          <Icon as={FaFacebook} boxSize={10} color="#222222#222" />
        </Link>
        <Link href="#" mx="4">
          <Icon as={FaInstagram} boxSize={10} color="#222222#222" />
        </Link>
        <Link href="#" mx="4">
          <Icon as={FaTwitter} boxSize={10} color="#222222#222" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
