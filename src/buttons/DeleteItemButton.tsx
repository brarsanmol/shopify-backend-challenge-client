import { Button } from "@chakra-ui/react"
import axios from "axios"

export const DeleteItemButton = ({ identifier }: { identifier: number }) => {
  const onButtonSubmit = () => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_ADDRESS}/items/${identifier}`)
      .then(response => {
        if (response.status === 204) window.location.reload()
      })
  }
  return (
    <Button colorScheme={"red"} onClick={onButtonSubmit}>
      Delete
    </Button>
  )
}
