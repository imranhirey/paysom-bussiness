import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from '@chakra-ui/react';
import React from 'react';

function Subscribtionform({open,setopen,onsave}) {
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    let [subinfo,setsubinfo] = React.useState({
      amount:'',
      name:'',
     type:'',
    })

   let handleChange = (e) => {
    setsubinfo({
      ...subinfo,
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
            <ModalHeader>Create New Subscribtion </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl >
                <FormLabel >Subscribtion Name</FormLabel>
                <Input onChange={(e)=>{
                  handleChange(e)

                }} name='name' type='name'  ref={initialRef} placeholder='Enter the sub name' />
              </FormControl>
  
              <FormControl  mt={4}>
                <FormLabel>Amount</FormLabel>
                <Input  onChange={(e)=>{
                  handleChange(e)

                }} name='amount' placeholder='Enter th amount' />
              </FormControl>
              <FormControl  mt={4}>
                <FormLabel>Type</FormLabel>
                <Select name='type' onChange={(e)=>{
                  handleChange(e)

                }}  placeholder='Select Subscribtion Type'>
  <option value='Weekly'>Weekly</option>
  <option value='MONTHLY'> MONTHLY</option>
  <option value='YEARLY'>YEARLY</option>
</Select>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={()=>{
                 onsave(subinfo)
              
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

export default Subscribtionform;