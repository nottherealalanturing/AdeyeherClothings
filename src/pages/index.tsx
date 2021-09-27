import {
  Box,
  Container,
  Divider,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import React from "react"
import { useSelector } from "react-redux"
import Footer from "../components/footer"
import Item from "../components/item"

function Shop() {
  const products = useSelector((state: any) => state.shop.products)

  return (
    <>
      <Container maxW="container.xl" h="100vh">
        <Flex
          justifyContent="center"
          alignContent="center"
          px={[2, 8, 16, 32]}
          my={4}
        >
          <Text
            as="a"
            href="/"
            fontSize="md"
            color="gray.900"
            fontFamily="overlock"
            fontWeight="700"
          >
            OUR PRODUCTS
          </Text>
        </Flex>
        <Divider />
        <Box mt={4}>
          <SimpleGrid
            minChildWidth="300px"
            align="center"
            justify="center"
            spacing="40px"
            mb={32}
          >
            {products.map((product, index) => (
              <Item
                id={product.id}
                title={product.title}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                imagePath={product.imagePath}
                category={product.category}
                description={product.description}
                color={product.color}
                key={index}
              />
            ))}
          </SimpleGrid>
          <Footer />
        </Box>
      </Container>
    </>
  )
}
export default Shop
