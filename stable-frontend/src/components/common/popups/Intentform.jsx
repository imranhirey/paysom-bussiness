import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react';

function Intentform({open,setopen,onsave}) {
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    let [intentinfo,setintentinfo] = React.useState({
      amount:'',
      reason:''
    })

   let handleChange = (e) => {
    setintentinfo({
      ...intentinfo,
      [e.target.name]:e.target.value
    })
   }  
    return (
      <>
       
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={open}
          onClose={() => setopen(false)}
          
          
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create an intent </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl >
                <FormLabel >Ammount</FormLabel>
                <Input onChange={(e)=>{
                  handleChange(e)

                }} name='amount' type='number'  ref={initialRef} placeholder='Enter the intent amount' />
              </FormControl>
  
              <FormControl  mt={4}>
                <FormLabel>Reason</FormLabel>
                <Input  onChange={(e)=>{
                  handleChange(e)

                }} name='reason' placeholder='why you are creating this intent' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={()=>{
                 onsave(intentinfo)
              
              }} colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={()=>{
               setopen(false)
              }}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default Intentform;