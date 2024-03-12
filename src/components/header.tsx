import { Box, Button, Flex, Image } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} mb="16px">
      <Button 
        p={0}
        display={'flex'} 
        fontWeight={400}
        border={"none"}
        _hover={{ background: "none"}}
        background={'white'}
        alignItems={'center'}
        h={'28.1px'}>
        <Image
          h={'32px'}
          w={'32px'}
        />
        <Box color={"black"} fontWeight={500} fontSize={'24px'}>HealthTap.ai</Box>
      </Button>
      <Box color="black" fontSize={"20px"} fontWeight={900}>︙</Box>
    </Flex>
  )
}