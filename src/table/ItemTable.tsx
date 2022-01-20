import { Table } from "@chakra-ui/react"
import React from "react"
import { Item } from "../Item"
import { ItemTableBody } from "./ItemTableBody"
import { ItemTableHeader } from "./ItemTableHeader"

export const ItemTable = ({ items }: { items: Array<Item> }) => {
  return (
    <Table variant={"striped"}>
      <ItemTableHeader />
      <ItemTableBody items={items} />
    </Table>
  )
}
