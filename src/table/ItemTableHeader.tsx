import { Thead, Tr, Th } from "@chakra-ui/react"

export const ItemTableHeader = () => {
  return (
    <Thead>
      <Tr>
        <Th>Identifier</Th>
        <Th>Name</Th>
        <Th>Description Slug</Th>
        <Th>Quantity</Th>
        <Th>Edit</Th>
        <Th>Delete</Th>
      </Tr>
    </Thead>
  )
}
