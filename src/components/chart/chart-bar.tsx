import { Flex, Center, Box } from "@chakra-ui/react"
import { weekdaysShort } from "../../config"

export const Bar = ({ 
  money, 
  date, 
  active,
  onSelectDate
}: { 
  money: number, 
  date: string, 
  active: boolean,
  onSelectDate: (date: string) => void
}) => {
  const week = new Date(date).getDay()
  return (
    <Flex direction="column" w="42px" onClick={() => onSelectDate(date)}>
      <Box mb="8px">
        <Center 
          roundedTopLeft="4px"
          roundedTopRight="4px"
          h="34px" 
          w="full" 
          fontSize="12px" 
          backgroundColor={active ? "rgba(246, 78, 0, 0.25)" : "#ededed"}
          color={"black"}>
          +${money}
        </Center>
        <Box 
          h="138px" 
          w="full" 
          roundedBottomLeft="4px"
          roundedBottomRight="4px"
          backgroundColor={active ? "#f64e00" : "#919191"}>
        </Box>
      </Box>
      
      <Center 
        w="full" 
        h="33px" 
        fontSize="14px" 
        lineHeight="16.8px" 
        fontWeight={700} 
        color={active ? "white" :"black"}
        backgroundColor={active ? "#f64e00" : ""}
        border={active ? "" : "1px solid #919191"}
        borderRadius="6px">
        {weekdaysShort[week]}
      </Center>
    </Flex>
  )
}

