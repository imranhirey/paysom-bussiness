import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"

function Areyousure({open,setopen,title,des,onsubmit}) {
    return (
      <>
  
        <Modal isOpen={open} onClose={()=>{
            setopen(false)
        }}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton autoFocus={false} />
            <ModalBody>
             {des}
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={()=>{
                onsubmit()
               
              }} colorScheme='blue' mr={3} >
                yes
              </Button>
              <Button onClick={()=>{
                    setopen(false)
              }} variant='ghost'>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Areyousure;