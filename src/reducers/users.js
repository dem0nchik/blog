const initialState = {
    messageSignin: ''
}

const users = (state = initialState, action) => {
   switch(action.type) {
       case 'MESSAGE_SINGIN':
               return ( {...state, messageSignin: action.message})
       default:
           return state
   }
}

export default users