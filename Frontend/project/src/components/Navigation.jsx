// import React, { useState } from 'react';
// import {
//   Box,
//   Flex,
//   Text,
//   IconButton,
//   Stack,
//   Collapse,
//   Icon,
//   Link,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   useColorModeValue,
//   useBreakpointValue,
//   useDisclosure,
// } from '@chakra-ui/react';
// import {
//   HamburgerIcon,
//   CloseIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
// } from '@chakra-ui/icons';

// export default function WithSubnavigation() {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Box>
//       <Flex
//         bg={useColorModeValue('white', 'gray.800')}
//         color={useColorModeValue('gray.600', 'white')}
//         minH={'60px'}
//         py={{ base: 2 }}
//         px={{ base: 4 }}
//         borderBottom={1}
//         borderStyle={'solid'}
//         borderColor={useColorModeValue('gray.200', 'gray.900')}
//         align={'center'}>
//         <Flex
//           flex={{ base: 1, md: 'auto' }}
//           ml={{ base: -2 }}
//           display={{ base: 'flex', md: 'none' }}>
//           <IconButton
//             onClick={onToggle}
//             icon={
//               isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
//             }
//             variant={'ghost'}
//             aria-label={'Toggle Navigation'}
//           />
//         </Flex>
//         {/* Removed logo part */}
//         <Flex flex={{ base: 1 }} justify={'center'}>
//           {/* Centered items */}
//           <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
//             <DesktopNav />
//           </Flex>
//         </Flex>
//       </Flex>

//       <Collapse in={isOpen} animateOpacity>
//         <MobileNav />
//       </Collapse>
//     </Box>
//   );
// }
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link as ChakraLink,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      className={isSticky ? 'sticky' : ''}
      bg={useColorModeValue('white', 'gray.800')}
      style={{ position: isSticky ? 'sticky' : 'static', top: '0', zIndex: '1000' }}>
      <Flex
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
     
        <Flex flex={{ base: 1 }} justify={'center'}>
          
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}




const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Stack direction={'row'} spacing={4} align="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          {navItem.children ? (
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              <PopoverContent
                border={1}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                boxShadow={'xl'}
                bg={useColorModeValue('white', 'gray.800')}
                p={4}
                rounded={'xl'}
                minW={navItem.children.length === 1 ? 'sm' : 'lg'}
                _focus={{ outline: 'none' }}>
                <Stack direction="row">
                  {navItem.children.map((child) => (
                    <Box key={child.label} w={navItem.children.length === 1 ? '100%' : '33%'}>
                      <DesktopSubNav heading={child.label} items={child.items} />
                    </Box>
                  ))}
                </Stack>
              </PopoverContent>
            </Popover>
          ) : (
            <Link
              p={2}
              href={navItem.href ?? '#'}
              fontSize={'sm'}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
              }}>
              {navItem.label}
            </Link>
          )}
        </Box>
      ))}
      {/* for Beer */}
      <Link
        p={2}
        href="#"
        fontSize={'sm'}
        fontWeight={500}
        color={linkColor}
        _hover={{
          textDecoration: 'none',
          color: linkHoverColor,
        }}>
        Beer
      </Link>

      <Link
        p={2}
        to="/newwines"
        fontSize={'sm'}
        fontWeight={500}
        color={linkColor}
        _hover={{
          textDecoration: 'none',
          color: linkHoverColor,
        }}>
        New Wines
      </Link>
      <Link
        p={2}
        to="/new"
        fontSize={'sm'}
        fontWeight={500}
        color={linkColor}
        _hover={{
          textDecoration: 'none',
          color: linkHoverColor,
        }}>
        Limited Specials
      </Link>
      <Link
        p={2}
        href="#"
        fontSize={'sm'}
        fontWeight={500}
        color={linkColor}
        _hover={{
          textDecoration: 'none',
          color: linkHoverColor,
        }}>
        Wine Accessories
      </Link>
      <Link
        p={2}
        href="#"
        fontSize={'sm'}
        fontWeight={500}
        color={linkColor}
        _hover={{
          textDecoration: 'none',
          color: linkHoverColor,
        }}>
        Blog
      </Link>
    </Stack>
  );
};

const DesktopSubNav = ({ heading, items }) => {
  return (
    <Box>
      <Text fontWeight={500} mb={1}>{heading}</Text>
      <Stack spacing={1}>
        {items.map((item) => (
          <Link key={item.label} href={item.href} fontSize="xs">
            {item.label}
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Stack spacing={4} onClick={children && handleToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};



const NAV_ITEMS = [
  {
    label: 'All Wines',
    children: [
      {
        label: 'Red Wines ',
        items: [
          { label: 'Cabernet Sauvignon', href: '#' },
          { label: 'Pinot Noir', href: '#' },
          { label: 'Malbec', href: '#' },
          { label: 'Shiraz/Syrah', href: '#' },
          { label: 'Merlot', href: '#' },
          { label: 'Sangiovese', href: '#' },
          { label: 'Tempranillo', href: '#' },
          { label: 'Grenache', href: '#' },
          { label: 'Pinotage', href: '#' },
          { label: 'Nebbiolo', href: '#' },
          { label: 'Barbera', href: '#' },
          { label: 'Cabernet Franc', href: '#' },
          { label: 'Touriga Nacional', href: '#' },
          { label: 'Ruby Cabernet', href: '#' },
        ]
      },
      {
        label: 'White Wine',
        items: [
          { label: 'Chardonnay', href: '#' },
          { label: 'Pinot Noir', href: '#' },
          { label: 'Sauvignon Blanc', href: '#' },
          { label: 'Chenin Blanc', href: '#' },
          { label: 'Pinot Grigio', href: '#' },
          { label: 'Riesling', href: '#' },
          { label: 'Torrontes', href: '#' },
          { label: 'Vermentino', href: '#' },
          { label: 'Viognier', href: '#' },
          { label: 'Gruner Veltliner', href: '#' },
          { label: 'Carricante', href: '#' },
          { label: 'Loureiro', href: '#' },
        ]
      },
      {
        label: 'Sparkling',
        items: [
          { label: 'Champagne', href: '#' },
          { label: 'Prosecco', href: '#' },
          { label: 'Rose', href: '#' },
          { label: 'Sweet Wine', href: '#' },
          { label: 'Port Wine', href: '#' },
          { label: 'Mixed Cases', href: '#' },
        ]
      },
    ],
  },
  {
    label: 'Gift Wines',
    children: [
      {
        label: 'Luxury Selection',
        items: [
          { label: 'All Gift Hampers', href: '#' },
          { label: 'Valentine Day Hampers', href: '#' },
          { label: 'Gifts By Occasion', href: '#' },
          { label: 'Birthday', href: '#' },
          { label: 'Anniversary', href: '#' },
          { label: 'Thank You', href: '#' },
          { label: 'Popular Gifts', href: '#' },
          { label: 'For Him', href: '#' },
          { label: 'For Her', href: '#' },
          { label: 'For Connoisseur', href: '#' },
        ]
      },
      {
        label: 'Shop By Price',
        items: [
          { label: 'Under ₹ 4000', href: '#' },
          { label: 'Under ₹ 7000', href: '#' },
          { label: 'Under ₹ 10000', href: '#' },
          { label: 'Above ₹ 10000', href: '#' },
          { label: 'Great Bottles To Gift', href: '#' },
          { label: 'Champagne/Sparkling', href: '#' },
          { label: 'White', href: '#' },
          { label: 'Red', href: '#' },
        ]
      },
      {
        label: 'Gift Hampers',
        items: [
          { label: 'Gift Hampers', href: '#' },
          { label: 'Gift Vouchers', href: '#' },
          { label: 'Corporate Gifts', href: '#' },
        ]
      },
    ],
  },
  {
    label: 'Regions',
    children: [
      {
        label: '',
        items: [
          { label: 'Argentina', href: '#' },
          { label: 'Australia', href: '#' },
          { label: 'Austria', href: '#' },
          { label: 'Germany', href: '#' },
          { label: 'India', href: '#' },
        
        ]
      },
      {
        label: '',
        items: [
          { label: 'New Zealand', href: '#' },
          { label: 'Portugal', href: '#' },
          { label: 'South Africa', href: '#' },
          { label: 'Spain', href: '#' },
          { label: 'USA', href: '#' },
    
        ]
      },
      {
        label: 'Italy',
        items: [
          { label: 'Tuscany', href: '#' },
          { label: 'Piedmont', href: '#' },
          { label: 'Veneto', href: '#' },
          { label: 'Alto Adige', href: '#' },
          { label: 'Sicily', href: '#' },
          { label: 'Friuli', href: '#' },
          
    
        ]
      },
      {
        label: 'France',
        items: [
          { label: 'Champagne', href: '#' },
          { label: 'Bordeaux', href: '#' },
          { label: 'Burgundy', href: '#' },
          { label: 'Rhone', href: '#' },
          { label: 'Loire Valley', href: '#' },
         
        ]
      },
      
    ]
  }
  ,
  {
    label: 'Discover Wine',
    children: [
      {
        label: 'Wines',
        items: [
          { label: 'Fruity Reds', href: '#' },
          { label: 'Wines Under 3K', href: '#' },
          { label: 'Bordeaux Wines', href: '#' },
          { label: 'Burgundy Wines', href: '#' },
          { label: 'Best Sellers', href: '#' },
          { label: 'Vivino 4.0+', href: '#' },
          { label: 'Organic Wines', href: '#' },
          { label: 'Low Sugar Wine', href: '#' },
          { label: 'Wine Park Selections', href: '#' },
        ]
      },
    ]
  },
  {
    label: 'Brochure',
    children: [
      {
        label: '',
        items: [
          { label: 'Bangalore Brochure', href: '#' },
          { label: 'Delhi Brochure', href: '#' },
          { label: 'Goa Brochure', href: '#' },
          { label: 'Maharashtra Brochure', href: '#' },
        
        ]
      },
    ]
  },
];
