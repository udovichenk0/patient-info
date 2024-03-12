import { Box, Flex, Grid, RadioGroup, useRadio, useRadioGroup } from "@chakra-ui/react"
import { useState } from "react"

function RadioButton(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getRadioProps()

  return (
    <Flex alignItems="center" as='label' columnGap="12px">
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        w="12px"
        h="12px"
        rounded="4px"
        bg="#f2f2f2"
        _disabled={{
          bg: "#919191"
        }}
        _checked={{
          bg: '#F64E00',
        }}
      >
      </Box>
      <Box lineHeight="14.4px">
        {props.children}
      </Box>
    </Flex>
  )
}

export const Footer = () => {
  const [value, setValue] = useState('1')
  const options = ['Potential Opportunity Increase', 'Confirmed Payout Estimate', 'Selected Payout Estimate']

  const { getRadioProps } = useRadioGroup()
  return (
    <RadioGroup 
      p={4}
      roundedBottom="10px"
      borderTop="1px solid #ededed"
      onChange={setValue} 
      value={value}>
      <Grid w="100%" rowGap="8px" color="black" templateColumns="repeat(2, 1fr)" fontSize={12}>
        {options.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <RadioButton key={value} {...radio}>
            {value} 
          </RadioButton>
        )
      })}
      </Grid>
    </RadioGroup>
  )
}

