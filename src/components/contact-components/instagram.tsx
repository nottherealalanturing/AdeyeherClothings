import { Flex, Icon } from "@chakra-ui/react"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import React from "react"

const Instagram = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Icon as={FaInstagram} color="black" fontSize="200%" m={1} />
    </Flex>
  )
}

export default Instagram
