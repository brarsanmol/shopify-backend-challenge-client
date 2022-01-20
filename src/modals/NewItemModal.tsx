import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  useToast,
  Stack,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea
} from "@chakra-ui/react"
import axios from "axios"
import React, { useState } from "react"
import { FormError } from "../forms/FormError"

export const NewItemModal = () => {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [errors, setErrors] = useState([])
  const [item, setItem] = useState({
    name: "",
    description: "",
    quantity: 1
  })

  const onButtonSubmit = (): void => {
    axios
      .post(`${process.env.REACT_APP_SERVER_ADDRESS}/items/`, item)
      .then(response => {
        if (response.status === 200)
          toast({
            title: "Item Created",
            description: "The item you submitted has been created.",
            status: "success",
            duration: 6000,
            isClosable: true
          })
        window.location.reload()
      })
      .catch(error => {
        toast({
          title: "Item Creation Failed",
          description: "The item you submitted has not been created.",
          status: "error",
          duration: 6000,
          isClosable: true
        })
        setErrors(
          error.response.data.map((error: string, index: number) => (
            <FormError text={error} key={index} />
          ))
        )
      })
  }

  return (
    <>
      <Button colorScheme="green" size="md" onClick={onOpen}>
        +
      </Button>
      <Modal trapFocus={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton onClick={() => setErrors([])} />
          <ModalBody pb={6}>
            <Stack spacing={3}>{errors}</Stack>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                value={item.name}
                onChange={event =>
                  setItem({ ...item, name: event.target.value })
                }
                placeholder="Kellogg's Frosted Flakes"
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea
                value={item.description}
                onChange={event =>
                  setItem({ ...item, description: event.target.value })
                }
                placeholder="They're Gr-r-reat!"
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Quantity</FormLabel>
              <NumberInput
                defaultValue={10}
                min={1}
                value={item.quantity}
                onChange={quantity =>
                  setItem({ ...item, quantity: parseInt(quantity) })
                }
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onButtonSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
