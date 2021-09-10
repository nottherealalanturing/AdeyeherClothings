import { Flex, Icon } from "@chakra-ui/react"
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp"
import React from "react"

const Address = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Icon as={FaWhatsapp} color="black" fontSize="200%" m={1} />
    </Flex>
  )
}

export default Address
