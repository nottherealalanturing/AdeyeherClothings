import { Flex, Icon } from "@chakra-ui/react"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import React from "react"

const Facebook = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Icon as={FaFacebook} color="black" fontSize="200%" m={1} />
    </Flex>
  )
}

export default Facebook
