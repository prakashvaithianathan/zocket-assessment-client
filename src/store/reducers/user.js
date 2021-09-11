import axios from '../../../src/axios'
const initialState ={
    user:null
}

export const userReducer = (state=initialState,action)=>{
    console.log();
    switch(action.type){
        case 'SEND_USER':
            (async()=>{
                const data = await axios.post('/api/user/add',{name:'',email:action.user,phone:''},{
                    'Content-type':'application/json'
                })
                
            })()
            
            return{
              
                user:action.user
            } 
            case 'SEND_FULL_USER':
               
                (async()=>{
                    const data = await axios.put('/api/user/update',{data:action.user},{
                        'Content-type':'application/json',
                       headers:{'authorization':action.id.id}
                    })
                  
                })()
                
                return{
                  
                    user:action.user
                } 
            default:
                return state
    }
}