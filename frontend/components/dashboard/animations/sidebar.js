// sidebar animations with framer motion
export default class Animations{
    sidebar={
        hidden:{
            x:'-100vw',
            transition:{
                type:'tween',
                duration:0.5,
                ease:'easeInOut'
            },
           
            
        },
        visible:{
            x:'0vw',
            transition:{
                type:'tween',
                duration:0.5,
                ease:'easeInOut'

            }

    
}
    }
    button={
        hidden:{
            x:'-100vw',
            transition:{
                type:'tween',
                duration:0.5,
                ease:'easeInOut'
            },
        },
        visible:{
            x:'0vw',
            transition:{
                type:'tween',
                duration:0.5,
                ease:'easeInOut'
            }

    }


}}