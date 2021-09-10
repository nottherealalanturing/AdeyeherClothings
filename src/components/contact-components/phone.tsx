import { Flex, Icon } from "@chakra-ui/react"
import { BsPhone } from "@react-icons/all-files/bs/BsPhone"
import React from "react"

const Phone = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Icon as={BsPhone} color="black" fontSize="200%" m={1} />
    </Flex>
  )
}

export default Phone
