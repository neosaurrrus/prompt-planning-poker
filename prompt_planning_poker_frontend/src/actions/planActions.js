

export const setUser = user => {
    return (dispatch) => {
        dispatch({ type:'SET_USER', user: user})
    }
}

export const getPlans = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PLANS'})
    fetch(`${process.env.REACT_APP_API_URL}/plans`)
    .then(resp => resp.json())
    .then(res => {
        dispatch({type: 'GET_PLANS', plans: res})
          })
    .catch(err => console.log(err))
    }
}
export const getPlan = (url) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PLANS'})
    fetch(`${process.env.REACT_APP_API_URL}/plans/${url}`)
    .then(resp => resp.json())
    .then(res => {
        dispatch({type: 'GET_PLAN', plan: res})
          })
    .catch(err => console.log(err))
    }
}
export const addPlan = (plan) => {
    const data = {...plan}
    return (dispatch) => {
        dispatch({ type: 'LOADING_PLANS'})
    fetch(`${process.env.REACT_APP_API_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(res => {
        fetch(`${process.env.REACT_APP_API_URL}`)
        .then(resp => resp.json())
        .then(res => {
            dispatch({type: 'GET_PLANS', plans: res})
              })
        .catch(err => console.log(err))
          })
        .catch((err) => console.log(err))
    }
}

export const deletePlan = (id) => { 
    return (dispatch) => {
        dispatch({ type: 'LOADING_PLANS'})
    fetch(`${process.env.REACT_APP_API_URL}/plans/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(id)
    })
    .then(resp => resp.json())
    .then(res => {
        fetch(`${process.env.REACT_APP_API_URL}/plans`)
        .then(resp => resp.json())
        .then(res => {
            dispatch({type: 'GET_PLANS', plans: res})
              })
        .catch(err => console.log(err))
          })
    .catch((err) => console.log(err))
    }
}

export const editPlan = (plan,changedKey) => { 
    return (dispatch) => {
        dispatch({ type: 'LOADING_PLANS'})
    const newPlan = {...plan, ...changedKey}
    fetch(`${process.env.REACT_APP_API_URL}/plans/${plan.url}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(newPlan)
    })
    .then(resp => resp.json())
    .then(res => {
        fetch(`${process.env.REACT_APP_API_URL}/plans/${plan.url}`)
        .then(resp => resp.json())
        .then(res => {
            dispatch({type: 'GET_PLAN', plan: res})
              })
        .catch(err => console.log(err))
          })
    .catch((err) => console.log(err))
    }
}