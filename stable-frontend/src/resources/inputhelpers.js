let placeholder=(input)=>{
    let placeholder=input
    if(input==='businessname'){
      placeholder='Enter your business name'
    }
    if(input==='businessaddress'){
        placeholder='Enter your business address'
        }
    if(input==='business_registration_number'){
        placeholder='Enter your business registration number'
        }
    if(input==='businessphone'){
        placeholder='Enter your business phone number'
        }
    if(input==='businessemail'){
        placeholder='Enter your business email'
        }
    if(input==='businesswebsite'){
        placeholder='Enter your business website'
        }
    if(input==='businessdescription'){
        placeholder='Enter your business description'
        }
    if(input==='business_owner_name'){
        placeholder='Enter the business owner name'
        }
    if(input==='password'){
        placeholder='Enter your password'
        }
    if(input==='confirm_password'){
        placeholder='Confirm your password'
        }
    return placeholder
    
  }
  let type=(input)=>{
    let type=input
    if(input==='businessname'){
      type='text'
    }
    if(input==='businessaddress'){
        type='text'
        }
    if(input==='business_registration_number'){
        type='tel'
        }
    if(input==='businessphone'){
        type='text'
        }
    if(input==='businessemail'){
        type='email'
        }
    if(input==='businesswebsite'){
        type='url'
        }
    if(input==='businessdescription'){
        type='text'
        }
    if(input==='business_owner_name'){
        type='text'
        }
    if(input==='password'){
        type='password'
        }
    if(input==='confirm_password'){
        type='password'
        }
    return type
    
  }
  module.exports={
    placeholder,
    type
    }