

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
        case 'GET_STORIES':
            console.log("GET_STORIES")
    
            return {...state, 
                    stories: action.stories,
                    loading: false
                } 
        case 'GET_PLAN':
            console.log("GET_PLAN")
            return {...state, 
                    plan: action.plan,       
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
