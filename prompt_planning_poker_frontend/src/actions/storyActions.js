import cuid from 'cuid'

export const getStories = (plan) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_STORIES'})

    fetch(`http://localhost:3000/plans/${plan.url}/stories`)
    .then(resp => resp.json())
    .then(res => {
        dispatch({type: 'GET_STORIES', stories: res})
          })
    .catch(err => console.log(err))
    }
}
export const addStory = (story, plan) => {
    debugger
    const data = {...story, url:plan.url}
    return (dispatch) => {
        dispatch({ type: 'LOADING_STORIES'})
    fetch(`http://localhost:3000/plans/${plan.url}/stories`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(res => {
        fetch(`http://localhost:3000/plans/${plan.url}/stories`)
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