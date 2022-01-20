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
import { Item } from "../Item"

export const EditItemModal = ({ item }: { item: Item }) => {
  const toast = useToast()
  const [errors, setErrors] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [editedItem, setItem] = useState(item)

  const onButtonSubmit = () => {
    axios
      .patch(
        `${process.env.REACT_APP_SERVER_ADDRESS}/items/${editedItem.identifier}`,
        editedItem
      )
      .then(response => {
        if (response.status === 204)
          toast({
            title: "Item Updated",
            description: "The item you submitted has been updated.",
            status: "success",
            duration: 6000,
            isClosable: true
          })
        window.location.reload()
      })
      .catch(error => {
        toast({
          title: "Item Update Failed",
          description: "The item you submitted has not been updated.",
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
        Edit
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
                value={editedItem.name}
                onChange={event =>
                  setItem({ ...editedItem, name: event.target.value })
                }
                placeholder="Kellogg's Frosted Flakes"
              />
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea
                value={editedItem.description}
                onChange={event =>
                  setItem({ ...editedItem, description: event.target.value })
                }
                placeholder="They're Gr-r-reat!"
              />
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel>Quantity</FormLabel>
              <NumberInput
                defaultValue={10}
                min={1}
                value={editedItem.quantity}
                onChange={quantity =>
                  setItem({ ...editedItem, quantity: parseInt(quantity) })
                }
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>{" "}
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
