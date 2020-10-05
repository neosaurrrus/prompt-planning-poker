import cuid from 'cuid';

export default function manageRestaurants(state = {plans:[], stories:[] }, action) {

    switch (action.type){
        case 'ADD_PLAN':
            console.log("ADD_PLAN")
            const id = cuid()
            const name = action.name
            return {...state, 
                    plans: [...state.plans, {id, name}]}  
        default:
            return state;
    }
}
