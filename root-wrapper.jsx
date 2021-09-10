import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme"
import Layout from "./src/components/layout"
import "@fontsource/montserrat"
import "@fontsource/overlock"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "@fontsource/roboto"

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout location={element.props.location}>{element}</Layout>
    </ChakraProvider>
  )
}
