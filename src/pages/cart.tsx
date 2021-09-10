import {
  Center,
  Flex,
  Heading,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"
import { FiClipboard } from "@react-icons/all-files/fi/FiClipboard"
import { FiDollarSign } from "@react-icons/all-files/fi/FiDollarSign"
import { FiUser } from "@react-icons/all-files/fi/FiUser"
import { Step, Steps, useSteps } from "chakra-ui-steps"
import React from "react"
import { TotalPrice } from "../components/TotalPrice"
import { confirmOrder } from "../components/confirmOrder"
import { ContactAddress } from "../components/ContactAddress"
import ResetPrompt from "../components/ResetPrompt"
import StepButtons from "../components/StepButtons"

const steps = [
  { label: "Your Order", icon: FiClipboard, content: confirmOrder },
  { label: "Shipping Address", icon: FiUser, content: ContactAddress },
  { label: "Total", icon: FiDollarSign, content: TotalPrice },
]
const Checkout = () => {
  const orient = useBreakpointValue({
    base: "vertical",
    sm: "vertical",
    md: "horizontal",
    lg: "horizontal",
  })
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })

  {
    /* <Flex justifyContent="center" w="100vw" my={8}>
    <Center w="50%">
      <Steps activeStep={activeStep} orientation={"vertical"}>
        {steps.map(({ label, content, icon }) => (
          <Step label={label} key={label} icon={icon}>
            {content}
          </Step>
        ))}
      </Steps>
      {activeStep === 3 ? (
        <ResetPrompt onReset={reset} />
      ) : (
        <StepButtons
          {...{ nextStep, prevStep }}
          prevDisabled={activeStep === 0}
        />
      )}
    </Center>
  </Flex> */
  }
  return (
    <Flex w="100%" justifyContent="center" alignItems="center" mt="10%">
      <Heading>Under Contruction!</Heading>
    </Flex>
  )
}

export default Checkout
