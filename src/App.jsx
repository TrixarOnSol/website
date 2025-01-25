import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  HStack,
  IconButton,
  useClipboard,
  Link,
  Image,
  useToast,
} from '@chakra-ui/react'
import { CopyIcon, CheckIcon } from '@chakra-ui/icons'
import { FaTwitter, FaTelegram, FaChartBar } from 'react-icons/fa'

function App() {
  const CONTRACT_ADDRESS = "your_contract_address_here"
  const { hasCopied, onCopy } = useClipboard(CONTRACT_ADDRESS)
  const toast = useToast()

  const images = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
  ]

  const [[activeIndex, nextIndex], setIndexes] = useState([0, 1])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndexes(prev => {
        const newActive = (prev[0] + 1) % images.length
        const newNext = (newActive + 1) % images.length
        return [newActive, newNext]
      })
    }, 5000)

    return () => clearInterval(intervalId)
  }, [images.length])

  return (
    <Box>
      {/* Transparent Top Nav */}
      <Box
        position="fixed"
        w="full"
        zIndex={100}
        bg="blackAlpha.300"
        backdropFilter="blur(10px)"
      >
        <Container maxW="container.xl">
          <Flex py={4} justifyContent="flex-end">
            <HStack spacing={4}>
              <IconButton
                icon={<FaTwitter />}
                aria-label="Twitter"
                variant="ghost"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
              />
              <IconButton
                icon={<FaTelegram />}
                aria-label="Telegram"
                variant="ghost"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
              />
              <IconButton
                icon={<FaChartBar />}
                aria-label="Chart"
                variant="ghost"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
              />
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section with Carousel */}
      <Box position="relative" h="100vh" overflow="hidden">
        {images.map((image, idx) => (
          <Box
            key={idx}
            position="absolute"
            inset={0}
            opacity={idx === activeIndex ? 1 : 0}
            transition="opacity 2s ease-in-out"
            zIndex={1}
          >
            <Image
              src={image}
              alt={`Slide ${idx + 1}`}
              objectFit="cover"
              w="full"
              h="full"
            />
          </Box>
        ))}

        {/* Vignette Overlay */}
        <Box
          position="absolute"
          inset={0}
          bg="linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7))"
          zIndex={2}
        />

        {/* Hero Content */}
        <Flex
          position="relative"
          direction="column"
          align="center"
          justify="center"
          h="full"
          color="white"
          textAlign="center"
          px={4}
          zIndex={3}
        >
          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
            mb={4}
            fontFamily="'Trixar', sans-serif"
            textShadow="2px 2px 4px rgba(0,0,0,0.4)"
          >
            TRIXAR
          </Heading>
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            mb={8}
            textShadow="1px 1px 2px rgba(0,0,0,0.4)"
          >
            The Next Generation of Meme Finance
          </Text>

          <Box>
            <Button
              mb={4}
              onClick={() => {
                onCopy()
                toast({
                  title: "Address copied!",
                  status: "success",
                  duration: 2000,
                })
              }}
              leftIcon={hasCopied ? <CheckIcon /> : <CopyIcon />}
              colorScheme="purple"
              size="lg"
            >
              {CONTRACT_ADDRESS.slice(0, 6) + "..." + CONTRACT_ADDRESS.slice(-4)}
            </Button>

            <HStack spacing={4} justify="center" wrap="wrap">
              <Link href="https://dexscreener.com" isExternal>
                <Button colorScheme="blue" size="lg">DexScreener</Button>
              </Link>
              <Link href="https://twitter.com" isExternal>
                <Button colorScheme="twitter" leftIcon={<FaTwitter />} size="lg">
                  Twitter
                </Button>
              </Link>
              <Link href="https://telegram.org" isExternal>
                <Button colorScheme="telegram" leftIcon={<FaTelegram />} size="lg">
                  Telegram
                </Button>
              </Link>
            </HStack>
          </Box>
        </Flex>
      </Box>

      {/* Content Sections */}
      <Container maxW="container.xl" py={16}>
        {/* Concept Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          mb={16}
          align="center"
          gap={8}
        >
          <Box flex="1" maxW={{ base: "full", md: "400px" }}>
            <Image
              src="/path/to/concept.jpg"
              alt="Concept"
              borderRadius="xl"
              w="full"
              h="300px"
              objectFit="cover"
              shadow="xl"
            />
          </Box>
          <Box flex="1">
            <Heading mb={4} color="purple.500">Concept</Heading>
            <Text fontSize="lg" color="gray.700">
              Trixar represents the next evolution in meme coins, combining
              community-driven development with real utility. Our vision is to
              create not just another token, but a movement that redefines what's
              possible in the world of cryptocurrency.
            </Text>
          </Box>
        </Flex>

        {/* Roadmap Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          mb={16}
          align="center"
          gap={8}
        >
          <Box flex="1" maxW={{ base: "full", md: "400px" }}>
            <Image
              src="/path/to/roadmap.jpg"
              alt="Roadmap"
              borderRadius="xl"
              w="full"
              h="300px"
              objectFit="cover"
              shadow="xl"
            />
          </Box>
          <Box flex="1">
            <Heading mb={4} color="purple.500">Roadmap</Heading>
            <Text fontSize="lg" color="gray.700">
              Q1 2025: Launch and initial marketing push<br />
              Q2 2025: DEX listings and partnerships<br />
              Q3 2025: Platform development and ecosystem expansion<br />
              Q4 2025: Community governance implementation
            </Text>
          </Box>
        </Flex>

        {/* Liquidity Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={8}
        >
          <Box flex="1" maxW={{ base: "full", md: "400px" }}>
            <Image
              src="/path/to/liquidity.jpg"
              alt="Liquidity"
              borderRadius="xl"
              w="full"
              h="300px"
              objectFit="cover"
              shadow="xl"
            />
          </Box>
          <Box flex="1">
            <Heading mb={4} color="purple.500">Liquidity</Heading>
            <Text fontSize="lg" color="gray.700">
              95% of tokens are in circulation with 5% reserved for development.
              Liquidity locked for 12 months to ensure project stability and
              investor confidence. Our tokenomics are designed for long-term
              sustainability and growth.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default App
