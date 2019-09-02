const initialState = {
     data: null,
     postData: null
}

const posts = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_POSTS':
                return ( {...state, data: action.data})
        case 'GET_POST_DATA':
                return ( {...state, postData: action.postData})
        default:
            return state
    }
}

export default posts