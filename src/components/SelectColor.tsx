import { Stack, Box, Circle, HStack } from "@chakra-ui/layout"
import { RadioGroup, Radio, useRadio, useRadioGroup } from "@chakra-ui/react"
import React from "react"

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Circle as="label">
      <input {...input} />
      <Circle
        {...checkbox}
        cursor="pointer"
        bg={props.color}
        /* borderWidth="1px"
          borderRadius="md" */
        boxShadow="md"
        /*  _checked={{
            bg: "teal.600",
            color: "white",
            borderColor: "teal.600",
          }} */
        _focus={{
          boxShadow: "outline",
        }}
        p={2}
      >
        {props.children}
      </Circle>
    </Circle>
  )
}

const ag = val => {
  console.log(val + "ass")
}

const SelectColor = ({ setShirtColor }) => {
  const options = ["black", "red", "gray", "white", "brown"]

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "colors",
    defaultValue: "black",
    onChange: setShirtColor,
  })
  const group = getRootProps()
  return (
    <HStack
      {...group}
      border="1px solid #eaeaea"
      p="2"
      w="fit-content"
      borderRadius="10px"
    >
      {options.map(value => {
        const radio = getRadioProps({ value })
        return <RadioCard key={value} color={value} {...radio}></RadioCard>
      })}
    </HStack>
  )
}

export default SelectColor
