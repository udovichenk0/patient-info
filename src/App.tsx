import './App.css'
import { Box } from '@chakra-ui/react'
import { Header } from './components/header'
import { PatientInfo } from './components/patientinfo'

function App() {
  return (
    <Box w={'460px'} h={'100%'} bg={'white'} p={16}>
      <Header/>
      <PatientInfo/>
    </Box>
  )
}

export default App
