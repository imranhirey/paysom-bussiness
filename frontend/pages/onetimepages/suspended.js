import React from 'react'
import authenticatedRoute from '../../components/protectedroutes/protectedroutes';

function Suspended() {
  return (
    <div>
        <div>
            <p>Your account has been temporary suspended</p>
        </div>
        
    </div>
  )
}
export default authenticatedRoute(Suspended,{
}) ;
