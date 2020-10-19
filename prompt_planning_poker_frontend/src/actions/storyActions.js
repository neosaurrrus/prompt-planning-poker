

export const getStories = (plan = {url: "testurl1"}) => {
    
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

export const deleteStory = (id, plan) => { 
    return (dispatch) => {
        dispatch({ type: 'LOADING_STORIES'})
    fetch(`http://localhost:3000/plans/${plan.url}/stories/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(id)
    })
    .then(resp => resp.json())
    .then(res => {
        fetch(`http://localhost:3000/plans/${plan.url}`)
        .then(resp => resp.json())
        .then(res => {
            dispatch({type: 'GET_PLAN', plan: plan})
              })
        .catch(err => console.log(err))
          })
    .catch((err) => console.log(err))
    }
}

export const deletePlayers = (plan, story) => { 
    return (dispatch) => {
        dispatch({ type: 'LOADING_PLANS'})
    const newStory = {...story}
    delete newStory.players
    fetch(`http://localhost:3000/plans/${plan.url}/stories/${story.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(newStory)
    })
    .then(resp => resp.json())
    .then(res => {
        fetch(`http://localhost:3000/plans/${plan.url}/stories/${story.id}`)
        .then(resp => resp.json())
        .then(res => {
            dispatch({type: 'GET_PLAN', story: res})
              })
        .catch(err => console.log(err))
          })
    .catch((err) => console.log(err))
    }
}