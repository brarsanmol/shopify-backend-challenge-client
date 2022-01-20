import { Tbody } from "@chakra-ui/react"
import React from "react"
import { Item } from "../Item"
import { ItemRow } from "./ItemRow"

export const ItemTableBody = ({ items }: { items: Array<Item> }) => {
  return (
    <Tbody>
      {items.map((item: Item, index: number) => (
        <ItemRow key={item.identifier} item={item} />
      ))}
    </Tbody>
  )
}
