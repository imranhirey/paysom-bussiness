import { Button, FormControl, FormHelperText, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react';

function Newappform({open,setopen,onsave}) {
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    let [projectinfo,setprojectinfo] = React.useState({
      appname:'',
      appendpoint:''
    })

   let handleChange = (e) => {
    setprojectinfo({
      ...projectinfo,
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
            <ModalHeader>Create New Application </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl >
                <FormLabel >Application Name</FormLabel>
                <Input onChange={(e)=>{
                  handleChange(e)

                }} name='appname' type='text'  ref={initialRef} placeholder='Application Name' />
              </FormControl>
  
              <FormControl  mt={4}>
                <FormLabel>End Point</FormLabel>
                <Input  onChange={(e)=>{
                  handleChange(e)

                }} name='appendpoint' type='url' placeholder='what is the Endpoint of your application' />
                <FormHelperText m={2}>INFO: Endpoint is the url that you will send requests to your appication  note that you can only send request through this url any other endpoints will be blocked </FormHelperText>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={()=>{
                 onsave(projectinfo)
              
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

export default Newappform;