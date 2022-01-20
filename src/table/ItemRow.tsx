import { EditItemModal } from "../modals/EditItemModal"
import { Td, Tr } from "@chakra-ui/react"
import { Item } from "../Item"
import { DeleteItemButton } from "../buttons/DeleteItemButton"

export const ItemRow = ({ item }: { item: Item }) => {
  return (
    <Tr>
      <Td>{item.identifier}</Td>
      <Td>{item.name}</Td>
      <Td>
        {item.description.length > 20
          ? item.description.substring(0, 20)
          : item.description}
      </Td>
      <Td>{item.quantity}</Td>
      <Td>
        <EditItemModal item={item} />
      </Td>
      <Td>
        <DeleteItemButton identifier={item.identifier} />
      </Td>
    </Tr>
  )
}
