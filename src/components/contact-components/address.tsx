import { Flex, Icon } from "@chakra-ui/react"
import { SiGooglemaps } from "@react-icons/all-files/si/SiGooglemaps"
import React from "react"

const Address = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Icon as={SiGooglemaps} color="black" fontSize="200%" m={1} />
    </Flex>
  )
}

export default Address
