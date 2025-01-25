{/* Update just the header/hero section in App.jsx */}
{/* Hero Section with Carousel */}
<Box position="relative">
  {/* First part remains the same - carousel and overlay */}
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
      px={4}
      zIndex={3}
    >
      <Box 
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxW="container.md"
        w="full"
      >
        <Box 
          display="inline-block"
          textAlign="center"
          transform="translateX(0)"
        >
          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
            mb={4}
            fontFamily="CustomFont, sans-serif"
            textShadow="2px 2px 4px rgba(0,0,0,0.4)"
            letterSpacing="0.2em"
          >
            TRIXAR
          </Heading>
        </Box>
        <Text 
          fontSize={{ base: "xl", md: "2xl" }} 
          mb={8}
          textShadow="1px 1px 2px rgba(0,0,0,0.4)"
          textAlign="center"
        >
          The Next Generation of Meme Finance
        </Text>

        <Box mb={16}>
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

        {/* Content Sections in Grid */}
        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} 
          spacing={8} 
          w="full" 
          maxW="container.xl"
          px={4}
        >
          {/* Concept Card */}
          <Box 
            bg="whiteAlpha.200" 
            backdropFilter="blur(10px)"
            borderRadius="xl" 
            overflow="hidden"
            border="1px solid"
            borderColor="whiteAlpha.300"
          >
            <Image
              src="/path/to/concept.jpg"
              alt="Concept"
              w="full"
              h="150px"
              objectFit="cover"
            />
            <Box p={6}>
              <Heading size="md" mb={3} color="white">Concept</Heading>
              <Text color="whiteAlpha.900" fontSize="sm">
                Trixar represents the next evolution in meme coins, combining 
                community-driven development with real utility.
              </Text>
            </Box>
          </Box>

          {/* Roadmap Card */}
          <Box 
            bg="whiteAlpha.200" 
            backdropFilter="blur(10px)"
            borderRadius="xl" 
            overflow="hidden"
            border="1px solid"
            borderColor="whiteAlpha.300"
          >
            <Image
              src="/path/to/roadmap.jpg"
              alt="Roadmap"
              w="full"
              h="150px"
              objectFit="cover"
            />
            <Box p={6}>
              <Heading size="md" mb={3} color="white">Roadmap</Heading>
              <Text color="whiteAlpha.900" fontSize="sm">
                Q1 2025: Launch and marketing<br />
                Q2 2025: DEX listings<br />
                Q3 2025: Platform development
              </Text>
            </Box>
          </Box>

          {/* Liquidity Card */}
          <Box 
            bg="whiteAlpha.200" 
            backdropFilter="blur(10px)"
            borderRadius="xl" 
            overflow="hidden"
            border="1px solid"
            borderColor="whiteAlpha.300"
          >
            <Image
              src="/path/to/liquidity.jpg"
              alt="Liquidity"
              w="full"
              h="150px"
              objectFit="cover"
            />
            <Box p={6}>
              <Heading size="md" mb={3} color="white">Liquidity</Heading>
              <Text color="whiteAlpha.900" fontSize="sm">
                95% of tokens in circulation, 5% reserved for development.
                Liquidity locked for 12 months.
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  </Box>
</Box>
