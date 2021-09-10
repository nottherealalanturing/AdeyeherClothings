import {
  Box,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import React from "react"

export default function CartItem({
  title,
  oldPrice,
  newPrice,
  imagePath,
  category,
  description,
}) {
  return (
    <Center p={2}>
      <Box
        role={"group"}
        px={6}
        maxW={"500px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          pos={"relative"}
          height={"max-content"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${imagePath})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image rounded={"lg"} objectFit={"contain"} src={imagePath} />
        </Box>
        <Stack align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={800}>
            {title}
          </Heading>

          <Text fontSize={"sm"}>${newPrice}</Text>
        </Stack>
      </Box>
    </Center>
  )
}
