import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Spacer
} from "@chakra-ui/react"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { ItemTable } from "./table/ItemTable"
import { NewItemModal } from "./modals/NewItemModal"
import { ExportToCSVButton } from "./ExportToCSVButton"

const App = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_ADDRESS}/items/`)
      .then(response => setItems(response.data))
  }, [])

  return (
    <Container maxWidth="2xl">
      <Flex marginTop={"10"} marginBottom={"10"}>
        <Box marginLeft={"-10"}>
          <Heading>Inventory System</Heading>
        </Box>
        <Spacer />
        <HStack spacing={3} marginRight={"-10"}>
          <NewItemModal />
          <ExportToCSVButton />
        </HStack>
      </Flex>
      <Center marginTop={"5"} alignContent={"center"} justifySelf={"center"}>
        <ItemTable items={items} />
      </Center>
    </Container>
  )
}

export default App
