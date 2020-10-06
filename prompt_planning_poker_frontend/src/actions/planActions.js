
export const getPlans = () => {

    return (dispatch) => {
        dispatch({ type: 'LOADING_PLANS'})

    fetch('http://localhost:3000/plans')
    .then(resp => resp.json())
    .then(res => {
        console.log("kop")
        dispatch({type: 'GET_PLANS', plans: res})
          })
    .catch(console.log("Loading Failed"))
    }
}
export const addPlan = (plan) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PLANS'})
    fetch('http://localhost:3000/plans', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(plan)
    })
    .then(resp => resp.json())
    .then(res => {
        dispatch({type: 'GET_PLANS', plans: res.plans})
          })
    .catch(console.log("Loading Failed"))
    }
}
