

export default function managePlans(state = {plans:[], loading: false }, action) {

    switch (action.type){

        case 'LOADING_PLANS':
            return {
                ...state,
                loading:true
            }

        case 'GET_PLANS':
            console.log("GET_PLANS")
            return {...state, 
                    plans: action.plans,
                    loading: false
                } 
        
        case 'DELETE_PLAN':
                console.log("DELETE_PLAN")
                return {
                    ...state,
                    loading:true
                }
            

        default:
            return state;
    }
}
