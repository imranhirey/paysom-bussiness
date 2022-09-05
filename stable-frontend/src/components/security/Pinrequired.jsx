import { Button, Center, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, PinInput, PinInputField, useDisclosure } from "@chakra-ui/react"
import { useContext } from "react"
import { Pincontext } from "../../context/pincontext"

export default function Pinrequired() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let [pinrequired,setpinrequired]= useContext(Pincontext)

    let inputsstyle={
  
            borderRadius: '10px',
            padding: '10px',
            width: '70px',
            height: '70px',
            margin: '6px',
    
 
    }
    return (
      <>
        <Modal 
          isCentered
          onClose={()=>{
            setpinrequired(true)
          }}
          isOpen={pinrequired}
          motionPreset='slideInBottom'
          
          
        >
          <ModalOverlay />
          <ModalContent>
<ModalHeader>
<Center><p style={{
        color:'#D3D3D3',
        margin:'7px'
    }}>PIN IS REQUIRED</p></Center>
</ModalHeader>
            <ModalBody>
            <HStack display='flex' justifyContent='center' alignItems='center'>
  <PinInput placeholder="*" size='lg' type='alphanumeric'>
    <PinInputField style={inputsstyle}  />
    <PinInputField style={inputsstyle} />
    <PinInputField style={inputsstyle} />
    <PinInputField  style={inputsstyle} />
  </PinInput>
</HStack>
            </ModalBody>
            <ModalFooter>
       
              <Button onClick={()=>{
                setpinrequired(false)
              }} variant='solid'>Access</Button>
              
            </ModalFooter>
            
          </ModalContent>
        </Modal>
      </>
    )
  }
  

/*

*/