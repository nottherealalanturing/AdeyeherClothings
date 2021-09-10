import { Flex, Icon } from "@chakra-ui/react"
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail"
import React from "react"

const Email = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Icon as={HiOutlineMail} color="black" fontSize="200%" m={1} />
    </Flex>
  )
}

export default Email
