import config from '../config'
export const getPosts = data => ({
    type: 'GET_POSTS',
    data
})

export const getPostData = postData => ({
    type: 'GET_POST_DATA',
    postData
})

export const messageSignin = message => ({
    type: 'MESSAGE_SINGIN',
    message
})

export const signin = (user, password) => {
    return dispatch => {
        fetch(config.back+'/api/user/signin', { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: token',
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true
            },
            body: JSON.stringify({user, password})
        })
        .then(res => res.json())
        .then(data => dispatch(messageSignin(data.message)))
    }
}

export const login = (user, password) => {
    return dispatch => {
        fetch(config.back+'/api/user/login', { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: token',
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true
            },
            body: JSON.stringify({user, password})
        })
        .then(res => res)
        //.then(data => console.log(data))
        .catch(e => console.log(e))
    }
}