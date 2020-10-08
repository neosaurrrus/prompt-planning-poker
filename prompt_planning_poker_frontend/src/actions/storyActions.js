import cuid from 'cuid'

export const getStories = (planUrl) => {

    return (dispatch) => {
        dispatch({ type: 'LOADING_STORIES'})

    fetch(`http://localhost:3000/plans/${planURL}/stories`)
    .then(resp => resp.json())
    .then(res => {
        dispatch({type: 'GET_STORIES', stories: res})
          })
    .catch(err => console.log(err))
    }
}
export const addStory = (story, planURL) => {
    const data = {...story}
    return (dispatch) => {
        dispatch({ type: 'LOADING_STORIES'})
    fetch(`http://localhost:3000/plans/${planURL}/stories`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(res => {
        fetch(`http://localhost:3000/plans/${planURL}/stories`)
        .then(resp => resp.json())
        .then(res => {
            dispatch({type: 'GET_STORIES', stories: res})
              })
        .catch(err => console.log(err))



          })
        .catch((err) => console.log(err))
    }
}

export const deleteStory = (id, planURL) => { 

    return (dispatch) => {
        dispatch({ type: 'LOADING_STORIES'})
    fetch(`http://localhost:3000/plans/${planURL}/stories`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(id)
    })
    .then(resp => resp.json())
    .then(res => {
        fetch('http://localhost:3000/plans')
        .then(resp => resp.json())
        .then(res => {
            dispatch({type: 'GET_STORIES', stories: res})
              })
        .catch(err => console.log(err))
          })
    .catch((err) => console.log(err))
    }
}