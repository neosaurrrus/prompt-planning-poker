

export const getPlayers = (plan, story) => {
    
    return (dispatch) => {
        dispatch({ type: 'LOADING_PLAYERS'})

    fetch(`http://localhost:3000/plans/${plan.url}/stories/${story.id}`)
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
    fetch(`http://localhost:3000/plans/${plan.url}/stories/${story.id}/players`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(res => {
        fetch(`http://localhost:3000/plans/${plan.url}/stories/${story.id}/players`)
        .then(resp => resp.json())
        .then(res => {
            

            dispatch({type: 'GET_PLANS', plans: res})
              })
        .catch(err => console.log(err))
          })
        .catch((err) => console.log(err))
    }
}

export const deletePlayer = (plan, story) => { 
    return (dispatch) => {
        dispatch({ type: 'LOADING_PLAYERS'})
    fetch(`http://localhost:3000/plans/${plan.url}/stories/${story.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(story.id)
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