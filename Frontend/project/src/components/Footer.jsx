import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  const Logo = (props) => {
    return (
      <svg
        height={32}
        viewBox="0 0 120 28"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
        //   d="M34.87  14.6019 108.19 14.79V20.2H105.19L105.24 11Z"
          fill="currentColor"
        />
        <path
        //   d="M26.48 8.62001C4 23.6849C17.3417 24.4187 15.7125 24.8036 14.06 24.81V24.86Z"
          fill="#2F855A"
        />
      </svg>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function LargeWithLogoCentered() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10} px={20}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-center'} >
              <ListHeader>Red Wine</ListHeader>
              <Link href={'#'}>Cabernet Sauvignon</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Pinot Noir</Link>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  New
                </Tag>
              </Stack>
              <Link href={'#'}>Malbec</Link>
              <Link href={'#'}>Shiraz/Syrah</Link>
              <Link href={'#'}>Merlot</Link>
              <Link href={'#'}>Sangiovese</Link>
              <Link href={'#'}>Tempranillo</Link>
              <Link href={'#'}>Grenache</Link>
              <Link href={'#'}>Pinotage</Link>
              <Link href={'#'}>Nebbiolo</Link>
              <Link href={'#'}>Barbera</Link>
              <Link href={'#'}>Cabernet Franc</Link>
              <Link href={'#'}>Touriga Nacional</Link>
              <Link href={'#'}>Ruby Cabernet</Link>
              <Link href={'#'}>Zinfandel</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>White Wine</ListHeader>
              <Link href={'#'}>Chardonnay</Link>
              <Link href={'#'}>Sauvignon Blanc</Link>
              <Link href={'#'}>Pinot Grigio</Link>
              <Link href={'#'}>Riesling</Link>
              <Link href={'#'}>Torrontes</Link>
              <Link href={'#'}>Vermentino</Link>
              <Link href={'#'}>Viognier</Link>
              <Link href={'#'}>Gruner Veltliner</Link>
              <Link href={'#'}>Carricante</Link>
              <Link href={'#'}>Loureiro</Link>
             
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Regions</ListHeader>
              <Link href={'#'}>Argentina</Link>
              <Link href={'#'}>Australia</Link>
              <Link href={'#'}>Austria</Link>
              <Link href={'#'}>France</Link>
              <Link href={'#'}>Germany</Link>
              <Link href={'#'}>India</Link>
              <Link href={'#'}>Italy</Link>
              <Link href={'#'}>New Zealand</Link>
              <Link href={'#'}>Portugal</Link>
              <Link href={'#'}>South Africa</Link>
              <Link href={'#'}>Spain</Link>
              <Link href={'#'}>USA</Link>
             
            </Stack>
            <Stack align={'flex-start'}>
              {/* <ListHeader href>About Us</ListHeader> */}
              <Link href={'#'}  style={{ fontSize: 'larger' }} >About Us</Link>
              <Link href={'#'}   style={{ fontSize: 'larger' }}>Contact Us</Link>
              <Link href={'#'}  style={{ fontSize: 'larger' }}>Terms And Conditions</Link>
              <Link href={'#'}   style={{ fontSize: 'larger' }}>Privacy Policy</Link>
              <Link href={'#'}   style={{ fontSize: 'larger' }}>Refund / Cancellations</Link>

       
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
            <Logo />
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © Wine Park, 2024. All Rights Reserved
          </Text>
        </Box>
      </Box>
    );
  }
  