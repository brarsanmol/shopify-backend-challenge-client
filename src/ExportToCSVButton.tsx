import { Button } from "@chakra-ui/react"
import { saveAs } from "file-saver"

export const ExportToCSVButton = () => {
  const onSubmit = () => {
    saveAs(
      `${process.env.REACT_APP_SERVER_ADDRESS}/items/export/csv`,
      "items.csv"
    )
  }
  return (
    <Button colorScheme={"blue"} onClick={onSubmit}>
      Export to CSV
    </Button>
  )
}
