import { Flex } from "@chakra-ui/react"
import { Bar } from "./chart-bar"

export const Chart = ({ 
  data, 
  selectDate,
  selectedDate,
 }: { 
  data: {money: number, date: string}[], 
  selectDate: (date: string) => void,
  selectedDate: string,
}) => {
  return (
    <Flex justifyContent="space-between" mb={"16px"}>
      {data.map(({ money, date }) => {
        return (
          <Bar
            onSelectDate={selectDate}
            money={money} 
            date={date} 
            active={selectedDate == date}/>
        )
      })}
    </Flex>
  )
}