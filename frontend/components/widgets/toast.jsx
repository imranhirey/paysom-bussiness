import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function Toast({hor,ver,message}) {
  const [open, setopen] = React.useState(true)



 setTimeout(() => {
    setopen(false)
 }, 2000);

  const handleClose = () => {
   setopen(false)
  };

  
  
     

  return (
    <div>
      <Snackbar
        anchorOrigin={{ 
            vertical: ver,
            horizontal: hor
        }}
        open={open}
        onClose={handleClose}
        message={message}
        key={ver + hor}
      />
    </div>
  );
}
