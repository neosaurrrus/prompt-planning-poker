
export const fetchPlans = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PLANS'})

    fetch('https://localhost:3000/plans')
    .then(resp => resp.json())
    .then(res => {
        dispatch({type: 'GET_PLANS', plans: res.plans})
          })
    .catch(console.log("Loading Failed"))
    }
}
