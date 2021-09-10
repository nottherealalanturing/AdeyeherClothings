import { Flex, Icon } from "@chakra-ui/react"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import React from "react"

const Twiiter = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Icon as={FaTwitter} color="black" fontSize="200%" m={1} />
    </Flex>
  )
}

export default Twiiter
