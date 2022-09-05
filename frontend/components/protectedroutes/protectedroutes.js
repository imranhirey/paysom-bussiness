import React from 'react'
import Apicaller from '../../resources/apicaller';
import Router from 'next/router';

const authenticatedRoute=(Component=null,options={})=>{
   class Authentication extends React.Component{
    state={
        loading:true,
        account:null
    }
    componentDidMount(){
        let getuser=async()=>{
            let api= new Apicaller()
            let token=localStorage.getItem('token')
            let req= await api.getaccount(token)
            let account= req.account && req.account.data
            console.log('account',account)
            if (account ==undefined){
                return false
                
            }
            else{
                this.setState({
                    account:account,
            
                })
                return true
                
            }
            
            
        }
       
        let user=false
         getuser().then((res)=>{
            console.log('res',res)
            user=res
            console.log('user',user)
        if (user){
            this.setState({
                loading:false
            })
        }
        else{

            if(options.redirect){
                Router.push(options.redirect)
            }
            else{
                Router.push('/auth/login')
            }
            
        }
         })
                
        

    }

    

    render(){
        let {loading}=this.state
        if(loading){
            return <div>loading</div>
        }
        else{
            return <>
                <Component {...this.props} account={this.state.account} authenticated={this.state.account==null?false:true}/>
            </>
        }

        
    }

   }
   return Authentication
}
export default authenticatedRoute;