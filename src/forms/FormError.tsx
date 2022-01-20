import {
  Alert,
  AlertIcon,
  AlertDescription,
  CloseButton
} from "@chakra-ui/react"

export const FormError = ({ text }: { text: string }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertDescription>{text}</AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  )
}
