

export const getPlayers = (plan, story) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PLAYERS'})

    fetch(`${process.env.REACT_APP_API_URL}/plans/${plan.url}/stories/${story.id}`)
    .then(resp => resp.json())
    .then(res => {
        dispatch({type: 'GET_PLAYERS', players: res.players})
          })
    .catch(err => console.log(err))
    }
}

export const addPlayer = (plan, story, player) => {
   
    const data = {plan_id: plan.id, story_id: story.id, player}
    return (dispatch) => {
        dispatch({ type: 'LOADING_PLAYERS'})
    fetch(`${process.env.REACT_APP_API_URL}/plans/${plan.url}/stories/${story.id}/players`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(res => {
        fetch(`${process.env.REACT_APP_API_URL}/plans/${plan.url}`)
        .then(resp => resp.json())
        .then(res => {
          
            dispatch({type: 'GET_STORIES', stories: res.stories})
              })
        .catch(err => console.log(err))
          })
        .catch((err) => console.log(err))
    }
}

