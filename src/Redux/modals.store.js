
const initialState = {
    showYesNoModal: false,
    selectedItem: null
}

export function modalsStore(state = initialState, action) {
    switch(action.type){
        case "SELECT_ITEM":
            return {
                ...state,
                selectedItem: action.payload
            }
        case "ShowYesNoModal" :
            return {
                ...state,
                showYesNoModal: true
            }
        case "HideYesNoModal" :
            return {
                ...state,
                showYesNoModal: false
            }
        default:
            return state;
    }
}


