import { Box, Button, Flex } from "@chakra-ui/react"
import { useState } from "react"
import { Chart } from "./chart/chart";
import { months, testData, weekdaysLong } from "../config";
import { Footer } from "./footer";
export const PatientInfo = () => {
  const [selectedDate, selectDate] = useState<string>("")
  const date = new Date(selectedDate)
  const weekDay = date.getDay()
  const monthDate = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  const weekName = weekdaysLong[weekDay]
  const monthName = months[month]
  return (
    <Box >
      <Flex color={"black"} fontWeight={700} mb={"16px"} alignItems="center">
        <Box mr={"16px"} fontSize="24px" lineHeight={"28.8px"}>Donald Jones</Box> 
        <Box fontSize="16px" color="#919191"> — 69 yrs</Box>
      </Flex>
      <Box rounded="10px" border="1px solid #ededed">
        <Flex roundedTop="10px" justifyContent="space-between" alignItems="center" borderBottom={"1px solid #ededed"} p={"16px"} bg={'#fafafa'}>
          <Box fontSize={'16px'} lineHeight={"19.2px"} fontWeight={700} color={"black"}>Medicare 5-Day</Box>
          <Box color="#919191" lineHeight="14.4.px" fontWeight={400} fontSize={"12px"}>As of: 3/2/24 12:00AM GMT</Box>
        </Flex>
        <Box p={"16px"}>
          <Chart data={testData} selectDate={selectDate} selectedDate={selectedDate}/>
          <Flex justifyContent="space-between" color="black">
            <Flex alignItems="center">
              <Box 
                fontWeight={700} 
                fontSize={16} 
                mr={"4px"}
                lineHeight="19.2px">
                Target Date:
              </Box>
              <Box 
                lineHeight="19.2px"
                fontSize="16px">
                {selectedDate && (
                  <Box color="#F64E00">{weekName}, {monthName} {monthDate}, {year}</Box>
                )}
                {!selectedDate && (
                  <Box>Select a target date</Box>
                )}
              </Box>
            </Flex>
            <Button 
              fontSize={14}
              lineHeight="16.8px"
              outline="none"
              _hover={{ borderColor: "#919191"}}
              border="1px solid"
              borderColor={selectedDate ? "#F64E00" : "#919191"}
              color={selectedDate ? "white" : "black"}
              backgroundColor={selectedDate ? "#f64e00" : "white"}
              p={"8px"}>
              Apply
            </Button>
          </Flex>
        </Box>
        <Footer/>
      </Box>
    </Box>
  )
}

