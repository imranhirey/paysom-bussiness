import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText,Divider } from '@mui/material'
import React from 'react'
import {Info} from '@mui/icons-material'
import {motion} from 'framer-motion'

function Paymentspage() {
    let payments=[1,2,3,4,5,6]
  return (
    <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',    
        backgroundColor:'#f5f5f5',
        margin:'10px',
    }}>
        <div style={{
            flex:1,
            width:'100%',
            height:'100%',
            display:'flex',
            flexDirection:'column',
            backgroundColor:'white',
            overflowY: 'scroll',
            overflowX: 'hidden',
            width:'500px',
            float: 'left',
            height:'90%',
            position:'relative',
            '&::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,.1)',
                outline: '1px solid slategrey'
              }
           

        }}>
            <List>
                
            {payments.map(payment=>(
                <motion.div  >
                <ListItem style={{
                    backgroundColor:'#f5f5f5',
                    borderRadius:'10px',
                    margin:'10px',
                    width:'100%'
                
                  

                }}>
                    <ListItemText primary={<>
                    <div style={{
                        width:'100%',
                        height:'100%',
                       
                        display:'flex',
                        margin:'12px',
                        padding:0,
                      

                    }}>
                        <p>Imran Nur Hirey<p>trx: this transaction id</p></p> <hr/>
                        <Divider/>
                         <p>Pad via qrcide<p>on 12-12-2019</p></p>
                         
                        

                        </div>
                       
                       </>}   secondary='$100'/>
                  
                       <Divider/>
                       <ListItemButton  disableTouchRipple disableRipple  style={{
                        width:'10px',
                        display:'flex',
                        justifyContent:'end',
                        backgroundColor:'#f5f5f5'
                       
                       }}>
                       <Button startIcon={<Info/>} style={{
                       
                    }}>Details</Button>
                       </ListItemButton>

                </ListItem>
                </motion.div>
            ))}
            
            </List>

        </div>
        <div style={{
            flex:1,
            width:'100%',
            height:'100%',
            display:'flex',
            flexDirection:'column',
           backgroundColor:'white'
            

            

        }}>

        </div>

    </div>
  )
}

export default Paymentspage