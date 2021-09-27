import React, { useEffect, useState } from "react"
import {
  Flex,
  Link as ChakraLink,
  useColorModeValue,
  ButtonGroup,
  IconButton,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
  TableCaption,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Heading,
  Divider,
  HStack,
  Button,
} from "@chakra-ui/react"
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit"
import { BsBoxArrowUpRight } from "@react-icons/all-files/bs/BsBoxArrowUpRight"
import { BsFillTrashFill } from "@react-icons/all-files/bs/BsFillTrashFill"
import CartItem from "../components/cart-item"
import { Link as GatsbyLink } from "gatsby"
import { useDispatch, useSelector } from "react-redux"
import Item from "../components/item"
import { bindActionCreators } from "redux"
import { actionCreators } from "../store/actions"

const imagePathGen = (imgname, color) => {
  switch (imgname) {
    case "AuthorPreserver":
      return `${imgname}${color}.png`
    case "Blessed":
      return `${imgname}${color}.png`
    case "FourthMan":
      return `${imgname}${color}.png`
    case "JTBlue":
      return `${imgname}${color}.png`
    case "JustGrace":
      return `${imgname}${color}.png`
    case "SkyDaddy":
      return `${imgname}${color}.png`
  }
}

export default function Component() {
  const dispatch = useDispatch()
  const { RemoveFromCart, AdjustQuantity } = bindActionCreators(
    actionCreators,
    dispatch
  )
  const [input, setInput] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const cart = useSelector((state: any) => state.shop.cart)
  console.log(cart)

  const onChangeHandler = (e, itemId) => {
    setInput(e)
    AdjustQuantity(itemId, e)
  }

  useEffect(() => {
    let items = 0
    let price = 0
    cart.forEach((item, index) => {
      items += index
      price += parseFloat(item.newPrice) /* * parseFloat(item.qty) */
    })

    setTotalItems(items + 1)
    setTotalPrice(price)
  }, [cart, totalItems, setTotalItems, totalPrice, setTotalPrice])
  return (
    <Flex
      w="100%"
      p="4"
      direction={["column", "column", "row", "row"]}
      alignItems="flex-start"
    >
      <Table
        size="sm"
        w={["40%", "40%", "60%", "70%"]}
        alignSelf="center"
        variant="simple"
        mx="4"
      >
        <Thead>
          <Tr>
            <Th fontWeight="600">ITEM</Th>
            {/* <Th fontWeight="600">QUANTITY</Th> */}
            <Th fontWeight="600">TITLE</Th>
            <Th fontWeight="600">COLOR</Th>
            <Th fontWeight="600" isNumeric>
              PRICE
            </Th>
            {/* <Th fontWeight="600" isNumeric>
              TOTAL
            </Th> */}
            <Th> </Th>
          </Tr>
        </Thead>
        <Tbody>
          {cart.map((item, index) => {
            const color = item.color || "black"

            return (
              <Tr>
                <Td>
                  <CartItem
                    id={item.id}
                    title={item.title}
                    oldPrice={item.oldPrice}
                    newPrice={item.newPrice}
                    imagePath={imagePathGen(item.imagePath, color)}
                    category={item.category}
                    description={item.description}
                    quantity={item.qty}
                  />
                </Td>
                <Td>{item.title}</Td>
                <Td textTransform="capitalize">{item.color}</Td>
                {/* <Td>
                  <NumberInput
                    size="xs"
                    maxW={16}
                    value={input}
                    min={1}
                    onChange={e => {
                      onChangeHandler(e, item.id)
                    }}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td> */}
                <Td isNumeric>₦{item.newPrice}</Td>
                {/* <Td isNumeric>
                  {parseFloat(item.newPrice) * parseFloat(item.qty)}
                </Td> */}
                <Td>
                  <IconButton
                    icon={<BsFillTrashFill />}
                    aria-label="delete item"
                    size="xs"
                    _focus={{}}
                    onClick={() => {
                      RemoveFromCart(item.id)
                    }}
                  />
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
      <Flex
        bg={useColorModeValue("#F9FAFB", "gray.600")}
        p={50}
        w={["100%", "100%", "40%", "30%"]}
        justifyContent="center"
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Flex h="100%" direction="column">
          <Heading m={4}>Order Summary</Heading>
          <Divider orientation="horizontal" />
          <HStack>
            <Text m={4} fontWeight="500">
              Your Orders:
            </Text>
            <Text m={4}>{totalItems} Items</Text>
          </HStack>

          <HStack>
            <Text m={4} fontWeight="600">
              Total:
            </Text>
            <Text m={4}>₦{totalPrice}</Text>
          </HStack>
          <Button>Proceed to Checkout</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
