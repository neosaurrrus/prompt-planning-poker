import cuid from 'cuid'

export const getPlans = () => {

    return (dispatch) => {
        dispatch({ type: 'LOADING_PLANS'})

    fetch('http://localhost:3000/plans')
    .then(resp => resp.json())
    .then(res => {
        dispatch({type: 'GET_PLANS', plans: res})
          })
    .catch(console.log("Loading Failed"))
    }
}
export const addPlan = (plan) => {
    debugger
    const data = {...plan, url: cuid()}
    return (dispatch) => {
        dispatch({ type: 'LOADING_PLANS'})
    fetch('http://localhost:3000/plans', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(res => {
        dispatch({type: 'GET_PLANS', plans: res.plans})
          })
    .catch(console.log("Loading Failed"))
    }
}

export const deletePlan = (id) => {
    debugger
    return (dispatch) => {
        dispatch({ type: 'LOADING_PLANS'})
    fetch(`http://localhost:3000/plans/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(id)
    })
    .then(resp => resp.json())
    .then(res => {
        dispatch({type: 'GET_PLANS', plans: res.plans})
          })
    .catch(console.log("Loading Failed"))
    }
}