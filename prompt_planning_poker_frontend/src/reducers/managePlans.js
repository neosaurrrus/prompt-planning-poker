import cuid from 'cuid';

export default function manageRestaurants(state = {plans:[], stories:[] }, action) {

    switch (action.type){
        case 'ADD_PLAN':
            console.log("ADD_PLAN")
            const id = cuid()
            const {name, owner} = action.plan
            return {...state, 
                    plans: [...state.plans, {id, name, owner}]} 
        
        case 'DELETE_PLAN':
                console.log("DELETE_PLAN")
                const plans = state.plans.filter(plan => plan.id !== action.id)
                return {...state, plans}
                
                    





        default:
            return state;
    }
}
